"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import * as MdIcons from "react-icons/md";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className={styles.container}>
      <div className={styles.title}>{pathname.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.icons}>
          <button className={styles.darkModeButton}>
            <MdIcons.MdDarkMode size={25} />
          </button>
          <button className={styles.lightModeButton}>
            <MdIcons.MdSunny size={25}/>
          </button>
        </div>
        <div className={styles.search}>
          <MdIcons.MdSearch />
          <input type="text" placeholder="Search..." className={styles.input} />
        </div>
        <div className={styles.icons}>
          <MdIcons.MdOutlineChat size={20} />
          <MdIcons.MdNotifications size={20} />
          <MdIcons.MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
