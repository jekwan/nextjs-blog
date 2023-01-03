import styles from "./layout.module.css";
import Head from "next/head";

import Nav from "./nav";

const name = "김제관";
export const siteTitle = "jekwan.dev";

export default function Layout({ children, home }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Learn how to build a personal website using Next.js" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Nav />

      <main className={styles.container}>{children}</main>
    </>
  );
}
