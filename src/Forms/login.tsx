import React from "react";
import "./style.css";
import {Google, Facebook, RaaLogo} from "../assets"
import { Link } from "react-router-dom";

export default function App() {

  return (
    <>
      <div className="form-main">
        <form>
        <div className="form-container" >
        <div className="login-header">
          <RaaLogo/>
          <h4>Welcome to Raa Portal</h4>
          </div>
          <div className="form-grp">
            <input
              type="text"
              className="form-input"
              placeholder="Email"
            />
          </div>
          <input
            type="Password"
            className="form-input"
            placeholder="Password"
          />
          <button type="submit" className="submit-button">
            Submit
          </button>
          <div className="forgot">
            <a href="" className="">
              Forgot Password?
            </a>
          </div>
          <div className="sign-up my-3">
          <p>
              New to Site? <Link to="./signup">Sign Up</Link>
            </p>
          </div>
          <p className="or">
            <span>OR</span>
          </p>
          <div className="login-with">
            <p>Login With</p>
            <div className="login-icon">
              <Google />
              <Facebook />
            </div>
          </div>
          </div>
        </form>
      </div>
    </>
  );
}