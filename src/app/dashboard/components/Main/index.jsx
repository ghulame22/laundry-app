import Image from "next/image";
import Banner from "@/app/assets/Banner.jpg";

import styles from "./Main.module.css";
import RecomendedServices from "./components/RecomendedServices";
import RecentOrders from "./components/RecentOrders";

export default async function Main() {
  return (
    <div className={styles.main}>
      <Image
        src={Banner}
        alt="Banner"
        sizes="100vw"
        style={{ minWidth: "100%", height: "10rem" }}
      />
      <RecomendedServices />
      <RecentOrders />
    </div>
  );
}
