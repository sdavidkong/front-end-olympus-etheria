import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    // <div className={styles.main}>
    <div className={styles.infoSection}>
      <div className={styles.infoText}>
        {" "}
        <h3>Project Info</h3>
        <p>
          -There are a total of 75 NFTs in the Olympus Etheria collection. There
          will never be any more than 75. <br></br>
          <br></br>
          -There is no official discord channel for this project, beware of
          anyone claiming that there is.<br></br>
          <br></br>
          -Any and all official communications relating to Olympus Etheria will
          occur via our{" "}
          <Link href="https://twitter.com/OlympusEtheria">
            <a className={styles.twitterLink}>Twitter</a>
          </Link>
          .<br></br>
          <br></br>
          -Public minting will begin at an unspecified time on Nov. 16, 2022.
          There is no pre-sale or allow list. <br></br>
          <br></br>
          -Mint price is 0.1 Eth per NFT. There will be a limit of 1 mint per
          unique wallet.<br></br>
        </p>
      </div>
      <div>
        <div className={styles.heroBorder}>
          <img
            className={styles.hero}
            src="/goddesses/22RafiyaTheStoryteller.png"
            alt="An image of a badass african god surrounded by ether"
          />
        </div>
      </div>

      <div className={styles.infoText2}>
        {" "}
        <h3>Smart Contract</h3>
        <p>
          The Olympus Etheria smart contract is verified on etherscan, and uses
          the ERC-721A token standard. It was created using mintplex.xyz on
          Ethereum Mainnet. The contract address is
          <Link
            href="https://etherscan.io/address/0xa27dd4d203761604a252757483412b3ac1e5fe22#code"
            className={styles.contract}
          >
            <a className={styles.navlink}>
              {" "}
              0xA27d D4D203 761604 A252757 483412B3 ac1e5fe22
            </a>
          </Link>
        </p>
      </div>
    </div>
    // </div>
  );
}
