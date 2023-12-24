import call from "@/app/assets/call.jpg";
import checkout from "@/app/assets/checkout.jpg";
import tshirt from "@/app/assets/tshirt.jpg";
import map from "@/app/assets/map.jpg";
import Image from "next/image";
import styles from "./HowItWorks.module.css";

const HowItWorks = () => {
  const data = [
    {
      id: 1,
      count: "01",
      title: "Call us and book order",
      imgSrc: call,
    },
    {
      id: 2,
      count: "02",
      title: "We collect your clothes",
      imgSrc: checkout,
    },
    {
      id: 3,
      count: "03",
      title: "We clean your clothes",
      imgSrc: tshirt,
    },
    {
      id: 4,
      count: "04",
      title: "We deliver to your home",
      imgSrc: map,
    },
  ];

  return (
    <div className={styles.content}>
      <div>
        <p>How it works</p>
        <p>Simple step to make online booking</p>
        <p>
          Will be the leading provider cleaning service by creating positive
          impact on all the quality
        </p>
        <div>
          <button className={styles.btn}>Get it now</button>
        </div>
      </div>
      <div>
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <p>{item.count}</p>
            <div>
              <Image
                src={item.imgSrc}
                width={50}
                height={50}
                alt="Laundry Image"
              />
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default HowItWorks;
