import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      alert("Login Successful");
      console.log(res.data);

      // redirect or save token
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }

    setLoading(false);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">

      <div className="card shadow p-4" style={{ width: "380px" }}>
        
        <h3 className="text-center mb-3 fw-bold">Login</h3>
        <p className="text-center text-muted mb-4">Enter your credentials</p>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-100"
            disabled={loading}
          >
            {loading ? "Checking..." : "Login"}
          </button>
        </form>

        <div className="text-center mt-3">
          <small className="text-muted">
            Don’t have an account?{" "}
            <a href="/signup" className="text-primary text-decoration-none">
              Create one
            </a>
          </small>
        </div>

      </div>
    </div>
  );
};

export default Login;
