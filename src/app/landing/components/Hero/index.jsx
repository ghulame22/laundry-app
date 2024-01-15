import Image from "next/image";
import one from "@/app/assets/one.png";
import Tick from "@/app/assets/Tick.svg";
import styles from "./Hero.module.css";
import Link from "next/link";

const Hero = () => {
  return (
    <div className={styles.content}>
      <div>
        <h2 className={styles.title}>
          Provides
          <br />
          High Quality
          <br />
          Laundry Services
        </h2>
        <p className={styles.para}>
          Will be the leading provider cleaning service by creating impact on
          all the quality
        </p>
        <div>
          <Link legacyBehavior href="/user/signin">
            <button className={styles.btn}>Get started</button>
          </Link>
        </div>
      </div>
      <div>
        <div className={styles.heroImg}>
          <Image
            src={one}
            sizes="100vw"
            style={{ minWidth: "100%", height: "auto" }}
            alt="Hero Image"
          />
          <div className={styles.card}>
            <Image src={Tick} width={50} height={50} alt="Laundry Image" />
            <p>100% satisfaction guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
