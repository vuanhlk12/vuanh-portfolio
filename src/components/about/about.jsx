import styles from "./about.module.scss";
import Qualifications from "../qualifications/qualifications";
import clsx from "clsx";

function About() {
  return (
    <div id="about" className={clsx("container", styles["about-container"])}>
      <Qualifications />
    </div>
  );
}
export default About;
