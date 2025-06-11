import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import bgImage from "../assets/LoginImg.jpeg";

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [responseMessage, setResponseMessage] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResponseMessage(null);

    try {
      const res = await axios.post("https://bx1g8dmj-8000.inc1.devtunnels.ms/login/", formData, {
        headers: { "Content-Type": "application/json" },
      });

      const data = res.data;

      localStorage.setItem("accessToken", data.access);
      localStorage.setItem("refreshToken", data.refresh);
      localStorage.setItem("username", formData.username);

      window.dispatchEvent(new CustomEvent("userChange", { detail: { username: formData.username } }));


      setResponseMessage({ type: "success", text: "Login successful!" });
      navigate("/");
    } catch (err) {
      setResponseMessage({
        type: "error",
        text: err.response?.data?.detail || "Login failed. Invalid username or password.",
      });
    }
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center">
      {/* ✅ Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center filter blur-sm"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* ✅ Foreground Login Form */}
      <div className="backdrop-blur-sm bg-white/30 p-8 rounded-xl shadow-lg w-96 relative z-10">
        <h1 className="text-3xl font-bold text-center text-sky-950 mb-4">Welcome Back</h1>

        {responseMessage && (
          <div
            className={`mb-4 text-center ${
              responseMessage.type === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {responseMessage.text}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Username */}
          <div>
            <label htmlFor="username" className="flex items-center gap-2 text-sky-900 font-medium mb-1">
              <FaUserAlt /> Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-sky-700"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="flex items-center gap-2 text-sky-900 font-medium mb-1">
              <FaKey /> Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-sky-700"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right text-sm">
            <Link to="/forgot-password" className="text-sky-800 hover:underline">
              Forgot Password?
            </Link>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-sky-900 text-white py-2 rounded-lg hover:bg-sky-800 transition"
          >
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-sky-900">
          Don&apos;t have an account?{" "}
          <Link to="/register" className="text-sky-800 hover:underline font-medium">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;