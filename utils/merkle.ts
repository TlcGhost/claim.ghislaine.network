// import keccak256 from "keccak256"; // Keccak256 hashing
import { Address, encodePacked, keccak256 } from "viem";
import { ethers } from "ethers"; // Ethers

/**
 * Generate Merkle Tree leaf from address and value
 * @param {string} address of airdrop claimee
 * @param {string} value of airdrop tokens to claime
 * @returns {Buffer} Merkle Tree node
 */
export function generateLeaf(address: string, value: string): Buffer {
  return Buffer.from(
    // Hash in appropriate Merkle format
    ethers.utils
      .solidityKeccak256(["address", "uint256"], [address, value])
      .slice(2),
    // keccak256(encodePacked(["address", "uint256"], [address, value])).slice(2),
    "hex"
  );
}
