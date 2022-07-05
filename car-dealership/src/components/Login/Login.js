import React from 'react'

function Login() {
  return (
    <section>
        <form action="">
        <div>
        <h1>Login</h1>

        <label htmlFor="email">Username</label>
        <input type="email" name="email" placeholder='kristian.ivanov@abv.bg'/>

        <label htmlFor="password"></label>
        <input type="password" />
        <input type="submit" value="Login" />

        <p>
            <span>You can also log in with</span>
        </p>
        </div>
        </form>
    </section>
  )
}

export default Login;