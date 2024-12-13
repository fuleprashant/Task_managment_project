import React, { useState } from "react";

const SignIn = () => {
  const [avatar, setAvatar] = useState(null);

  // Handle file upload and set avatar preview
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Sign In
        </h2>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            placeholder="Enter your password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Avatar Upload */}
        <div className="mb-6">
          <label className="block text-gray-700 font-semibold mb-2">
            Upload Avatar
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleAvatarChange}
            className="w-full"
          />
          {avatar && (
            <img
              src={avatar}
              alt="Avatar Preview"
              className="w-24 h-24 mt-4 rounded-full mx-auto object-cover shadow-md"
            />
          )}
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300">
          Sign In
        </button>
      </div>
    </div>
  );
};

export default SignIn;
