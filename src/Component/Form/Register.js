import React, { useState } from "react";
import "./Register.css";

const Register = () => {
  const [data, setData] = useState({});
  const [fullName, setFullName] = useState("");

  const InputEv = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };
  const Submitted = (e) => {
    e.preventDefault();
    setFullName(data);
    setData("");
  };

  return (
    <>
      <div className="register_form">
        <form onSubmit={Submitted}>
          <h1>Registration Form</h1>
          <input
            type="text"
            placeholder="First Name"
            name="Fname"
            value={fullName.Fname}
            onChange={InputEv}
            className="register_form_input"
          />{" "}
          <br />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            name="Lname"
            value={fullName.Lname}
            onChange={InputEv}
            className="register_form_input"
          />
          <br />
          <br />
          <input
            type="email"
            placeholder="Email"
            name="Email"
            value={fullName.Email}
            onChange={InputEv}
            className="register_form_input"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Password"
            name="Password"
            value={fullName.Password}
            onChange={InputEv}
            className="register_form_input"
          />
          <br />
          <br />
          <input
            type="password"
            placeholder="Confirm Password"
            name="CPassword"
            value={fullName.CPassword}
            onChange={InputEv}
            className="register_form_input"
          />
          <br />
          <br />
          <label htmlFor="" className="label_check">
            <input type="checkbox" /> I Accept{" "}
            <span className="span_check">Terms & Conditions</span>
          </label>
          <br />
          <br />
          <button type="submit" id="submit_btn">
            Register Now
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
