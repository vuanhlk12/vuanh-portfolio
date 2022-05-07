/* eslint-disable @next/next/no-img-element */
import styles from "./home.module.scss";
import Buttons from "../button/button";
import { BsMouse } from "react-icons/bs";
import clsx from "clsx";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    const toggle = document.querySelector(`.${styles["hover-show"]}`);
    console.log("toggle", toggle);
    toggle?.addEventListener("click", () => {
      toggle.classList.toggle(styles["active"]);
    });
  }, []);
  return (
    <div id="home" className={clsx("container", styles["home-container"])}>
      <div className={styles["logo"]}>
        <div className={styles["hover-show"]}>
          <span className={styles["circle"]}></span>
          <span className={styles["circle"]}></span>
          <span className={styles["circle"]}></span>
          <span className={styles["circle"]}></span>
          <span className={styles["circle"]}></span>
          <span className={styles["circle"]}></span>
          <span className={styles["circle"]}></span>
          <span className={styles["circle"]}></span>
        </div>

        <img src="/props/img2.jpg" alt="me" />
      </div>

      <a href="#footer" className={styles["scroll-down"]}>
        <hr />
        <h5>scroll down</h5>
        <BsMouse className={styles["scroll"]} />
        <hr />
      </a>

      <h2>
        <span>About Me</span> <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis id
          quos deserunt, maxime sint sunt tempore quidem ad praesentium itaque,
          aspernatur, magnam culpa iste adipisci?
        </p>
      </h2>

      <Buttons />
    </div>
  );
}

export default Home;
