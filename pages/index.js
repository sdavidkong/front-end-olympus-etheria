import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.homeSection}>
        <div>
          <div className={styles.heroBorder}>
            <img
              className={styles.hero}
              src="/goddesses/01.png"
              alt="An image of a badass african god surrounded by ether"
            />
          </div>
        </div>
        <div className={styles.homeText1}>
          {" "}
          <h3>Welcome to the Realm of Divine Beings</h3>
          <p>
            Olympus, a magnificent fortress city in the clouds, is the imperial
            capital of Etheria. Lead by the fierce Imperator, Athena, her royal
            court has influence throughtout all the land. However, there are
            potent rivals (and false allies) who would seek to claim power for
            themselves…
          </p>
          <p>
            {" "}
            In addition to Olympus, you will find Gods and Goddesses from other
            locales in Etheria, including the Southern Hills, the Outlands, and
            Chaukhamba mountain. Hints and lore about these places are revealed
            through the unique descriptions included with each NFT.
          </p>
        </div>
      </div>

      <div className={styles.homeSection}>
        <div className={styles.homeText2}>
          <h3>Gods, Goddesses, & Immutables</h3>
          <p>
            There are a total of 75 divine beings in Etheria: <br></br>
            <br></br>- 32 Gods <br></br>- 30 Goddesses <br></br>- 13 Immutables
          </p>
          <p>
            Immutables are immortals with no beginning or end. They cannot die
            or change, and remain the same for all of eternity. Each of them
            wields terrifying power, and are dispersed across Etheria.
          </p>
          <p>
            Each divine being is represented by their own NFT, and possesses a
            Special Ability as well as various Adornments that make them truly
            unique. You can view all of these beings in the{" "}
            <Link href="/gallery/goddesses">
              <a className={styles.navlink}>Gallery</a>
            </Link>
            .
          </p>
        </div>
        <div>
          <div className={styles.heroBorder}>
            <img
              className={styles.hero}
              src="/immutables/55PrometheusThePerfectImmutable.png"
              alt="An image of a badass african god surrounded by ether"
            />
          </div>
        </div>
      </div>

      <h2>Mint Price: 0.1 ETH Limit 1 per wallet</h2>
      <h2>Minting on November 16, 2022</h2>
    </div>
  );
}
