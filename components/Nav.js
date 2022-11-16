import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className={styles.navDiv}>
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
          <Link href="/gallery/goddesses">
            <a
              className={
                router.pathname == "/gallery/goddesses" ||
                router.pathname == "/gallery/gods" ||
                router.pathname == "/gallery/immutables"
                  ? styles.active
                  : styles.navlink
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
      <div className={styles.mintButton}>
        <div
          id="rampp-minting-container-d8565b49-ea64-4ecf-8302-2450416a99bb"
          class="rampp-minting-container"
        >
          <button
            id="rampp-minting-button-d8565b49-ea64-4ecf-8302-2450416a99bb"
            class="rampp-minting-button"
            data-merkle-proof-uri="https://us-central1-nft-rampp.cloudfunctions.net/allowlist/qPevHlG2uF21bsPCQpfB/merkle/verify"
            data-styles="eyJvcGVuIjp7InRleHQiOiJNSU5UIiwic3R5bGVzIjoiYm9yZGVyOm5vbmU7d2lkdGg6IDE1cmVtO3BhZGRpbmc6MC41cmVtO2ZvbnQtc2l6ZTogMS4xMjVyZW07bGluZS1oZWlnaHQ6IDEuNzVyZW07dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtib3JkZXItcmFkaXVzOjAuNXJlbTtjb2xvcjojMTkxYTFhO2JhY2tncm91bmQtY29sb3I6I2UxZTUwNjsifSwicGF1c2VkIjp7InRleHQiOiJNaW50JTIwQ2xvc2VkIiwic3R5bGVzIjoiYm9yZGVyOm5vbmU7d2lkdGg6IDE1cmVtO3BhZGRpbmc6MC41cmVtO2ZvbnQtc2l6ZTogMS4xMjVyZW07bGluZS1oZWlnaHQ6IDEuNzVyZW07dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtib3JkZXItcmFkaXVzOjAuNXJlbTtjb2xvcjojNjc2NTY1O2JhY2tncm91bmQtY29sb3I6I0NDREJEQztjdXJzb3I6bm90LWFsbG93ZWQ7In0sInN1cHBseVJlYWNoZWQiOnsidGV4dCI6IkFsbCUyMFRva2VucyUyME1pbnRlZCEiLCJzdHlsZXMiOiJib3JkZXI6bm9uZTt3aWR0aDogMTVyZW07cGFkZGluZzowLjVyZW07Zm9udC1zaXplOiAxLjEyNXJlbTtsaW5lLWhlaWdodDogMS43NXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7Y3Vyc29yOiBwb2ludGVyO2JvcmRlci1yYWRpdXM6MC41cmVtO2NvbG9yOiNmZjAwMDA7YmFja2dyb3VuZC1jb2xvcjojZmZiOGI4O2N1cnNvcjpub3QtYWxsb3dlZDsifSwiZXJyb3IiOnsidGV4dCI6Ik1pbnRpbmcgVW5hdmFpbGFibGUiLCJzdHlsZXMiOiJib3JkZXI6bm9uZTt3aWR0aDogMTVyZW07cGFkZGluZzowLjVyZW07Zm9udC1zaXplOiAxLjEyNXJlbTtsaW5lLWhlaWdodDogMS43NXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7Y3Vyc29yOiBwb2ludGVyO2JvcmRlci1yYWRpdXM6MC41cmVtO2NvbG9yOiNmZjAwMDA7YmFja2dyb3VuZC1jb2xvcjojZmZiOGI4O2N1cnNvcjpub3QtYWxsb3dlZDsifSwiY2xhaW1UZXh0Ijp7InRleHQiOm51bGwsInN0eWxlcyI6ImNvbG9yOiByZ2JhKDE1NiwgMTYzLCAxNzUpO2ZvbnQtc2l6ZTogMC43NXJlbTtsaW5lLWhlaWdodDogMXJlbTt0ZXh0LWFsaWduOiBjZW50ZXI7cGFkZGluZy10b3A6IDAuMjVyZW07cGFkZGluZy1ib3R0b206IDAuMjVyZW07bWFyZ2luOjA7Zm9udC1mYW1pbHk6c2Fucy1zZXJpZjsifSwicXVhbnRpdHkiOnsidGV4dCI6bnVsbCwic3R5bGVzIjoid2lkdGg6NDBweDtjb2xvcjojZTFlNTA2O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1jb2xvcjojZTFlNTA2O2JvcmRlci1yYWRpdXM6MC41cmVtO2ZvbnQtc2l6ZToxLjNyZW07dGV4dC1hbGlnbjpjZW50ZXI7In0sIm1pbnRNZXNzYWdlIjoiV2VsY29tZSB0byB0aGUgcmVhbG0gb2YgRXRoZXJpYSEifQ=="
            data-abi-link="https://firebasestorage.googleapis.com/v0/b/nft-rampp.appspot.com/o/solidity_outputs%2FqPevHlG2uF21bsPCQpfB%2FOlympusEtheriaContract_data-c9f61197-90b3-4bcb-b5d8-3919ab599c1e.json?alt=media"
            data-redirect="null"
            data-contract-address="0xA27dD4D203761604A252757483412B3ac1e5fe22"
            data-show-claim-count="true"
            data-network="mainnet"
            data-format="single"
            data-erc20-payments=""
            data-redemption-contracts=""
            data-use-winter="false"
            data-winter-project-id="null"
          ></button>
        </div>
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.0-rc.0/web3.min.js"
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        ></script>
        <script
          type="text/javascript"
          src="https://unpkg.com/web3modal@1.9.8/dist/index.js"
        ></script>
        <script
          type="text/javascript"
          src="https://unpkg.com/evm-chains@0.2.0/dist/umd/index.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://unpkg.com/@walletconnect/web3-provider@1.7.8/dist/umd/index.min.js"
        ></script>

        <script
          type="text/javascript"
          src="https://mintplex.xyz/embeds/v2.1/embed.js"
          data-uuid="d8565b49-ea64-4ecf-8302-2450416a99bb"
        ></script>
      </div>

      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.0-rc.0/web3.min.js"
        crossorigin="anonymous"
        referrerpolicy="no-referrer"
      ></script>
      <script
        type="text/javascript"
        src="https://unpkg.com/web3modal@1.9.8/dist/index.js"
      ></script>
      <script
        type="text/javascript"
        src="https://unpkg.com/evm-chains@0.2.0/dist/umd/index.min.js"
      ></script>
      <script
        type="text/javascript"
        src="https://unpkg.com/@walletconnect/web3-provider@1.7.8/dist/umd/index.min.js"
      ></script>

      <script
        type="text/javascript"
        src="https://mintplex.xyz/embeds/v2.1/embed.js"
        data-uuid="b76d562d-5058-416f-9d76-eec94bd5d523"
      ></script>
    </nav>
  );
};

export default Nav;
