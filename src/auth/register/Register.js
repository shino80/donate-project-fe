import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate,useLocation } from "react-router-dom";
import authService from "../service/auth";
import "./register.css";
import { useGlobalContext } from "../../context/context";

const Register = () => {
  const { setAuth } = useGlobalContext();
  const navigate = useNavigate();
  const userRef = useRef();
  const errRef = useRef();
  const location = useLocation();
  const from = location?.state?.from || "/";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);
  useEffect(() => {
    setValidMatch(pass === matchPwd);
  }, [matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [name, email, pass, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await authService.register(email, pass, name).then(() => {
        setName("");
        setEmail("");
        setPass("");
        setMatchPwd("");
        setAuth({ email, pass });
        navigate(from, { replace: true });
       
      });
    } catch (err) {
      console.log(err);
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Taken");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
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

        <h2 className="h2-title">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label className="res-label" htmlFor="name">
            Full name
          </label>
          <input
            className="input-auth"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            required
            id="name"
            placeholder="Full Name"
          />
          <label className="res-label" htmlFor="User">
            Email
          </label>
          <input
            className="input-auth"
            value={email}
            ref={userRef}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            id="email"
            name="email"
            required
          />
          <label className="res-label" htmlFor="password">
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
          <label className="res-label" htmlFor="password">
            Confirm Password
          </label>
          <input
            className="input-auth"
            value={matchPwd}
            onChange={(e) => setMatchPwd(e.target.value)}
            type="password"
            placeholder="********"
            id="confirm-password"
            name="password"
          />
          {/* <p className={!validMatch ? 'errmsg' :'offscreen'}>
          Must matchpassword input field.
        </p> */}
          <button className="button-res" type="submit">
            Log In
          </button>
        </form>
        <Link to="/login">
          <button className="link-btn">
            Already have an account? Login here.
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Register;
