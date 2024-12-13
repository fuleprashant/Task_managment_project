import React from "react";

const AddTask = () => {
  return (
    <div className="bg-white h-[1155px] overflow-hidden flex items-center justify-center p-4">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Add New Task
        </h2>

        <form>
          {/* Task Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Task
            </label>
            <input
              type="text"
              placeholder="Enter task title"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description Input */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter task description"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows="8"
            />
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Submit Task
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
