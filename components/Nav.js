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
          id="rampp-minting-container-b76d562d-5058-416f-9d76-eec94bd5d523"
          class="rampp-minting-container"
        >
          <button
            id="rampp-minting-button-b76d562d-5058-416f-9d76-eec94bd5d523"
            class="rampp-minting-button"
            //style='display:none'
            data-merkle-proof-uri="https://us-central1-nft-rampp.cloudfunctions.net/allowlist/qPevHlG2uF21bsPCQpfB/merkle/verify"
            data-styles="eyJvcGVuIjp7InRleHQiOiJDb25uZWN0JTIwV2FsbGV0JTIwJTI2JTIwTWludCIsInN0eWxlcyI6ImJvcmRlcjpub25lO3dpZHRoOiAxNXJlbTtwYWRkaW5nOjAuNXJlbTtmb250LXNpemU6IDEuMTI1cmVtO2xpbmUtaGVpZ2h0OiAxLjc1cmVtO3RleHQtYWxpZ246IGNlbnRlcjtjdXJzb3I6IHBvaW50ZXI7Ym9yZGVyLXJhZGl1czowLjVyZW07Y29sb3I6IzE5MWExYTtiYWNrZ3JvdW5kLWNvbG9yOiNlMWU1MDY7In0sInBhdXNlZCI6eyJ0ZXh0IjoiTWludCUyMENsb3NlZCIsInN0eWxlcyI6ImJvcmRlcjpub25lO3dpZHRoOiAxNXJlbTtwYWRkaW5nOjAuNXJlbTtmb250LXNpemU6IDEuMTI1cmVtO2xpbmUtaGVpZ2h0OiAxLjc1cmVtO3RleHQtYWxpZ246IGNlbnRlcjtjdXJzb3I6IHBvaW50ZXI7Ym9yZGVyLXJhZGl1czowLjVyZW07Y29sb3I6IzY3NjU2NTtiYWNrZ3JvdW5kLWNvbG9yOiNDQ0RCREM7Y3Vyc29yOm5vdC1hbGxvd2VkOyJ9LCJzdXBwbHlSZWFjaGVkIjp7InRleHQiOiJBbGwlMjBUb2tlbnMlMjBNaW50ZWQhIiwic3R5bGVzIjoiYm9yZGVyOm5vbmU7d2lkdGg6IDE1cmVtO3BhZGRpbmc6MC41cmVtO2ZvbnQtc2l6ZTogMS4xMjVyZW07bGluZS1oZWlnaHQ6IDEuNzVyZW07dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtib3JkZXItcmFkaXVzOjAuNXJlbTtjb2xvcjojZmYwMDAwO2JhY2tncm91bmQtY29sb3I6I2ZmYjhiODtjdXJzb3I6bm90LWFsbG93ZWQ7In0sImVycm9yIjp7InRleHQiOiJNaW50aW5nIFVuYXZhaWxhYmxlIiwic3R5bGVzIjoiYm9yZGVyOm5vbmU7d2lkdGg6IDE1cmVtO3BhZGRpbmc6MC41cmVtO2ZvbnQtc2l6ZTogMS4xMjVyZW07bGluZS1oZWlnaHQ6IDEuNzVyZW07dGV4dC1hbGlnbjogY2VudGVyO2N1cnNvcjogcG9pbnRlcjtib3JkZXItcmFkaXVzOjAuNXJlbTtjb2xvcjojZmYwMDAwO2JhY2tncm91bmQtY29sb3I6I2ZmYjhiODtjdXJzb3I6bm90LWFsbG93ZWQ7In0sImNsYWltVGV4dCI6eyJ0ZXh0IjpudWxsLCJzdHlsZXMiOiJjb2xvcjogcmdiYSgxNTYsIDE2MywgMTc1KTtmb250LXNpemU6IDAuNzVyZW07bGluZS1oZWlnaHQ6IDFyZW07dGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmctdG9wOiAwLjI1cmVtO3BhZGRpbmctYm90dG9tOiAwLjI1cmVtO21hcmdpbjowO2ZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7In0sInF1YW50aXR5Ijp7InRleHQiOm51bGwsInN0eWxlcyI6IndpZHRoOjQwcHg7Y29sb3I6I2UxZTUwNjtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjFweDtib3JkZXItY29sb3I6I2UxZTUwNjtib3JkZXItcmFkaXVzOjAuNXJlbTtmb250LXNpemU6MS4zcmVtO3RleHQtYWxpZ246Y2VudGVyOyJ9LCJtaW50TWVzc2FnZSI6IldlbGNvbWUgdG8gdGhlIHJlYWxtIG9mIEV0aGVyaWEhIn0="
            data-abi-link="https://firebasestorage.googleapis.com/v0/b/nft-rampp.appspot.com/o/solidity_outputs%2FqPevHlG2uF21bsPCQpfB%2FOlympusEtheriaContract_data-4591fc60-ee87-45bd-b457-4ff8ecef94be.json?alt=media"
            data-redirect="null"
            data-contract-address="0x44ECE243176FEf679c4C3D63Fb59BCbBA6780A2A"
            data-show-claim-count="false"
            data-network="testnet"
            data-format="single"
            data-erc20-payments=""
            data-redemption-contracts=""
            data-use-winter="false"
            data-winter-project-id="null"
          ></button>
        </div>
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
