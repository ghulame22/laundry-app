import Image from "next/image";
import call from "@/app/assets/call.jpg";
import email from "@/app/assets/email.jpg";
import map2 from "@/app/assets/map2.jpg";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const data = [
    { id: 1, count: "Call", title: "084524145547", imgSrc: call },
    { id: 2, count: "Email", title: "loremipsum@gmail.com", imgSrc: email },
    { id: 3, count: "Location", title: "Bandung, Indonesia", imgSrc: map2 },
  ];

  return (
    <div className={styles.content}>
      <div>
        <p>Lets talk with our awesome team</p>
        <p>
          Will be the leading provider cleaning service by creating positive
          impact on all the quality
        </p>
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <Image
              src={item.imgSrc}
              width={42}
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
      <div className={styles.info}>
        <div>
          <label>Your name</label>
          <input placeholder="Full name here" />
        </div>
        <div>
          <label>Your mail</label>
          <input placeholder="Your email address" />
        </div>
        <div>
          <label>Message</label>
          <textarea placeholder="Type your message here" rows="5" cols="33" />
        </div>
        <div>
          <button className={styles.btn}>Send message</button>
        </div>
      </div>
    </div>
  );
};
export default ContactUs;
