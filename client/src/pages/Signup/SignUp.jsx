import React, { useState, useContext } from "react";
import style from "./SignUp.module.css";
import Header from "../Header";
import Footer from "../Footer";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../../context/userContext";


const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const { setUsername: setLoggedInUser, setId } = useContext(UserContext);
   

  const signupHandler = async (e) => {
    e.preventDefault();
    const { data } = await axios.post('/register', { username, password });
    setLoggedInUser(username);
    setId(data.id);
    console.log(data);
    navigate('/chat');
  };

  return (
    <>
      <Header />

      <div className={style["signup-main"]}>

        <form
          onSubmit={signupHandler}
          className={style["form_container"]}>

          <div className={style["title_container"]}>
            <p className={style["title"]}>Register</p>
            <span className={style["subtitle"]}>
              Get started with our app, just create an account and enjoy the
              experience.
            </span>
          </div>
          <br />
          <div className={style["input_container"]}>
            <label className={style["input_label"]} htmlFor="email_field">
              Username
            </label>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              title="Input title"
              name="input-username"
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              title="Input title"
              name="input-name"
              type="password"
              className={style["input_field"]}
              id="password_field"
            />
          </div>
          <button
            title="Sign In"
            type="submit"
            className={style["sign-in_btn"]}
          >
            <span>Register</span>
          </button>
          <div className={style["separator"]}>
            <hr className={style["line"]} />
            <span>Or</span>
            <hr className={style["line"]} />
          </div>
          <button
            title="Sign In"
            type="submit"
            className={style["sign-in_ggl"]}
          >
            <span>Already have an Account,</span>
            <Link to="/login">Login</Link>
          </button>
        </form>
      </div>

      <Footer />
    </>
  );
};

export default SignUp;
