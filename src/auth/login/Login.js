import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import "./login.css";
import authService from "../service/auth";
import { useGlobalContext } from "../../context/context";
const Login = () => {
  const { setAuth } = useGlobalContext();
  const userRef = useRef();
  const errRef = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from || "/";
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
      await authService.login(email, pass).then((response) => {
        const accessToken = response?.data?.accessToken;

        setEmail("");
        setPass("");

        navigate(from, { replace: true });
        setAuth({ email, pass });
        // email:eve.holt@reqres.in,
        // pass: cityslicka
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
