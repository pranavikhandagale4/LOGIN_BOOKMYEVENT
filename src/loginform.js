import React, { useState } from "react";
import "./loginform.css"
import LogoRIT from './image';

const Loginform = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent form submission

    // perform validation
  
    if (!username || !password) {
      setErrorMsg("Please enter both username and password");
    } else if (username.length < 4 || username.length > 20) {
      setErrorMsg("Username must be between 4 and 20 characters");
    } else if (password.length < 8) {
      setErrorMsg("Password must be at least 8 characters");
    }
    else {
      // submit the form
      console.log("Form submitted:", username, password);
      // reset form fields
      setUsername("");
      setPassword("");
      setErrorMsg("");
    }
  };


  return (
    <center>
      <br/><br/><br/><br/><br/>
      <div className="cover">
        <LogoRIT />
        <p className="text1">LOGIN</p>
        <form onSubmit={handleSubmit}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: "370px", height: "20px", marginTop: "-170px" }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: "370px", height: "20px", marginTop: "-120px" }}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <p className="text2">
              <i>forgot password?</i>
            </p>
            <button
              type="submit"
              className="login-btn"
              style={{ position: "absolute", marginTop: "-30px" }}
            >
              LOGIN
            </button>
          </div>
      
          <div style={{ marginTop: "3px", textAlign:"right",marginRight:"200px",color:"Orange"}}>
          {errorMsg && <div className="error">{errorMsg}</div>}
          </div>
        </form>
      </div>
    </center>
  );
};

export default Loginform;
