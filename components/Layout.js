import React from "react";
import Head from "next/head";
import Footer from "./Footer";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>~Olympus Etheria~</title>
        <meta name="description" content="Official site for Olympus Etheria" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
