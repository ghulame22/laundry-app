import Image from "next/image";
import Tick from "@/app/assets/Tick.svg";
import styles from "./WhyUs.module.css";

const WhyUs = () => {
  const data = [
    { id: 1, title: "100% Satisfaction Guarantee" },
    { id: 2, title: "Fast & High Quality" },
    { id: 3, title: "100% Cashback Guaranteed" },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.firstContent}>
        <p>The Best Guarantee In The Business.</p>
        <p>
          Will be the leading provider Cleaning service by creating positrve
          impact on all the quality
        </p>
      </div>
      <div className={styles.secondContent}>
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <Image src={Tick} width={50} height={50} alt="Laundry Image" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default WhyUs;
