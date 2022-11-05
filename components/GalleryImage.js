import styles from "../styles/Home.module.css";

export default function GalerryImage(props) {
  return (
    <div className={styles.galleryContainer}>
      <div className={styles.heroBorder}>
        <img
          className={styles.galleryImg}
          src={props.img}
          alt="An image of a divine being"
        />
      </div>
      <p className={styles.imgName}>{props.name}</p>
    </div>
  );
}
