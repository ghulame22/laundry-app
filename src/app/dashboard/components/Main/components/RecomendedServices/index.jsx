import Image from "next/image";
import Drywash from "@/app/assets/Drywash.jpg";
import Wash from "@/app/assets/Wash.jpg";
import Iron from "@/app/assets/Iron.jpg";
import styles from "../../Main.module.css";

export default async function RecomendedServices() {
  const data = [
    {
      id: 1,
      title: "Dry Wash",
      desc: "Professional dry cleaners who have the necessary equipment.",
      imgSrc: Drywash,
    },
    {
      id: 2,
      title: "Wash Only",
      desc: "Safe to launder the item using a washing machine or by hand washing.",
      imgSrc: Wash,
    },
    {
      id: 3,
      title: "Iron",
      desc: "Give clothing a neat and crisp look, making it more presentable.",
      imgSrc: Iron,
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span>Recommended Service</span>
        <span>View All</span>
      </div>
      <div className={styles.cardHolder}>
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <Image src={item.imgSrc} alt="Laundry Image" />
            <div>
              <p>{item.title}</p>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
