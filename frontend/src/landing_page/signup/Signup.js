import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
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
      const res = await axios.post("http://localhost:5000/api/auth/signup", formData);
      alert(res.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Signup failed");
    }

    setLoading(false);
  };

  return (
    <div className="vh-100 d-flex justify-content-center align-items-center bg-light">

      <div className="card shadow p-4" style={{ width: "380px" }}>
        
        <h3 className="text-center mb-3 fw-bold">Create an Account</h3>
        <p className="text-center text-muted mb-4">Sign up to continue to Dashboard</p>

        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              className="form-control"
              onChange={handleChange}
              required
            />
          </div>

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
            {loading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        <div className="text-center mt-3">
          <small className="text-muted">
            Already have an account?{" "}
            <a href="/login" className="text-primary text-decoration-none">
              Login
            </a>
          </small>
        </div>

      </div>
    </div>
  );
};

export default Signup;
