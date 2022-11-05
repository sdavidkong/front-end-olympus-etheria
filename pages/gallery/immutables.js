import styles from "../../styles/Home.module.css";
import GalleryNav from "../../components/GalleryNav";
import GalerryImage from "../../components/GalleryImage";

export default function Home() {
  return (
    <>
      <GalleryNav />
      <div className={styles.galleryMain}>
        <GalerryImage img="/goddesses/01.png" name="Athena The Imperator" />
        <GalerryImage img="/goddesses/01.png" name="Athena The Imperator" />
        <GalerryImage img="/goddesses/01.png" name="Athena The Imperator" />
        <GalerryImage img="/goddesses/01.png" name="Athena The Imperator" />
        <GalerryImage img="/goddesses/01.png" name="Athena The Imperator" />
        <GalerryImage img="/goddesses/01.png" name="Athena The Imperator" />
        <GalerryImage img="/goddesses/01.png" name="Athena The Imperator" />
        <GalerryImage img="/goddesses/01.png" name="Athena The Imperator" />
        <GalerryImage img="/goddesses/01.png" name="Athena The Imperator" />
        <GalerryImage img="/goddesses/01.png" name="Athena The Imperator" />
        <GalerryImage img="/goddesses/01.png" name="Athena The Imperator" />
        <GalerryImage img="/goddesses/01.png" name="Athena The Imperator" />
        <GalerryImage img="/goddesses/01.png" name="Athena The Imperator" />
      </div>
    </>
  );
}
