import React from "react";
import styles from "../Register/Register.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import * as authService from "../../../services/authService.js";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext.js";
import { Link} from 'react-router-dom';

function Register() {
  
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
  });

  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const changeHandler = (e)=> {
    setValues(state => ({
      ...state
      [e.target]
      
    }));
  };

  const registerSubmitHandler = (e) => {
    e.preventDefault();

    let{username,email,password} = Object.fromEntries(new FormData(e.currentTarget));
 
      authService.register(username,email,password)
      .then(authData =>{
        userLogin(authData);
        navigate('/login')
      })
  };

  return (
    <div className={styles["login-cotaniner"]}>
      <div className={styles.container}>
        <div className={styles["sign-in-container"]}>
          <form
            className={styles["form-container"]}
            method="POST"
            onSubmit={registerSubmitHandler}
          >
            <h1 className={styles["form-headings"]}>Register</h1>
            <div className={styles["social-container"]}>
              <a  className={styles.social}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faFacebookF}
                ></FontAwesomeIcon>
              </a>
              <a  className={styles.social}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faGoogle}
                ></FontAwesomeIcon>
              </a>
              <a  className={styles.social}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faLinkedin}
                ></FontAwesomeIcon>
              </a>
            </div>
            <span className={styles["form-spans"]}>or create your account</span>
            <input
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              className={styles["input-txt"]}
              value={values.username}
              onChange={changeHandler}
            />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className={styles["input-txt"]}
              value={values.email}
              onChange={changeHandler}
            />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className={styles["input-txt"]}
              value={values.password}
              onChange={changeHandler}
            />
            <Link to={'/login'} className={styles["form-anchors"]}>
              Already got an account?
            </Link>
            <input type="submit" className={styles.btn} value="Register" />
          </form>
        </div>
        <div className={styles["overlay-container"]}>
          <div className={styles.overlay}>
            <div className={styles["overlay-left"]}>
              <h1 className={styles["form-headings"]}>Welcome Back!</h1>
              {/* <p className={styles['form-text']}>To keep connected with us please login with your personal info</p> */}
              <button className={styles.ghost} id="register">
                Register
              </button>
            </div>
            <div className={styles["overlay-right"]}>
              <h1 className={styles["overlay-headings"]}>Hello, Friend!</h1>
              <p className={styles["overlay-text"]}>
                Register to create car posts
              </p>
              {/* <input type="submit" className={styles.btn} value="Login" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
