import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const GalleryNav = () => {
  const router = useRouter();
  return (
    <div className={styles.galleryNavContainer}>
      <ul className={styles.galleryNav}>
        <li>
          <Link href="/gallery/goddesses">
            <a
              className={
                router.pathname == "/gallery/goddesses"
                  ? styles.active
                  : styles.navlink
              }
            >
              Goddesses
            </a>
          </Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/gallery/gods">
            <a
              className={
                router.pathname == "/gallery/gods"
                  ? styles.active
                  : styles.navlink
              }
            >
              Gods
            </a>
          </Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/gallery/immutables">
            <a
              className={
                router.pathname == "/gallery/immutables"
                  ? styles.active
                  : styles.navlink
              }
            >
              Immutables
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default GalleryNav;
