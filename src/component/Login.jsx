import React from "react";
import "./Login.css"; // Import CSS for styling

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
    // Add login logic here
    alert("Logged in successfully!");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Eklavya App</h2>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
        <div className="extra-links">
          <a href="/register">Create an account</a>
          <a href="/forgot-password">Forgot password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
