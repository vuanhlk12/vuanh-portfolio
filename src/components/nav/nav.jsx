import styles from "./nav.module.scss";
import clsx from "clsx";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { TiGroupOutline } from "react-icons/ti";
import { BiMessageRoundedDots } from "react-icons/bi";
import { BsArrowDownCircle } from "react-icons/bs";

function Navbar() {
  return (
    <div className={styles["navigation"]}>
      <a href="#home">
        <AiOutlineHome className={clsx(styles["icon"], styles["active-nav"])} />
      </a>
      <a href="#about">
        <AiOutlineUser className={styles["icon"]} />
      </a>
      <a href="#members">
        <TiGroupOutline className={styles["icon"]} />
      </a>
      <a href="#contact">
        <BiMessageRoundedDots className={styles["icon"]} />
      </a>
      <a href="#footer">
        <BsArrowDownCircle className={styles["icon"]} />
      </a>
    </div>
  );
}

export default Navbar;
