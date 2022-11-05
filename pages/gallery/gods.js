import styles from "../../styles/Home.module.css";
import GalleryNav from "../../components/GalleryNav";
import GalerryImage from "../../components/GalleryImage";

export default function Home() {
  return (
    <>
      <GalleryNav />
      <div className={styles.galleryMain}>
        <GalerryImage img="/gods/02AskiaTheDisruptor.png" name="Askia" />
        <GalerryImage img="/gods/05FabianTheCollector.png" name="Fabian" />
        <GalerryImage img="/gods/06AnandaTheThoughtSeer.png" name="Ananda" />
        <GalerryImage img="/gods/09LukasTheInterpretor.png" name="Lukas" />
        <GalerryImage img="/gods/12LuXiaoTheIronWilled.png" name="LuXiao" />
        <GalerryImage
          img="/gods/16LinnaeusTheConstructor.png"
          name="Linnaeus"
        />
        <GalerryImage img="/gods/19YasukeTheSteelMinded.png" name="Yasuke" />
        <GalerryImage img="/gods/20AbhinavTheOriginator.png" name="Abhinav" />
        <GalerryImage img="/gods/21LangsaTheFluidTemporal.png" name="Langsa" />
        <GalerryImage img="/gods/24SedolTheInventor.png" name="Sedol" />
        <GalerryImage img="/gods/25RudolphTheIngenious.png" name="Rudolph" />
        <GalerryImage
          img="/gods/29AkhenatenTheDiscerning.png"
          name="Akhenaten"
        />
        <GalerryImage img="/gods/31RyuginTheConspirator.png" name="Ryugin" />
        <GalerryImage
          img="/gods/33KhemkhaengTheGoldenRuler.png"
          name="Khemkhaeng"
        />
        <GalerryImage img="/gods/35CastanedaTheMystic.png" name="Castaneda" />
        <GalerryImage
          img="/gods/43BehanzinTheIndestructable.png"
          name="Behanzin"
        />
        <GalerryImage img="/gods/44HaraldTheLightNavigator.png" name="Harald" />
        <GalerryImage img="/gods/47CalakmulTheGuardian.png" name="Calakmul" />
        <GalerryImage img="/gods/48HeraclesTheEnchanted.png" name="Heracles" />
        <GalerryImage img="/gods/49MizuchiTheYoungDragon.png" name="Mizuchi" />
        <GalerryImage img="/gods/50RahulTheScientist.png" name="Rahul" />
        <GalerryImage img="/gods/53HermesTheSwift.png" name="Hermes" />
        <GalerryImage img="/gods/54ZenoTheUnshackled.png" name="Zeno" />
        <GalerryImage img="/gods/58BaoZhengTheJust.png" name="BaoZheng" />
        <GalerryImage img="/gods/64LucienTheCunning.png" name="Lucien" />
        <GalerryImage img="/gods/65IdrisTheOrator.png" name="Idris" />
        <GalerryImage img="/gods/66KasperovTheTactician.png" name="Kasperov" />
        <GalerryImage
          img="/gods/69ArmstrongTheRuleMaker.png"
          name="Armstrong"
        />
        <GalerryImage
          img="/gods/71AndersonTheEarthFather.png"
          name="Anderson"
        />
        <GalerryImage img="/gods/72TenjinThePoet.png" name="Tenjin" />
        <GalerryImage
          img="/gods/73ValdemarTheAmalgamator.png"
          name="Valdemar"
        />
        <GalerryImage img="/gods/74XoBuTheTrickster.png" name="Xobu" />
      </div>
    </>
  );
}
