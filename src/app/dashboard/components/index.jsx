import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import styles from "../dashboard.module.css";

const Dashboard = ({ children }) => {
  return (
    <div className={styles.main}>
      <Navbar />
      <div className={styles.description}>
        <Sidebar />
        {children}
      </div>
    </div>
  );
};

export default Dashboard;
