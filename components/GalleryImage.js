import styles from "../styles/Home.module.css";
import Image from "next/image";

export default function GalerryImage(props) {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.heroBorder}>
        <Image
          className={styles.galleryImg}
          src={props.img}
          alt="An image of a divine being"
          height={144}
          width={144}
        />
      </div>
      <p className={styles.imgName}>{props.name}</p>
    </div>
  );
}
