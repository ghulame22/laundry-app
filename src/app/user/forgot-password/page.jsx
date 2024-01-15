import Image from "next/image";
import Facebook from "@/app/assets/Facebook.svg";
import styles from "@/app/user/SignInUp.module.css";
import Link from "next/link";

function page() {
  return (
    <div className={styles.main}>
      <div></div>
      <div style={{ maxWidth: "20rem" }}>
        <span className={styles.firstText}>Forgot password?</span>
        <span className={styles.secondText}>
          No worriest! Just enter your email and we’ll send you a reset password
          link.
        </span>
        <div>
          <input className={styles.input} type="text" placeholder="Email" />
        </div>
        <div>
          <button className={styles.btn} style={{ width: "100%" }}>
            Send Recovery Email
          </button>
        </div>
        <div style={{ justifyContent: "center" }}>
          <span>Just remember?</span>
          <Link legacyBehavior href="/user/signin" passHref>
            <span style={{ cursor: "pointer" }}>Sign in</span>
          </Link>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default page;
