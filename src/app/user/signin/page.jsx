import Image from "next/image";
import Facebook from "@/app/assets/Facebook.svg";
import Google from "@/app/assets/Google.svg";
import styles from "@/app/user/SignInUp.module.css";
import Link from "next/link";

function page() {
  return (
    <div className={styles.main}>
      <div>
        <Link legacyBehavior href="/user/signup" passHref>
          <div>
            <span>New user?</span>&nbsp;
            <span>Create an acount </span>
          </div>
        </Link>
      </div>
      <div>
        <span className={styles.firstText}>Sign in to Gloria Laundry</span>
        <div className={styles.btnHolder}>
          <button className={styles.gogBtn}>
            <Image src={Google} alt="Google" />
            <span>Sign in with Google</span>
          </button>
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
          <Link legacyBehavior href="/user/forgot-password" passHref>
            <span className={styles.thirdText}>Forgot password?</span>
          </Link>
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
