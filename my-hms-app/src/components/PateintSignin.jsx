import React, { useState } from "react";
import axios from "axios";
import bgImg from "../assets/signupImage.jpg";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";

const PateintSignin = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    email: "",
    phone_number: "",
    address: "",
    gender: "",
    DateOfBirth: "",
    EmergencyContact: ""
  });

  const API = "https://bx1g8dmj-8000.inc1.devtunnels.ms/register/patient/";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(API, formData);
      alert("Account Created Successfully!");
      setFormData({
        first_name: "",
        last_name: "",
        username: "",
        password: "",
        email: "",
        phone_number: "",
        address: "",
        gender: "",
        DateOfBirth: "",
        EmergencyContact: ""
      });
    } catch (error) {
      console.error("Error Creating Account", error);
    }
  };

  return (
    <div className="relative min-h-screen flex">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm z-0"
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className="card bg-sky-900 text-white  w-96 ml-40 z-10 ">
        <div className="card-body items-center">
          <h1 className="card-title">Sign Up</h1>
          <form onSubmit={handleSubmit} className="space-y-2">
            <div>
              <label className="label">First Name</label>
              <br />
              <input
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                placeholder="Enter Your First Name"
                className="input bg-white text-black"
                required
              />
            </div>

            <div>
              <label className="label">Last Name</label>
              <br />
              <input
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                placeholder="Enter Your Last Name"
                className="input bg-white text-black"
                required
              />
            </div>

            <div>
              <label className="label">
                <FaUserAlt /> User Name
              </label>
              <br />
              <input
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="User Name"
                className="input bg-white text-black"
                required
              />
            </div>

            <div>
              <label className="label">
                <MdOutlineEmail /> Email
              </label>
              <br />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="input bg-white text-black"
                required
              />
            </div>

            <div>
              <label className="label">
                <FaKey /> Password
              </label>
              <br />
              <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter Your Password"
                className="input bg-white text-black"
                required
              />
            </div>

            <div>
              <label className="label">Address</label>
              <br />
              <input
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="Enter Your Address"
                className="input bg-white text-black"
              />
            </div>

            <div>
              <label className="label">Mobile Number</label>
              <br />
              <input
                name="phone_number"
                type="text"
                value={formData.phone_number}
                onChange={handleChange}
                placeholder="Enter Your Mobile Number"
                maxLength="10"
                minLength="10"
                className="input bg-white text-black"
                required
              />
            </div>

            <div>
              <label className="label">Gender</label>
              <br />
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="input bg-white text-black"
                required
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>

            <div>
              <label className="label">Date of Birth</label>
              <br />
              <input
                name="DateOfBirth"
                type="date"
                value={formData.DateOfBirth}
                onChange={handleChange}
                className="input bg-white text-black"
                required
              />
            </div>

            <div>
              <label className="label">Emergency Contact</label>
              <br />
              <input
                name="EmergencyContact"
                value={formData.EmergencyContact}
                onChange={handleChange}
                placeholder="Enter Emergency Contact"
                className="input bg-white text-black"
                required
              />
            </div>

            <div className="mt-2">
              <p>
                Already have an account? <a href="./login">Log In</a>
              </p>
            </div>

            <div className="card-actions justify-center">
              <button
                className="btn btn-primary mt-auto btn-wide bg-base-100 bg-white text-black "
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PateintSignin;