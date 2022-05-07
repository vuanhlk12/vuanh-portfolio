import styles from "./qualifications.module.scss";
import clsx from "clsx";

const Qualifications = () => {
  return (
    <div>
      <span className={styles["quali-text"]}>My Qualifications</span>
      <div className={styles["qualifications-container"]}>
        <div className={styles["qualification"]}>
          <div className={clsx(styles["content"], styles["html"])}></div>
          <h1>html</h1>
        </div>
        <div className={styles["qualification"]}>
          <div className={clsx(styles["content"], styles["css"])}></div>
          <h1>css</h1>
        </div>
        <div className={styles["qualification"]}>
          <div className={clsx(styles["content"], styles["javascript"])}></div>
          <h1>javascript</h1>
        </div>
        <div className={styles["qualification"]}>
          <div className={clsx(styles["content"], styles["react"])}></div>
          <h1>react</h1>
        </div>
        <div className={styles["qualification"]}>
          <div className={clsx(styles["content"], styles["c-sharp"])}></div>
          <h1>c#</h1>
        </div>
      </div>
    </div>
  );
};

export default Qualifications;
