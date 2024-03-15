"use client";
import MenuLink from "./menuLink/menuLink";
import styles from "./sidebar.module.css";
import * as MdIcons from "react-icons/md";

import Image from "next/image";

const menuItems = [
  {
    title: "",
    list: [
      {
        title: "Ana Sayfa",
        path: "/dashboard",
        icon: <MdIcons.MdDashboard />,
      },
    ],
  },
  {
    title: "Araştırmalar",
    list: [
      {
        title: "Katıldığım Araştırmalar",
        path: "/dashboard/surveys",
        icon: <MdIcons.MdShoppingBag />,
      },
      {
        title: "Katılabileceğim Araştırmalar",
        path: "/dashboard/surveysplus",
        icon: <MdIcons.MdNote />,
      },
    ],
  },
  {
    title: "Finans",
    list: [
      {
        title: "Ödemeler",
        path: "/dashboard/transactions",
        icon: <MdIcons.MdMonetizationOn />,
      },
    ],
  },
  {
    title: "User",
    list: [
      {
        title: "Profile",
        path: "/dashboard/users",
        icon: <MdIcons.MdSupervisedUserCircle />,
      },
      {
        title: "Settings",
        path: "/dashboard/settings",
        icon: <MdIcons.MdOutlineSettings />,
      },
      {
        title: "Help",
        path: "/dashboard/help",
        icon: <MdIcons.MdHelpCenter />,
      },
    ],
  },
];

const Sidebar = () => {
  const copyUserId = () => {
    const userIdElement = document.getElementById("userId"); // Get the element containing the user ID
    const userId = userIdElement.innerText; // Get the text content of the element
    navigator.clipboard.writeText(userId); // Copy the text to the clipboard
    alert("ID copied to clipboard: " + userId);
  };

  const userId = 123456789

  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <Image
          className={styles.logoImage}
          src="/planet.jpeg"
          alt="logo"
          width="50"
          height="50"
        />
        <div className={styles.logoDetail}>
          <span className={styles.logoName}>[Planet]</span>
        </div>
      </div>
      <ul className={styles.list}>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.cat}>{cat.title}</span>
            {cat.list.map((item) => (
              <MenuLink item={item} key={item.title} />
            ))}
          </li>
        ))}
      </ul>
      <button className={styles.logout}>
        <MdIcons.MdLogout />
        Logout
      </button>
      <div className={styles.user}>
        <Image
          className={styles.userImage}
          src="/noavatar.png"
          alt=""
          width="50"
          height="50"
        />
        <div className={styles.userInfo}>
          <div className={styles.userDetail}>
            <span className={styles.username}>Kaan Cakir</span>
          </div>
          <div className={styles.icons}>
            <MdIcons.MdInfo size={20} />
            <MdIcons.MdInbox size={20} />
          </div>
        </div>
      </div>
      <div className={styles.idSection}>
        <div className={styles.userId}>
          <span>ID: </span>
          <span id="userId">{userId}</span>
        </div>
        <button onClick={copyUserId} className={styles.copyIdButton}><MdIcons.MdContentCopy size={20}/></button>
      </div>
    </div>
  );
};

export default Sidebar;
