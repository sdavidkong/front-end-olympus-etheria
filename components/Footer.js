import React from "react";
import { BsTwitter } from "react-icons/bs";
import styles from "../styles/Home.module.css";
import Header from "../components/header";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.twitterIconDiv}>
        {" "}
        <a
          className={styles.twitterLink}
          href="https://twitter.com/OlympusEtheria"
        >
          <BsTwitter size={28} />
        </a>
      </div>

      <h3>An NFT Series Generated using Dall-E 2 by OpenAI</h3>
      <div className={styles.footerDescription}>
        <a
          className={styles.twitterLink}
          href="https://twitter.com/ShuaiDavidKong"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by davidkong.eth
        </a>
      </div>
    </footer>
  );
};

export default Footer;
