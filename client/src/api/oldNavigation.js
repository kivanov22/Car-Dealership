<header className={styles.wrapper}>
<div className={styles.container}>
  {/* left side */}
  <div className={styles["container-logo"]}>
    <p className={styles["header-title"]}>
      IVANOV <span className={styles["header-span"]}>AUTO</span>
    </p>
  </div>

  {/* right side */}
  <div className={styles["right-side"]}>
    <ul className={styles.navList}>
      <li className={styles.listItem}>
        <NavLink to='/login' className={styles.element}>
          Sign In
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink to='/register' className={styles.element}>
          Register
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink to='/logout' className={styles.element}>
          Logout
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink to='/catalogCars' className={styles.element}>
          All Cars
        </NavLink>
      </li>
      <li className={styles.listItem}>
        <NavLink to='/myCars' className={styles.element}>
          My Cars
        </NavLink>
      </li>
      {/* <li className={styles.listItem}>
        <NavLink to='/details' className={styles.element}>
          Details
        </NavLink>
      </li> */}
    </ul>
  </div>
</div>
</header>