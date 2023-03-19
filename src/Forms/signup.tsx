import React from "react";
import "./style.css";
import {Google, Facebook, RaaLogo} from "../assets"
import { Link } from "react-router-dom";

const Index = () => {
  
    return (
      <div>
        <div className="form-main">
          <form>
            <div className="form-container">
              <div className="login-header">
                <RaaLogo />
                <h3>New to Site?</h3>
              </div>
              <div className="form-grp">
                <div className="input-names">
                  <input
                    type="text"
                    className="form-input"
                    id="fname"
                    placeholder="First Name"
                    />
                  <input
                    type="text"
                    className="form-input"
                    id="lname"
                    placeholder="Last Name"
                    />
                </div>
              </div>
              <div className="form-grp">
                <input type="text" className="form-input" placeholder="Email"/> 
              </div>
              <div className="form-grp">
                <input
                  type="Password"
                  className="form-input"
                  placeholder="Password"
                  />
              </div>
              <div className="form-grp">
                <input
                  type="Password"
                  className="form-input"
                  placeholder="Confirm Password"
                />
              </div>
              <button type="submit" className="submit-button">
                Sign Up
              </button>
              <div className="sign-up my-3">
                <p>
                  Already have an account? <Link to="/">Log In</Link>
                </p>
              </div>
              <p className="or">
                <span>OR</span>
              </p>
              <div className="signup-with">
                <p>Sign Up With</p>
                <div className="signup-icon">
                  <Google />
                  <Facebook />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Index;
  