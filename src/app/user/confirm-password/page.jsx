import Image from "next/image";
import Facebook from "@/app/assets/Facebook.svg";
import styles from "@/app/user/SignInUp.module.css";
import Link from "next/link";

function page() {
  return (
    <div className={styles.main}>
      <div></div>
      <div style={{ maxWidth: "20rem" }}>
        <span className={styles.firstText}>Create new password</span>
        <span className={styles.secondText}>
          Please create a new password that you don’t use on any other site.
        </span>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Create new password"
          />
        </div>
        <div>
          <input
            className={styles.input}
            type="text"
            placeholder="Confirm new password"
          />
        </div>
        <div>
          <button className={styles.btn} style={{ width: "100%" }}>
            Change Password
          </button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default page;
