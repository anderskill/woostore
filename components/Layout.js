import React from "react";
import styles from "../styles/Layout.module.css";
import Nav from "./Nav";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
