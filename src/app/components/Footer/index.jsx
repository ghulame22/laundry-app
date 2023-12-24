import Image from "next/image";
import Rewash from "@/app/assets/Rewash.svg";
import Link from "next/link";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.content}>
      <div>
        <div className={styles.menuHolder}>
          <ul>
            <li>
              <Link legacyBehavior href="/" passHref>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/services" passHref>
                <a>Services</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about" passHref>
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link legacyBehavior href="/about" passHref>
                <a>Faq</a>
              </Link>
            </li>
          </ul>
          <h2>Provides High Quality Laundry Services</h2>
        </div>
        <div>
          <div className={styles.logoHolder}>
            <div className={styles.logo}>
              <p>R</p>
            </div>
            <Link legacyBehavior href="/" passHref>
              <a>
                <Image
                  src={Rewash}
                  width={205}
                  height={38}
                  alt="Laundry Image"
                />
              </a>
            </Link>
          </div>
          <div className={styles.subMenuHolder}>
            <ul>
              <li>Services</li>
              <li>Dry cleaning</li>
              <li>Laundry services</li>
              <li>Leather and suade</li>
            </ul>
            <ul>
              <li>Support</li>
              <li>Customer services</li>
              <li>Email us</li>
              <li>Privacy policy</li>
              <li>Terms and conditions</li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <div>2021 Ibey Design.</div>
        <div>Allright reserved</div>
      </div>
    </div>
  );
};
export default Footer;
