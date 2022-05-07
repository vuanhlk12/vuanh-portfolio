import styles from "./header.module.scss";
import clsx from "clsx";

function Header() {
  return (
    <div id="home" className={clsx("container", styles["header-container"])}>
      <h3>
        <p>I am</p>
        Chrys
      </h3>
      <h2>Front-End Web Developer</h2>
    </div>
  );
}
export default Header;
