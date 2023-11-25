import React from 'react'
import style from './Login.module.css'
import Header from '../Header'
import Footer from '../Footer'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
    <Header/>
      <div className={style['login-main']}>
        <form className={style["form_container__login"]}>
          <div className={style["title_container"]}>
            <p className={style["title"]}>Login</p>
            <span className={style["subtitle"]}>
              Get started with our app and enjoy the experience.
            </span>
          </div>
          <br />
          <div className={style["input_container"]}>
            <label className={style["input_label"]} htmlFor="email_field">
             Username
            </label>
            <input
              placeholder="Username"
              title="Input title"
              name="input-name"
              type="text"
              className={style["input_field"]}
              id="email_field"
            />
          </div>
          <div className={style["input_container"]}>
            <label className={style["input_label"]} htmlFor="password_field">
              Password
            </label>

            <input
              placeholder="Password"
              title="Input title"
              name="input-name"
              type="password"
              className={style["input_field"]}
              id="password_field"
            />
          </div>
          <button title="Sign In" type="submit" className={style["sign-in_btn"]}>
            <span>Login</span>
          </button>
          <div className={style["separator"]}>
            <hr className={style["line" ]}/>
            <span>Or</span>
            <hr className={style["line" ]}/>
          </div>
          <button title="Register" type="submit" className={style["sign-in_ggl"]}>
            <span>Don,t have an Account,</span><Link to= '/signup'>Register</Link>
          </button>

        </form>
      </div>
      <Footer/>
    </>
  )

}

export default Login