import Link from "next/link";
import styles from "./Navbar.module.css";
import Image from "next/image";
import Rewash from "@/app/assets/Rewash.svg";
import Menu from "@/app/assets/Menu.svg";

const Navbar = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.logoHolder}>
        <div className={styles.logo}>
          <p>R</p>
        </div>
        <Image src={Rewash} width={93} height={18} alt="Laundry logo" />
      </div>
      <div className={styles.miniMenuHolder}>
        <Image src={Menu} alt="Laundry logo" />
      </div>
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
              <a>FaQ</a>
            </Link>
          </li>
          <li>
            <button className={styles.btn}>Contact Us</button>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
