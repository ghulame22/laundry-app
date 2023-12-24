import styles from "./CallToAction.module.css";

const CallToAction = () => {
  return (
    <div className={styles.content}>
      <p>Get promo for new customer, dont miss it!</p>
      <div>
        <button className={styles.btn}>Get it now</button>
      </div>
    </div>
  );
};
export default CallToAction;
