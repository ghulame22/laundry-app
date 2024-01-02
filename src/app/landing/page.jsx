import AboutUs from "./components/AboutUs";
import CallToAction from "./components/CallToAction";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices";
import WhyUs from "./components/WhyUs";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <div className={styles.description}>
          <Navbar />
          <Hero />
        </div>
      </div>
      <div className={styles.description}>
        <WhyUs />
        <AboutUs />
        <OurServices />
        <HowItWorks />
        <ContactUs />
        <CallToAction />
      </div>
      <div className={styles.footer}>
        <div className={styles.description}>
          <Footer />
        </div>
      </div>
    </main>
  );
}
