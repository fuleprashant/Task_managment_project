import React from "react";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Sign Up
        </h2>

        {/* Form Fields */}
        <form className="space-y-5">
          {/* Username Field */}
          <div>
            <label className="block text-gray-700 mb-2">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-gray-700 mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-semibold transition duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 border-t border-gray-300"></div>
          <span className="px-3 text-gray-500">OR</span>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>

        <button className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 transition duration-300">
          <FcGoogle size={24} />
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default SignUp;
