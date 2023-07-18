import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./login.css";
import authService from "../service/auth";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pass]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.login(email, pass).then(() => {
        setEmail("");
        setPass("");
        navigate("/card");

      // email:john@mail.com,
      // pass: changeme
      });
    } catch (error) {
      console.log(error);
      if (!error?.response) {
        setErrMsg("No Server Response!");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing Username or Password!");
      } else if (error.response?.status === 401) {
        setErrMsg("Unauthorized!");
      } else {
        setErrMsg("Login Failed!");
      }
    }
  };

  return (
    <section className="section-app">
      <div className="auth-form-container">
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <h2 className="h2-title">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <label className="label-auth" htmlFor="user">
            Email
          </label>
          <input
            className="input-auth"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Username"
            id="email"
            name="email"
            ref={userRef}
            required
          />
          <label className="label-auth" htmlFor="password">
            Password
          </label>
          <input
            className="input-auth"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
            required
          />
          <button className="button-auth" type="submit">
            Log In
          </button>
        </form>
        <Link to="/register">
          <button className="link-btn">
            Don't have an account? Register here.
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Login;
