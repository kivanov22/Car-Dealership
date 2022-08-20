import React from "react";
import styles from "../LowerBanner/LowerBanner.module.css";
// import bmw from "../../../assets/img/contact-image-1-1920x700.jpg";

function LowerBanner() {
  return (
    <section className={styles["video-container"]}>
      <div className={styles["video-overlay"]}></div>
      <div className={styles["video-content"]}>
        <div className={styles.inner}>
          <div className={styles["section-heading"]}>
            <span className={styles["contact-span"]}>Contact Us</span>
            <h2 className={styles.moto}>Drive with passion !</h2>
          </div>
          <div className={styles["blue-button"]}>
            <a className={styles.talk}>Talk to us</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LowerBanner;
