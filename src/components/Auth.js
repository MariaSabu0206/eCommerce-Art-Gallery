import React, { useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";
import { useNavigate } from "react-router-dom";
import "../CSS/Auth.css";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    let timer;
    if (error) {

      timer = setTimeout(() => {
        setError("");
      }, 6000);
    }
    return () => clearTimeout(timer);
  }, [error]);

  const handleAuth = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registration successful! Now Login using your registered mail and password");
        navigate("/");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");
        navigate("/gallery");
      }
    } catch (error) {
      setError("Authentication failed. Please try again.");
    }
  };

  const handleInputChange = (setter) => (e) => {
    setError("");
    setter(e.target.value);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{isRegistering ? "Register" : "Login"}</h1>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <div className="loginsignup-fields">
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={handleInputChange(setEmail)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handleInputChange(setPassword)}
            required
          />
        </div>
        <button onClick={handleAuth}>
          {isRegistering ? "Register" : "Login"}
        </button>
        <p className="loginsignup-login">
          {isRegistering
            ? "Already have an account? "
            : "Don't have an account? "}
          <span onClick={() => setIsRegistering(!isRegistering)}>
            {isRegistering ? "Login" : "Register here"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default Auth;
