import styles from "../../styles/Home.module.css";
import GalleryNav from "../../components/GalleryNav";
import GalerryImage from "../../components/GalleryImage";

export default function Home() {
  return (
    <>
      <GalleryNav />
      <div className={styles.galleryMain}>
        <GalerryImage
          img="/immutables/04SerenTheStarlitImmutable.png"
          name="Seren"
        />
        <GalerryImage
          img="/immutables/11ChromaticaTheWalkingImmutable.png"
          name="Chromatica"
        />
        <GalerryImage
          img="/immutables/14EelionTheRationalImmutable.png"
          name="Eelion"
        />
        <GalerryImage
          img="/immutables/23AtyanaTheFloatingImmutable.png"
          name="Atyana"
        />
        <GalerryImage
          img="/immutables/34MahatmaTheVioletImmutable.png"
          name="Mahatma"
        />
        <GalerryImage
          img="/immutables/36PlutoTheUndeadImmutable.png"
          name="Pluto"
        />
        <GalerryImage
          img="/immutables/39ZuckTheSoulessImmutable.png"
          name="Zuck"
        />
        <GalerryImage
          img="/immutables/40SethTheRuthlessImmutable.png"
          name="Seth"
        />
        <GalerryImage
          img="/immutables/55PrometheusThePerfectImmutable.png"
          name="Prometheus"
        />
        <GalerryImage
          img="/immutables/59GletscherTheFrozenImmutable.png"
          name="Gletscher"
        />
        <GalerryImage
          img="/immutables/63ParvatiTheGlowingImmutable.png"
          name="Parvati"
        />
        <GalerryImage img="/immutables/68.png" name="Animus" />
        <GalerryImage
          img="/immutables/75SilenceTheImperatorsImmutable.png"
          name="Silence"
        />
      </div>
    </>
  );
}
