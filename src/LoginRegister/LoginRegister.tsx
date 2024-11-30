import React, { useState } from "react";
import { FaUser, FaLock, FaInfoCircle } from "react-icons/fa";
import "./LoginRegister.css"; // Importing the CSS file

const LoginRegister: React.FC = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    // Validation logic
    if (!username) {
      setErrorMessage("User not found");
      return;
    }

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters");
      return;
    }

    // Simulate a user lookup in the database
    const userInDatabase = username === "teacher123" && password === "password123";

    if (!userInDatabase) {
      setErrorMessage("Teacher not found.");
      return;
    }

    // Success - Clear fields and show success message
    setUsername("");
    setPassword("");
    alert("Login successful!");
  };

  return (
    <div className="wrapper">
      <div className="form-box login">
        <form onSubmit={handleSubmit}>
          <h1>LOGIN</h1>

          <div className="input-box">
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <div className="icon">
              <FaUser />
            </div>
          </div>

          <div className="input-box">
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="icon">
              <FaLock />
            </div>
          </div>

          <div className="remember-forgot">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot password</a>
          </div>

          <button type="submit">Login</button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p>
            <FaInfoCircle /> Only Teachers can Login
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginRegister;
