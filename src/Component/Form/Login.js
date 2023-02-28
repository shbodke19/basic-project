import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [data, setData] = useState({});
  const [fname, setFname] = useState("");

  const Submitted = (e) => {
    e.preventDefault();
    setFname(data);
    setData("");
  };

  const InputEv = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };
  return (
    <>
      <h1>Login Form</h1>
      {/* <p>{fname.Name}</p> */}
      <div className="register_form">
        <form onSubmit={Submitted}>
          <input
            type="text"
            name="Name"
            value={fname.Name}
            onChange={InputEv}
            placeholder="Name or Id"
          />
          <br />
          <br />
          <input
            type="password"
            name="Pass"
            value={fname.Pass}
            onChange={InputEv}
            placeholder="Password"
          />
          <br />
          <br />
          <button type="submit" id="submit_btn">
            Login Now
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
