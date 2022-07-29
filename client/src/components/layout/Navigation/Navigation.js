import React from "react";
import styles from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext.js";

function Navigation() {
  const { user } = useContext(AuthContext);

  const userNavigation = (
    <div className={styles.navList}>
              <div className={styles.listItem}>
                <NavLink to="/myCars" className={styles.element}>
                  My Cars
                </NavLink>
              </div>
        
              <div className={styles.listItem}>
                <NavLink to="/create" className={styles.element}>
                  Create
                </NavLink>
              </div>
              <div className={styles.listItem}>
              <NavLink to="/catalogCars" className={styles.element}>
                All Cars
              </NavLink>
              </div>
              <div className={styles.listItem}>
                <NavLink to="/logout" className={styles.element}>
                  Logout
                </NavLink>
              </div>
            </div>
  );

  const guestNavigation = (
    <div className={styles.navList}>
               <div className={styles.listItem}>
                 <NavLink to="/login" className={styles.element}>
                   Sign In
                 </NavLink>
               </div>
         
               <div className={styles.listItem}>
               <NavLink to="/register" className={styles.element}>
                 Register
               </NavLink>
               </div>
               <div className={styles.listItem}>
               <NavLink to="/catalogCars" className={styles.element}>
                 All Cars
               </NavLink>
               </div>
             </div>
  );

  return (
    <header className={styles.wrapper}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          {/* left side */}
          <div className={styles["container-logo"]}>
            <Link className={styles["header-title"]} to="/">
              IVANOV <span className={styles["header-span"]}>AUTO</span>
            </Link>
          </div>

          {/* right side */}
          <div className={styles["right-side"]}>
            <div className={styles.navList}>
              {user.userName 
              ? userNavigation 
              : guestNavigation} 
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
