import React from "react";
import { useNavigate } from "react-router-dom"; // Import the useNavigate hook
import img from "../../public/pic.jpg"; // Ensure correct path for the image

const Home = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to navigate to the AllTasks page when the button is clicked
  const handleGetStartedClick = () => {
    navigate("/alltasks"); // Navigate to the /alltasks route
  };

  return (
    <div className="flex flex-col-reverse md:flex-row justify-center items-center md:justify-between p-5 mt-24 mx-14">
      {/* Text Section */}
      <div className="flex flex-col justify-center items-center md:items-start text-center md:text-left md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 mt-36">
          Welcome to the Task Management Web Application
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Manage your tasks efficiently and stay organized with our easy-to-use
          platform.
        </p>
        <button
          className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-3 px-6 rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all"
          onClick={handleGetStartedClick} // Call the function when clicked
        >
          Get Started
        </button>
      </div>

      {/* Image Section */}
      <div className="flex justify-center md:justify-start md:w-1/2 mt-6 md:mt-0">
        <img
          src={img}
          alt="Task Management"
          className=" max-w-xl h-[600px] w-[400] rounded-lg shadow-lg transform md:scale-110 transition-all "
        />
      </div>
    </div>
  );
};

export default Home;
