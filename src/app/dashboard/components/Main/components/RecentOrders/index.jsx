// import Image from "next/image";
// import Iron from "@/app/assets/Iron.jpg";
import styles from "../../Main.module.css";

export default async function RecentOrders() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Recent Order</span>
        <span>View All</span>
      </div>
      <div className={styles.orderHolder}>
        <div>Name/Business</div>
        <div>Date</div>
        <div>Invoice</div>
        <div>Status</div>
        <div>Action</div>
      </div>
    </div>
  );
}
