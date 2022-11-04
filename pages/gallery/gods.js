import styles from "../../styles/Home.module.css";
import GalleryNav from "../../components/GalleryNav";

export default function Home() {
  return (
    <>
      <GalleryNav />
      <div className={styles.main}>
        GODS
        {/* <div className={styles.heroBorder}>
        <img
          className={styles.hero}
          src="/god11.png"
          alt="An image of a badass african god surrounded by ether"
        />
      </div> */}
        {/* <h2>Coming Soon</h2>
      <h2>November 2022</h2> */}
      </div>
    </>
  );
}
