import Image from "next/image";
import gloriablue from "@/app/assets/gloriablue.svg";
import notifications from "@/app/assets/notifications.svg";
import dropdown from "@/app/assets/dropdown.svg";
import Avatar from "@/app/assets/Avatar.jpg";
import styles from "./Navbar.module.css";

export default async function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.logoHolder}>
        <Image src={gloriablue} alt="Gloria Logo" />
        <div>Gloria Laundry</div>
      </div>
      <div className={styles.menuHolder}>
        <input type="text" placeholder="Search here" />
        <Image src={notifications} alt="Notifcations" />
        <div>
          <div>
            <span>User</span>
            <Image src={Avatar} alt="Profile" />
          </div>
          <Image src={dropdown} alt="dropdown" />
        </div>
      </div>
    </div>
  );
}
