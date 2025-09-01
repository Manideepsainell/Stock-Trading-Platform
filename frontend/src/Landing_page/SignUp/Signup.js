import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Signup() {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate = useNavigate();

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const res = await axios.post("http://localhost:3002/api/auth/signup", form, {
      headers: { "Content-Type": "application/json" },
    });

    console.log("🔹 Signup response:", res.data);

    if (res.data && res.data.token) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));
      navigate("/product");
    } else {
      alert("Signup failed: No token received");
    }
  } catch (err) {
    console.error("🔥 Frontend Signup error:", err.response ? err.response.data : err.message);
    alert("Signup failed!");
  }
};



  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Create your Zerodha Clone account</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={form.username}
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
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
          <button type="submit">Sign Up</button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none", color: "#387ed1" }}>
  Login
</Link>

        </p>
      </div>
    </div>
  );
}

export default Signup;
