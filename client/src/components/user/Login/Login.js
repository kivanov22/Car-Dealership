import React from "react";
import styles from "../Login/Login.module.css";
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext.js";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import * as authService from "../../../services/authService.js";

function Login() {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    username: "",
    password: "",
  });


  const changeHandler = (e)=> {
    setValues(state => ({
      ...state
      [e.target]
      
    }));
  };


  const LoginSubmitHandler = (e) => {
    e.preventDefault();

    let{username,password} = Object.fromEntries(new FormData(e.currentTarget));
   

      authService.login(username,password)
      .then(authData => {
        userLogin(authData)
        navigate('/');
      })
      .catch(()=> {
        navigate('/404');
      });
  };

  return (
    <div className={styles["login-cotaniner"]}>
      <div className={styles.container}>
        <div className={styles["sign-in-container"]}>
          <form
            className={styles["form-container"]}
            method="POST"
            onSubmit={LoginSubmitHandler}
          >
            <h1 className={styles["form-headings"]}>Sign in</h1>
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
              name="username"
              type="text"
              placeholder="Username"
              className={styles["input-txt"]}
              value={values.username}
              onChange={changeHandler}
            />
            {/* <input
              type="email"
              placeholder="Email"
              className={styles["input-txt"]}
              value={values.email}
              onChange={changeHandler}
            /> */}
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className={styles["input-txt"]}
              value={values.password}
              onChange={changeHandler}
            />
            <a href="#" className={styles["form-anchors"]}>
              Forgot your password?
            </a>
            <input type="submit" className={styles.btn} value="Login" />
          </form>
        </div>
        <div className={styles["overlay-container"]}>
          <div className={styles.overlay}>
            <div className={styles["overlay-left"]}>
              <h1 className={styles["form-headings"]}>Welcome Back!</h1>
              {/* <p className={styles['form-text']}>To keep connected with us please login with your personal info</p> */}
              <button className={styles.ghost} id="signIn">
                Sign In
              </button>
            </div>
            <div className={styles["overlay-right"]}>
              <h1 className={styles["overlay-headings"]}>Hello, Friend!</h1>
              <p className={styles["overlay-text"]}>
                Sign in to create car posts
              </p>
              {/* <input type="submit" className={styles.btn} value="Login" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

// MY LOGIN
{
  /* <section>
<form action="">
<div>
<h1>Login</h1>

<label htmlFor="email">Username</label>
<input type="email" name="email" placeholder='kristian.ivanov@abv.bg'/>

<label htmlFor="password"></label>
<input type="password" placeholder="Type your password" />
<input type="submit" value="Login" />

<p>
    <span>You can also log in with</span>
</p>
</div>
</form>
</section> */
}
