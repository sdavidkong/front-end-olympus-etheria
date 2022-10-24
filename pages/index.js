import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/header";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>~Olympus Etheria~</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className={styles.main}>
        {" "}
        <img
          className={styles.hero}
          src="/god11.png"
          alt="An image of a badass african god surrounded by ether"
        />
        <h2>Coming Soon</h2>
        <h2>Winter 2022</h2>
      </main>

      <footer className={styles.footer}>
        <h3>An NFT Series Generated using Dall-E 2 by OpenAI</h3>
        <div className={styles.footerDescription}>
          <a
            href="https://twitter.com/ShuaiDavidKong"
            target="_blank"
            rel="noopener noreferrer"
          >
            Created by davidkong.eth
          </a>
        </div>
      </footer>
    </div>
  );
}
