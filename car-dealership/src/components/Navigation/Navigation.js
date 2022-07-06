import React from "react";
import styles from "./Navigation.module.css";
import logo from '../../assets/cars.png'

function Navigation() {

 
  return <header>
    <div className={styles.container}>
      {/* left side */}
        <div className={styles['container-logo']}>
          <img src={logo} alt="" className={styles.logo} />
        </div>

        {/* right side */}
        <div className={styles['right-side']}>
          <a className={styles.element}>Sign In</a>
          {/* <p>My Listings</p> */}
          {/* <p>All Listings </p> */}
          <a className={styles.element}>Register</a>
          <a className={styles.element}>Logout</a>
        </div>
    </div>
  </header>;
}

export default Navigation;

// navigation
// 1.logo left
// 2.login/register
// 3.logged in user can edit car for sale
// 4.can add a new car for sale
