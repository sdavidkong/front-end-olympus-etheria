import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.nav}>
        <li className={styles.navlink}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className={styles.navlink}>
          <Link href="/info">Info</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
