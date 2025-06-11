import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import bgImg from "../assets/signupImage.jpg"
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";


const DoctorSignin = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const API = "http://localhost:3000/users";

    const onSubmit = async (data) => {
        try {
            await axios.post(API, data);
            alert("Account Created Successfully!");
            reset();
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
                    <h1 className="card-title">Sign up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                        {/* FirstName */}
                        <div>
                            <label htmlFor="first name" className="label">
                                First Name
                            </label>
                            <br />
                            <input
                                {...register("firstName", { required: true })}
                                placeholder="Enter Your First Name"
                                className="input bg-white text-black"
                            />
                            {errors.firstName && (
                                <p className="text-red-500">First Name is required</p>
                            )}
                        </div>
                        {/* lastName */}
                        <div>
                            <label htmlFor="last name" className="label">
                                Last Name
                            </label>
                            <br />
                            <input
                                {...register("lastName", { required: true })}
                                placeholder="Enter Your Last Name"
                                className="input bg-white text-black"
                            />
                            {errors.lastName && (
                                <p className="text-red-500">Last Name is required</p>
                            )}
                        </div>
                        {/* UserName */}
                        <div>
                            <label htmlFor="User name" className="label">
                                <FaUserAlt />
                                User Name
                            </label>
                            <br />
                            <input
                                {...register("username", { required: true })}
                                placeholder="User Name"
                                pattern="^(?![.-])(?=[A-Za-z0-9]*[A-Z])[A-Za-z0-9.-]{5,20}(?<![_.-])$"
                                minLength="3"
                                maxLength="10"
                                title="Username must be 3 to 10 characters long and contain only letters, numbers, or dashes, with at least one uppercase letter."
                                className="input bg-white text-black"
                            />
                            {errors.username && (
                                <p className="text-red-500">Username is required</p>
                            )}
                        </div>
                        {/* Department */}
                        <div>
                            <label htmlFor="Department" className="label">
                                Department
                            </label>
                            <br />
                              <input
                                {...register("department", { required: true })}
                                placeholder="Department"
                                 className="input bg-white text-black"
                            />
                            {errors.department && (
                                <p className="text-red-500">Department is required</p>
                            )}
                        </div>
                         {/* Specialization */}
                        <div>
                            <label htmlFor="Specialization" className="label">
                                Specialization
                            </label>
                            <br />
                              <input
                                {...register("specialization", { required: true })}
                                placeholder="specialization"
                                 className="input bg-white text-black"
                            />
                            {errors.specialization && (
                                <p className="text-red-500">Specialization is required</p>
                            )}
                        </div>
                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="label">
                                <MdOutlineEmail />
                                Email
                            </label>
                            <br />
                            <input
                                type="email"
                                {...register("email", { required: true })}
                                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                placeholder="Enter Your Email"
                                className="input bg-white text-black"
                            />
                            {errors.email && (
                                <p className="text-red-500">Email is required</p>
                            )}
                        </div>
                        {/* Password */}
                        <div>
                            <label htmlFor="password" className="label">
                                <FaKey />
                                Password
                            </label>
                            <br />
                            <input
                                type="password"
                                {...register("password", { required: true, minLength: 8 })}
                                pattern="^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[@$%&^])[A-Za-z\d@$%&^]{8,}$"
                                placeholder="Enter Your Password"
                                title="Password must be of atleast 6-digits and contain only letters, numbers,special characters with at least one uppercase letter."
                                className="input bg-white text-black"
                            />
                            {errors.password && (
                                <p className="text-red-500">
                                    Password must be at least 8 characters
                                </p>
                            )}
                        </div>
                        {/* Address */}
                        <div>
                            <label htmlFor="address" className="label">
                                Address
                            </label>
                            <br />
                            <input
                                type="text"
                                {...register("address")}
                                placeholder="Enter Your Address"
                                className="input bg-white text-black"
                            />
                        </div>
                        {/* Mobile Number */}
                        <div>
                            <label htmlFor="mobile number" className="label">
                                Mobile Number
                            </label>
                            <br />
                            <input
                                type="Number"
                                {...register("mobileNumber", {
                                    required: true,
                                    maxLength: 10,
                                    minLength: 10,
                                })}
                                placeholder="Enter Your Mobile Number"
                                className="input bg-white text-black"
                            />
                            {errors.mobileNumber && (
                                <p className="text-red-500">Mobile Number is required</p>
                            )}
                        </div>
                        <div className="mt-2">
                            <p>
                                Alredy have an account?<a href="./login">Log In</a>
                            </p>
                        </div>
                        {/* SignIn Button */}
                        <div className="card-actions justify-center">
                            <button
                                className="btn btn-primary mt-auto btn-wide bg-base-100 bg-white text-black "
                                type="submit"
                            >
                                Sign In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
export default DoctorSignin;