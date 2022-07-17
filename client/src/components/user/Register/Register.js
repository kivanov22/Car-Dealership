import React from "react";
import styles from "../Register/Register.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

function Register() {
  return (
    <div className={styles['login-cotaniner']}>
    <div className={styles.container}>
      <div className={styles['sign-in-container']}>
        <form action="#" className={styles['form-container']}>
          <h1 className={styles['form-headings']}>Register:</h1>
          <div className={styles['social-container']}>
            <a href="#" className={styles.social}><FontAwesomeIcon className={styles.icon} icon={faFacebookF}></FontAwesomeIcon></a>
            <a href="#" className={styles.social}><FontAwesomeIcon className={styles.icon} icon={faGoogle}></FontAwesomeIcon></a>
            <a href="#" className={styles.social}><FontAwesomeIcon className={styles.icon} icon={faLinkedin}></FontAwesomeIcon></a>
          </div>
          <span className={styles['form-spans']}>or use your account</span>
          <input type="email" placeholder="Email" className={styles['input-txt']}/>
          <input type="password" placeholder="Password" className={styles['input-txt']}/>
          <input type="password" placeholder="Confirm Password" className={styles['input-txt']}/>
          <button className={styles.btn}>Register</button>
        </form>
      </div>
      <div className={styles['overlay-container']}>
        <div className={styles.overlay}>
          <div className={styles['overlay-left']}>
          </div>
          <div className={styles['overlay-right']}>
            <h1 className={styles['overlay-headings']}>Hello, Friend!</h1>
            <p className={styles['overlay-text']}>Enter your personal details and start journey with us</p>
            <button className={styles['overlay-btn']} id="signUp">Log In</button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Register;
