import React from "react";
import styles from "./Navigation.module.css";
import logo from '../../../assets/cars.png'

function Navigation() {
 
  return <header className={styles.wrapper}>
    <div className={styles.container}>
      {/* left side */}
        <div className={styles['container-logo']}>
          <img src={logo} alt="" className={styles.logo}/>
        </div>

        {/* right side */}
        <div className={styles['right-side']}>
          <ul className={styles.navList}>
            <li className={styles.listItem}><a href="/login" className={styles.element}>Sign In</a></li>
            <li className={styles.listItem}><a href="/register" className={styles.element}>Register</a></li>
            <li className={styles.listItem}><a href="/logout" className={styles.element}>Logout</a></li>
            <li className={styles.listItem}><a href="/catalogCars" className={styles.element}>All Cars</a></li>
            <li className={styles.listItem}><a href="/myCars" className={styles.element}>My Cars</a></li>
            <li className={styles.listItem}><a href="/details" className={styles.element}>Details</a></li>
          </ul>
        </div>
    </div>
  </header>;
}

export default Navigation;

