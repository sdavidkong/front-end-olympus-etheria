import GalleryNav from "../../components/GalleryNav";
import styles from "../../styles/Home.module.css";
import GalerryImage from "../../components/GalleryImage";

export default function Home() {
  return (
    <>
      <GalleryNav />
      <div className={styles.galleryMain}>
        <GalerryImage img="/goddesses/01.png" name="Athena" />
        <GalerryImage img="/goddesses/03JunoTheCloudMother.png" name="Juno" />
        <GalerryImage
          img="/goddesses/07LuciaTheGeminiSister.png"
          name="Lucia"
        />
        <GalerryImage
          img="/goddesses/08MeredithTheGeminiSister.png"
          name="Meredith"
        />
        <GalerryImage
          img="/goddesses/10AdamarisTheManifestor.png"
          name="Adamaris"
        />
        <GalerryImage img="/goddesses/13JomalaTheElegant.png" name="Jomala" />
        <GalerryImage img="/goddesses/15EchoTheScientist.png" name="Echo" />
        <GalerryImage
          img="/goddesses/17DaphneTheUnobtainable.png"
          name="Daphne"
        />
        <GalerryImage img="/goddesses/18AnsaTheWindMother.png" name="Ansa" />
        <GalerryImage
          img="/goddesses/22RafiyaTheStoryteller.png"
          name="Rafiya"
        />
        <GalerryImage
          img="/goddesses/26ArtemisTheHuntLeader.png"
          name="Artemis"
        />
        <GalerryImage img="/goddesses/27GenmeiTheInfinite.png" name="Genmei" />
        <GalerryImage
          img="/goddesses/28NefertitiTheCosmic.png"
          name="Nefertiti"
        />
        <GalerryImage
          img="/goddesses/30LakshmiTheGenerous.png"
          name="Lakshmi"
        />
        <GalerryImage
          img="/goddesses/32UrsulaTheMirageMaker.png"
          name="Ursula"
        />
        <GalerryImage img="/goddesses/37LisaTheGoldenSiren.png" name="Lisa" />
        <GalerryImage
          img="/goddesses/38MinervaTheImperatorClone.png"
          name="Minerva"
        />
        <GalerryImage
          img="/goddesses/41OpheliaTheSkyMother.png"
          name="Ophelia"
        />
        <GalerryImage
          img="/goddesses/42GuanYinTheProtector.png"
          name="GuanYin"
        />
        <GalerryImage
          img="/goddesses/45EmalynTheStarReader.png"
          name="Emalyn"
        />
        <GalerryImage img="/goddesses/46DelphiTheOracle.png" name="Delphi" />
        <GalerryImage img="/goddesses/51SoyulTheAlchemist.png" name="Soyul" />
        <GalerryImage
          img="/goddesses/52AnastasiaTheGlamorousSiren.png"
          name="Anastasia"
        />
        <GalerryImage img="/goddesses/56SaoirseTheNoble.png" name="Saorise" />
        <GalerryImage img="/goddesses/57NzingaTheWise.png" name="Nzinga" />
        <GalerryImage
          img="/goddesses/60VeronicaTheGentle.png"
          name="Veronica"
        />
        <GalerryImage
          img="/goddesses/61DemeterTheDeathMother.png"
          name="Demeter"
        />
        <GalerryImage
          img="/goddesses/62PersephoneTheDeathBringer.png"
          name="Persephone"
        />
        <GalerryImage
          img="/goddesses/67GriseldaTheMagician.png"
          name="Griselda"
        />
        <GalerryImage img="/goddesses/68AnimusThePrismatic.png" name="Animus" />
        <GalerryImage img="/goddesses/70LetoTheEccentric.png" name="leto" />
      </div>
    </>
  );
}
