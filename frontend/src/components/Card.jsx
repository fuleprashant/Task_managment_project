import React from "react";
import { IoMdAdd } from "react-icons/io";

const Card = () => {
  const data = [
    {
      title: "Frontend",
      desc: "Add dynamic state in the codeAdd dynamic state in the code",
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
    <div className="p-5 bg-gray-100 h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Project Tasks</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 hover:rotate-0 hover:bg-slate-200                                 "
          >
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {item.title}
            </h2>
            <p className="text-gray-600 text-2xl">{item.desc}</p>
          </div>
        ))}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition-transform duration-300 flex justify-center items-center gap-5 transform hover:scale-105 hover:rotate-0 hover:bg-slate-200">
          <h2 className="text-3xl font-semibold text-gray-800 mb-2">AddTask</h2>
          <IoMdAdd size={36} />
        </div>
      </div>
    </div>
  );
};

export default Card;
