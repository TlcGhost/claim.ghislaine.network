// import Meta from "components/Meta"; // Components: Meta
import Head from "next/head";
import Header from "./Header"; // Components: Header
// import Footer from "components/Footer"; // Components: Footer
import type { ReactElement } from "react"; // Types
import styles from "styles/components/Layout.module.scss"; // Component styles

export function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    // Layout wrapper
    <div className={styles.layout}>
      <Head>
        {/* Primary Meta */}
        <title>Claim GHSI</title>
        <meta name="title" content="Claim GHSI" />
        <meta
          name="description"
          content="$GHSI is the meme coin currency of the Ghislaine Network inspired by a global network of elites!"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://claim.ghislaine.network"
        />
        <meta property="twitter:title" content="Claim GHSI" />
        <meta
          name="twitter:image"
          content="https://ghislaine.network/images/banner.png"
        />
        <meta
          property="og:image"
          content="https://ghislaine.network/images/banner.png"
        />

        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      {/* Global header */}
      <Header />

      {/* Injected child content */}
      <div className={styles.layout__content}>{children}</div>
    </div>
  );
}
