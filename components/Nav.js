import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav>
      <ul className={styles.nav}>
        <li>
          <Link href="/">
            <a
              className={
                router.pathname == "/" ? styles.active : styles.navlink
              }
            >
              Home
            </a>
          </Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/gallery">
            <a
              className={
                router.pathname == "/gallery" ? styles.active : styles.navlink
              }
            >
              Gallery
            </a>
          </Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/info">
            <a
              className={
                router.pathname == "/info" ? styles.active : styles.navlink
              }
            >
              Info
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
