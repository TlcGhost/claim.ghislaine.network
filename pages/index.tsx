import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Layout } from "../components/Layout";
import styles from "../styles/pages/Home.module.scss";
import { miladyConfig, remilioConfig } from "../config";
import { Claim } from "../components/Claim";
import notConnectedImage from "../public/not_connected.png";
import miladyImage from "../public/milady.png";
import remiImage from "../public/remi.png";

const Home: NextPage = () => {
  const { address, isConnected } = useAccount();

  if (miladyConfig.address === "0x0000000000000000000000000000000000000000") {
    return (
      <div className={styles.comingSoon}>
        <h1>Coming soon...</h1>
      </div>
    );
  }

  return (
    <Layout>
      <div className={styles.home}>
        {!isConnected ? (
          <>
            <Image
              src={notConnectedImage}
              alt="You ain't connected"
              height={250}
              width={250}
              priority
            />
            <h2>Your wallet is NOT connected</h2>
            <ConnectButton showBalance={false} />
          </>
        ) : (
          <div className={styles.claimGrid}>
            <Claim
              config={miladyConfig}
              image={
                <Image
                  alt="milady milady milady"
                  src={miladyImage}
                  height={253}
                  width={205}
                  priority
                />
              }
            />
            <Claim
              config={remilioConfig}
              image={
                <Image
                  alt="remi boiz"
                  src={remiImage}
                  height={253}
                  width={235}
                  priority
                />
              }
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
