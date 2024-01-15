import Image from "next/image";
import Facebook from "@/app/assets/Facebook.svg";
import styles from "./SignIn.module.css";
import Link from "next/link";

function page() {
  return (
    <div className={styles.main}>
      <div>
        <Link legacyBehavior href="/user/signup" passHref>
          <a>
            <span>New user?</span>&nbsp;
            <span>Create an acount </span>
          </a>
        </Link>
      </div>
      <div>
        <span className={styles.firstText}>Sign in to Gloria Laundry</span>
        <div className={styles.btnHolder}>
          <button className={styles.gogBtn}>Sign in with Google</button>
          <button className={styles.fbBtn}>
            <Image src={Facebook} alt="Facebook" />
          </button>
        </div>
        <div className={styles.orText}>
          <span>or</span>
        </div>
        <div>
          <input className={styles.input} type="text" placeholder="Email" />
        </div>
        <div>
          <input className={styles.input} type="text" placeholder="Password" />
        </div>
        <div>
          <span className={styles.thirdText}>Forgot password?</span>
          <button className={styles.btn}>Sign In</button>
        </div>
      </div>
      <div>
        <span className={styles.secondText}>
          Protected by reCAPTCHA and subject to the
          <span className={styles.highlight}>Gloria Privacy Policy</span> and
          <span className={styles.highlight}>Terms of Service.</span>
        </span>
      </div>
    </div>
  );
}

export default page;
