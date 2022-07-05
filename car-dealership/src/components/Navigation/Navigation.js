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
          <p>Sign In</p>
          {/* <p>My Listings</p> */}
          {/* <p>All Listings </p> */}
          <p>Register</p>
          <p>Logout</p>
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
