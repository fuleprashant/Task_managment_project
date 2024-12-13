import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup
    .string()
    .required("title is required")
    .min(3, "title must be at least 5 characters"),
  description: yup
    .string()
    .required("description is required")
    .min(12, "description must be at least 10 characters"),
});

const AddTask = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="bg-white h-[1155px] overflow-hidden flex items-center justify-center p-4">
      <div className="bg-gray-100 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Add New Task
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Task Input */}
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Task
            </label>
            <input
              type="text"
              placeholder="Enter task title"
              {...register("title")}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Description Input */}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">
              Description
            </label>
            <textarea
              placeholder="Enter task description"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              {...register("description")}
              rows="8"
            />
            {errors.description && (
              <p className="text-red-500 text-sm mt-1">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
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
