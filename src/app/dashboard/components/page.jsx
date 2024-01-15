import React from "react";
import Main from "./Main";
import Aside from "./Aside";
import styles from "../dashboard.module.css";


const DashboardPage = () => {
  return (
    <div className={styles.content}>
      <Main />
      <Aside />
    </div>
  );
};

export default DashboardPage;
