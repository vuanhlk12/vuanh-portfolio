import styles from "./button.module.scss";
import clsx from "clsx";

function Buttons() {
  return (
    <div className={clsx("container", styles["button-container"])}>
      <a href="#about" className={clsx(styles["btn"], styles["pri"])}>
        Learn more
      </a>
      <a href="#contact" className={clsx(styles["btn"], styles["sec"])}>
        Get in Touch
      </a>
    </div>
  );
}

export default Buttons;
