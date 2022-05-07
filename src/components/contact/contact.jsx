import styles from "./contact.module.scss";
import { AiOutlineYoutube } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import clsx from "clsx";

function Contact() {
  return (
    <div
      id="contact"
      className={clsx("container", styles["contact-container"])}
    >
      <h1>Contact Me</h1>
      <div className={styles["contact-links"]}>
        <a href="#" className={clsx(styles["contact"], styles["instagram"])}>
          <AiOutlineInstagram className="icon" />
          <h2>
            instagram <span>_Creative_Ambition_</span>
          </h2>
        </a>
      </div>
    </div>
  );
}

export default Contact;
