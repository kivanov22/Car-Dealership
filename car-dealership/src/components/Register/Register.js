import React from "react";
import styles from '../Register/Register.module.css';

function Register() {
  return (
    <section className={styles.wrapper}>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            placeholder="kriskopk@abv.bg"
            id=""
          />

          <label htmlFor="">Password</label>
          <input type="password" name="password" id="" />

          <label htmlFor="">Confirm Password</label>
          <input type="password" name="confirm-password"  id="" />

          <input type="submit" value="Register"/>

          <p>
            <span>If you already have an account click to <a href="#">Login</a></span>
          </p>
        </div>
      </form>
    </section>
  );
}

export default Register;