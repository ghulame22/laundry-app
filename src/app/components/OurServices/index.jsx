import Image from "next/image";
import ourservices from "@/app/assets/ourservices.jpg";
import hanger from "@/app/assets/hanger.svg";
import tshirt from "@/app/assets/tshirt.jpg";
import jacket from "@/app/assets/jacket.jpg";
import styles from "./OurServices.module.css";

const OurServices = () => {
  const data = [
    {
      id: 1,
      title: "Dry Cleaning",
      desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do",
      imgSrc: hanger,
    },
    {
      id: 2,
      title: "Laundry Services",
      desc: "Lorem ipsum dolor sit amet, consectetur adised do eiusmod",
      imgSrc: tshirt,
    },
    {
      id: 3,
      title: "Leather and Suade",
      desc: "Lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do",
      imgSrc: jacket,
    },
  ];

  return (
    <div className={styles.content}>
      <div className={styles.heroImg}>
        <Image
          src={ourservices}
          sizes="100vw"
          style={{ minWidth: "100%", height: "auto" }}
          alt="Hero Image"
        />
      </div>
      <div className={styles.contentText}>
        <p>Services we provide</p>
        <div>
          {data.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.card} ${
                index === 0 ? styles.selectedCard : ""
              }`}
            >
              <Image
                src={item.imgSrc}
                width={62}
                height={64}
                alt="Laundry Image"
              />
              <div>
                <p
                  className={`${styles.title} ${
                    index === 0 ? styles.selectedCardText : ""
                  }`}
                >
                  {item.title}
                </p>
                <p
                  className={`${styles.desc} ${
                    index === 0 ? styles.selectedCardText : ""
                  }`}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurServices;
