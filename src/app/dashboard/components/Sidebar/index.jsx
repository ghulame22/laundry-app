"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Sidebar.module.css";
import Image from "next/image";
import home from "@/app/assets/home.svg";
import message from "@/app/assets/message.svg";
import orders from "@/app/assets/orders.svg";
import wallet from "@/app/assets/wallet.svg";
import profile from "@/app/assets/profile.svg";
import question from "@/app/assets/question.svg";
import setting from "@/app/assets/setting.svg";


const iconMap = {
  Dashboard: home,
  Orders: orders,
  Messages: message,
  "My Wallets": wallet,
  Profile: profile,
  "Get Help": question,
  Settings: setting,
};

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("activeItem") || "Dashboard"
  );

  useEffect(() => {
    localStorage.setItem("activeItem", activeItem);
  }, [activeItem]);

  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const generateLink = (itemName) => {
    if (itemName === "Dashboard") {
      return "/dashboard";
    }
    return `/dashboard/${itemName.toLowerCase().replace(" ", "-")}`;
  };

  return (
    <div className={styles.main}>
      <div className={styles.boardList}>
        {["Dashboard", "Orders", "Messages", "My Wallets", "Profile"].map(
          (item) => (
            <Link legacyBehavior href={generateLink(item)} key={item}>
              <a
                className={`${styles.boardItems} ${
                  activeItem === item ? styles.active : ""
                }`}
                onClick={() => handleItemClick(item)}
              >
                <Image src={iconMap[item]} alt="svg" />
                {item}
              </a>
            </Link>
          )
        )}
      </div>
      <div className={styles.boardList}>
        {["Get Help", "Settings"].map((item) => (
          <Link legacyBehavior href={generateLink(item)} key={item}>
            <a
              className={`${styles.boardItems} ${
                activeItem === item ? styles.active : ""
              }`}
              onClick={() => handleItemClick(item)}
            >
              <Image src={iconMap[item]} alt="svg" />
              {item}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
