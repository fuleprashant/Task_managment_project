import React, { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { IoHeartSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";

const Card = () => {
  const [isCompleted, setIsCompleted] = useState(false);

  const data = [
    {
      title: "Frontend",
      desc: "Add dynamic state in the code",
    },
    {
      title: "Backend",
      desc: "Add the API to fetch the data.",
    },
    {
      title: "Database",
      desc: "Create a schema for the database.",
    },
    {
      title: "Server",
      desc: "Create a server for the application.",
    },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-8">Project Tasks</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className={`bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-all duration-300 transform ${
              isCompleted ? "bg-blue-100" : "bg-white"
            } `}
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600 mb-4">{item.desc}</p>

            {/* Incomplete/Complete Button */}
            <div className="mb-4">
              <button
                onClick={() => setIsCompleted(!isCompleted)}
                className={`px-6 py-2 rounded-full text-white font-medium transition-colors transform ${
                  isCompleted
                    ? "bg-blue-600 hover:bg-blue-700"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {isCompleted ? "Completed" : "Incomplete"}
              </button>
            </div>

            {/* Action Icons */}
            <div className="flex justify-between items-center">
              <FaEdit
                className="text-gray-600 hover:text-blue-500 cursor-pointer"
                size={24}
              />
              <CiHeart
                className="text-red-500 hover:text-red-600 cursor-pointer"
                size={24}
              />{" "}
              <IoHeartSharp
                className="text-red-500 hover:text-red-600 cursor-pointer"
                size={24}
              />
              <FaTrashAlt
                className="text-red-500 hover:text-red-600 cursor-pointer"
                size={24}
              />
            </div>
          </div>
        ))}

        {/* Add Task Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 flex justify-center items-center gap-5 cursor-pointer hover:bg-gray-200 transition-all">
          <h2 className="text-3xl font-semibold text-gray-800">Add Task</h2>
          <IoMdAdd size={36} />
        </div>
      </div>
    </div>
  );
};

export default Card;
