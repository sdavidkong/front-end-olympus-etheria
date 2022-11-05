import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

export default function GalerryImage(props) {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.heroBorder}>
        <Link href={props.img}>
          <Image
            className={styles.galleryImg}
            src={props.img}
            alt="An image of a divine being"
            height={144}
            width={144}
          />
        </Link>
      </div>
      <p className={styles.imgName}>{props.name}</p>
    </div>
  );
}
