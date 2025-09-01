import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "./AuthContext";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post (`${process.env.REACT_APP_API_URL}/api/auth/login`, form, {
        headers: { "Content-Type": "application/json" },
      });

      if (res.data.token) {
  localStorage.setItem("token", res.data.token);

  const userData = { 
    email: res.data.user.email, 
    name: res.data.user.username // <-- FIXED: get corraect key
  };
        login(userData);

        // Slight delay to allow flash to appear before navigation
        setTimeout(() => navigate("/product"), 500);
      } else {
        alert("Invalid login");
      }
    } catch (err) {
      console.error("Login error:", err.response ? err.response.data : err.message);
      alert("Login failed!");
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Login to Zerodha Clone</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
          <button type="submit">Login</button>
        </form>
        <p>
          Don’t have an account? <a href="/signup">Sign Up</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
