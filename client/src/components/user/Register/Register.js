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
import { AuthContext } from "../../../context/authContext.js";

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
    // let {username,email,password} = Object.fromEntries(new FormData(e.currentTarget));

    // authService.register(username,email,password);
    // createAPIEndpoint("Authenticate/register")
    //   .post(values)
    //   .then((res) => res.json())
    //   .catch((err) => console.log(err));
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
            <h1 className={styles["form-headings"]}>Register:</h1>
            <div className={styles["social-container"]}>
              <a href="#" className={styles.social}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faFacebookF}
                ></FontAwesomeIcon>
              </a>
              <a href="#" className={styles.social}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faGoogle}
                ></FontAwesomeIcon>
              </a>
              <a href="#" className={styles.social}>
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faLinkedin}
                ></FontAwesomeIcon>
              </a>
            </div>
            <span className={styles["form-spans"]}>or use your account</span>
            <input
               id="username"
              type="text"
              name="username"
              placeholder="Username"
              value={values.username}
              onChange={changeHandler}
              className={styles["input-txt"]}
            />
            <input
             id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={values.email}
              onChange={changeHandler}
              className={styles["input-txt"]}
            />
            <input
             id="password"
              type="password"
              name="password"
              placeholder="Password"
              value={values.password}
              onChange={changeHandler}
              className={styles["input-txt"]}
            />
            {/* <input type="password" placeholder="Confirm Password" className={styles['input-txt']}/> */}
            <input type="submit" className={styles.btn} value="Register" />
            {/* <button className={styles.btn} >Register</button> */}
          </form>
        </div>
        {/* <div className={styles["overlay-container"]}>
          <div className={styles.overlay}>
            <div className={styles["overlay-left"]}></div>
            <div className={styles["overlay-right"]}>
              <h1 className={styles["overlay-headings"]}>Hello, Friend!</h1>
              <p className={styles["overlay-text"]}>
                Enter your personal details and start journey with us
              </p>
              <button className={styles["overlay-btn"]} id="signUp">
                Log In
              </button>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Register;
