import Image from "next/image";
import gloria from "@/app/assets/gloria.svg";
import styles from "./user.module.css";

export default async function UserLayout({ children }) {
  return (
    <div className={styles.main}>
      <div className={styles.description}>
        <div>
          <div className={styles.logoHolder}>
            <Image src={gloria} alt="Gloria Logo" />
            <div>Gloria Laundry</div>
          </div>
          <div>Gloria Laundry: Where Clean Meets Convenience</div>
        </div>
        <div>Having troubles? Get Help</div>
      </div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}
