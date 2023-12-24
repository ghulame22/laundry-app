import Image from "next/image";
import calendar from "@/app/assets/calendar.jpg";
import employee from "@/app/assets/employee.jpg";
import partner from "@/app/assets/partner.jpg";
import review from "@/app/assets/review.jpg";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  const data = [
    { id: 1, count: "17", title: "Years Experience", imgSrc: calendar },
    { id: 2, count: "50+", title: "Regular Partner", imgSrc: employee },
    { id: 3, count: "36+", title: "Employees", imgSrc: partner },
    { id: 4, count: "500k+", title: "Happy Costumers", imgSrc: review },
  ];

  return (
    <div className={styles.content}>
      <div>
        <p>SINCE 2004</p>
        <p>Provide High Quality Laundry Services</p>
      </div>
      <div className={styles.board}>
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <Image
              src={item.imgSrc}
              width={35}
              height={42}
              alt="Laundry Image"
            />
            <div>
              <p>{item.count}</p>
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
