import React, { Component } from 'react';
import './scss/signUp.css';

class signUp extends Component {
  render() {
    return (
      <div className="container">
        <div className="signup-content">
          <form method="POST" id="signup-form" className="signup-form">
            <h2 className="form-title">Create account</h2>
            <div className="form-group">
              <input type="text" className="form-input" name="name" id="name" placeholder="Your Name" />
            </div>
            <div className="form-group">
              <input type="email" className="form-input" name="email" id="email" placeholder="Your Email" />
            </div>
            <div className="form-group">
              <input type="text" className="form-input" name="password" id="password" placeholder="Password" />
              <span toggle="#password" className="zmdi zmdi-eye field-icon toggle-password" />
            </div>
            <div className="form-group">
              <input type="password" className="form-input" name="re_password" id="re_password" placeholder="Repeat your password" />
            </div>
            <div className="form-group">
              <input type="checkbox" name="agree-term" id="agree-term" className="agree-term" />
              <label htmlFor="agree-term" className="label-agree-term"><span><span /></span>I agree all statements in  <a href="#" className="term-service">Terms of service</a></label>
            </div>
            <div className="form-group">
              <input type="submit" name="submit" id="submit" className="form-submit" defaultValue="Sign up" />
            </div>
          </form>
          <p className="loginhere">
            Have already an account ? <a href="#" className="loginhere-link">Login here</a>
          </p>
        </div>
      </div>

    );
  }
}

export default signUp;