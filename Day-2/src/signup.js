import React, { useState } from "react";
import './App.css';
import { Link } from "react-router-dom";
import Navbar from "./navbar";

function Signup() {
  const [isLoginForm, setIsLoginForm] = useState(true);

  // const switchToLogin = (event) => {
  //   event.preventDefault();
  //   setIsLoginForm(true);
  // };

  // const switchToSignup = (event) => {
  //   event.preventDefault();
  //   setIsLoginForm(false);
  // };

  return (
   
    <div className="container">
      <div className={`form-container-sign ${!isLoginForm ? "active" : ""}`} id="signup-form">
        <h1>New User</h1>
        <form>
          <label htmlFor="new-username">First name</label>
          <input className="margin" type="text" id="new-username" name="new-username" required placeholder="   enter your firstname"/>
          <label htmlFor="new-username">Last name</label>
          <input className="margin" type="text" id="new-username" name="new-username" required placeholder="   enter your lastname"/>
          <label htmlFor="new-email">Email Id</label>
          <input className="margin" type="text" id="new-username" name="new-username" required placeholder="   Enter your emailid"/>
          <label htmlFor="new-email">Mobile No</label>
          <input className="margin" type="number" id="new-password" name="new-password" placeholder="   enter mobile no" required />
          <label htmlFor="new-email">Type of Account(Saving/current Account)</label>
          <input className="margin" type="text" id="new-password" name="new-password" placeholder="   enter vechile no" required />
          <label htmlFor="new-email">Select Transation type</label>
          <select className="margin1" id="new-password" name="new-paddword" >
            <option value="volvo">  select a option</option>
             <option value="volvo">  Banking</option>

             <option value="fiat">  Transation </option>
             <option value="audi">  OTHER</option>
             
             </select>
          <label >Proof</label>
          <input className="file" type="file"  required />
          <button  className="sumit" type="submit"><Link to='/home'>Sign Up</Link></button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login"  id="login-link">
            Login
          </Link>
        </p>
      </div>
    </div>
    
  );
}

export default Signup;