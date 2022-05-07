import styles from "./members.module.scss";
import clsx from "clsx";

const Members = () => {
  return (
    <div
      id="members"
      className={clsx("container", styles["members-container"])}
    >
      <h1 className={styles["member-txt"]}>Members</h1>
      <div className={clsx(styles["member"], styles["member-1"])}>
        <div className={styles["member-img"]}></div>
        <div className={styles["member-info"]}>
          <h1 className={styles["name"]}>Chrys</h1>
          <h3 className={styles["position"]}>Leader</h3>
          <h4 className={styles["about"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className={styles["contact-member"]}>
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className={clsx(styles["member"], styles["member-2"])}>
        <div className={styles["member-img"]}></div>
        <div className={styles["member-info"]}>
          <h1 className={styles["name"]}>CChrys</h1>
          <h3 className={styles["position"]}>Another Leader</h3>
          <h4 className={styles["about"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className={styles["contact-member"]}>
            <span>contact</span>
          </a>
        </div>
      </div>

      <div className={clsx(styles["member"], styles["member-3"])}>
        <div className={styles["member-img"]}></div>
        <div className={styles["member-info"]}>
          <h1 className={styles["name"]}>CCChrys</h1>
          <h3 className={styles["position"]}>Another Leader Again</h3>
          <h4 className={styles["about"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            maiores harum laborum vero recusandae? Cumque nam facere aspernatur
            autem eius!
          </h4>
          <a href="#contact" className={styles["contact-member"]}>
            <span>contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Members;
