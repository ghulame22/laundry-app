import Image from "next/image";
import Facebook from "@/app/assets/Facebook.svg";
import styles from "@/app/user/signin/SignIn.module.css";
import Link from "next/link";

function page() {
  return (
    <div className={styles.main}>
      <div>
        <Link legacyBehavior href="/user/signin" passHref>
          <a>
            <span>Already have an account?</span>&nbsp;
            <span>Sign in</span>
          </a>
        </Link>
      </div>

      <div>
        <span className={styles.firstText}>Sign Up to Gloria Laundry</span>
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
        <div className={styles.inputHolder}>
          <input
            className={styles.input}
            type="text"
            placeholder="First Name"
          />
          <input className={styles.input} type="text" placeholder="Last Name" />
        </div>
        <div>
          <input className={styles.input} type="text" placeholder="Password" />
        </div>
        <div>
          <button className={styles.btn} style={{ width: "100%" }}>
            Sign Up
          </button>
        </div>
        <div className={styles.inputHolder}>
          <label className={styles.container}>
            <input type="checkbox" />
            <span className={styles.checkmark}></span>
          </label>
          <span className={styles.secondText}>
            By clicking Create account, I agree that I have read and accepted
            the Terms of Use and Privacy Policy.
          </span>
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
