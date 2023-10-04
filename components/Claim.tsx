import {
  Address,
  useAccount,
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
} from "wagmi";

import { ethers } from "ethers"; // Ethers

interface ClaimProps {
  config: IConfig;
  image: React.ReactNode;
}

import styles from "styles/pages/Claim.module.scss"; // Page styles
import { IConfig } from "../config";
import { FC, useEffect, useState } from "react";
import { getCountdownString } from "../utils/getCountdownString";
import MerkleTree from "merkletreejs";
import { generateLeaf } from "../utils/merkle";
import { getAddress, parseUnits } from "viem";
import keccak256 from "keccak256";

export const Claim: FC<ClaimProps> = ({ config, image }) => {
  const { address, isConnected } = useAccount();
  const numTokens = config.airdrop[address!!.toLowerCase()];

  const { data: hasClaimed, isLoading } = useContractRead({
    address: config.address,
    abi: [
      {
        name: "hasClaimed",
        inputs: [{ internalType: "address", name: "", type: "address" }],
        outputs: [{ internalType: "bool", name: "", type: "bool" }],
        stateMutability: "view",
        type: "function",
      },
    ],
    functionName: "hasClaimed",
    args: [address!!],
    enabled: isConnected,
    watch: true,
  });

  const [proof, setProof] = useState<string[]>();
  useEffect(() => {
    if (!isConnected || !numTokens || hasClaimed) return;

    const merkleTree = new MerkleTree(
      Object.entries(config.airdrop).map(([address, tokens]) =>
        generateLeaf(
          ethers.utils.getAddress(address),
          ethers.utils.parseUnits(tokens.toString(), config.decimals).toString()
        )
      ),
      keccak256,
      { sortPairs: true }
    );

    const leaf: Buffer = generateLeaf(
      ethers.utils.getAddress(address!!),
      ethers.utils.parseUnits(numTokens.toString(), config.decimals).toString()
    );
    const proof: string[] = merkleTree.getHexProof(leaf);
    setProof(proof);
  }, [address]);

  const {
    config: writeConfig,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: config.address,
    abi: [
      {
        inputs: [
          {
            internalType: "address",
            name: "account",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "bytes32[]",
            name: "merkleProof",
            type: "bytes32[]",
          },
        ],
        name: "claim",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ],
    functionName: "claim",
    args: [
      address,
      numTokens &&
        ethers.utils
          .parseUnits(numTokens?.toString(), config.decimals)
          .toString(),
      proof,
    ],
    enabled: Boolean(proof),
  });

  const { data, error, isError, write } = useContractWrite(writeConfig);

  const { isLoading: isWriteLoading, isSuccess: isWriteSuccess } =
    useWaitForTransaction({
      hash: data?.hash,
      onSuccess(data) {
        console.log("Success", data);
      },
      onError(error) {
        console.log("Error", error);
      },
    });

  // State to trigger re-render
  const [timeRemaining, setTimeRemaining] = useState(
    getCountdownString(config.expiresAt)
  );

  // Update the current time every second
  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(getCountdownString(config.expiresAt));
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.claim}>
      <div className={styles.card}>
        <h2>{config.name}</h2>
        {image}
        <div style={{ marginBottom: "0.5rem" }}>{timeRemaining}</div>
        {isLoading ? (
          // Loading details about address
          <>
            <h1>Loading airdrop details...</h1>
            <p>Please hold while we collect details about your address.</p>
          </>
        ) : !numTokens ? (
          // Not part of airdrop
          <>
            <h1>You do not qualify.</h1>
            <p>Unfortunately, your address does not qualify for the airdrop.</p>
          </>
        ) : isWriteSuccess ? (
          <>
            <h1>Success!</h1>
            <p>You just claimed {numTokens} $GHSI!</p>
          </>
        ) : hasClaimed ? (
          // Already claimed airdrop
          <>
            <h1>Already claimed.</h1>
            <p>You have already claimed {numTokens} tokens from this drop.</p>
          </>
        ) : (
          // Claim your airdrop
          <>
            <h3>You are eligible for {numTokens} $GHSI.</h3>
            <button
              className="lined.thick"
              onClick={() => write?.()}
              disabled={!write || isWriteLoading}
            >
              {isWriteLoading ? "Claiming Airdrop..." : "Claim Airdrop"}
            </button>
            {(isPrepareError || isError) && (
              <div>Error: {(prepareError || error)?.message}</div>
            )}
          </>
        )}
      </div>
    </div>
  );
};
