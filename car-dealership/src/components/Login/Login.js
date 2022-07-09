import React from 'react';
import styles from '../Login/Login.module.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  return (
    <div className={styles.container} id="container">
      {/* <div className={styles['sign-up-container']}>
        <form action="#">
          <h1>Create Account</h1>
          <div className={styles['social-container']}>
            <a href="#" className={styles.socia}><i className="fab fa-facebook-f"></i></a>
            <a href="#" className={styles.socia}><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className={styles.socia}><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your email for registration</span>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <button>Sign Up</button>
        </form>
      </div> */}
      <div className={styles['sign-in-container']}>
        <form action="#" >
          <h1>Sign in</h1>
          <div className={styles['social-container']}>
            <a href="#" className={styles.socia}><i className="fab fa-facebook-f"></i></a>
            <a href="#" className={styles.socia}><i className="fab fa-google-plus-g"></i></a>
            <a href="#" className={styles.socia}><i className="fab fa-linkedin-in"></i></a>
          </div>
          <span>or use your account</span>
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <a href="#">Forgot your password?</a>
          <button>Sign In</button>
        </form>
      </div>
      <div className={styles['overlay-container']}>
        <div className={styles.overlay}>
          <div className={styles['overlay-left']}>
            <h1>Welcome Back!</h1>
            <p>To keep connected with us please login with your personal info</p>
            <button className={styles.ghost} id="signIn">Sign In</button>
          </div>
          <div className={styles['overlay-right']}>
            <h1>Hello, Friend!</h1>
            <p>Enter your personal details and start journey with us</p>
            <button className={styles.ghost} id="signUp">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;


// MY LOGIN
{/* <section>
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
</section> */}