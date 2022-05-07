import styles from "./footer.module.scss";
import clsx from "clsx";
import { BsMouse } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { TiSocialDribbble } from "react-icons/ti";
import { TiSocialYoutube } from "react-icons/ti";
import { TiSocialGithub } from "react-icons/ti";

function Footer() {
  return (
    <div id="footer" className={clsx("container", styles["footer-container"])}>
      <h1>
        That's all{" "}
        <a href="#home">
          <h2>
            <BsMouse /> - scroll up -
          </h2>
        </a>
      </h1>
      <div className={styles["social-links"]}>
        <a href="#">
          <BsInstagram className={styles["social"]} />
        </a>
        <a href="#">
          {" "}
          <FaFacebookF className={styles["social"]} />
        </a>
        <a href="#">
          {" "}
          <TiSocialDribbble className={styles["social"]} />
        </a>

        <a href="#">
          <TiSocialYoutube className={styles["social"]} />
        </a>

        <a href="#">
          <TiSocialGithub className={styles["social"]} />
        </a>
      </div>
    </div>
  );
}
export default Footer;
