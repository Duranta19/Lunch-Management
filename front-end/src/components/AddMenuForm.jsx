import React, { useContext } from "react";
import { AdminAddOptContext } from "../context_api/AdminAddOptCtx";

const AddMenuForm = () => {
  const { handelInput, handelImage, submitHandeler, optData } = useContext(AdminAddOptContext);
  return (
    <div className="mt-5">
      <form className="max-w-sm mx-auto" onSubmit={submitHandeler}>
        <div className="mb-5">
          <label
            for="Option title"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Option title:
          </label>
          <input
            type="text"
            id="title"
            name="option_name"
            value={optData.option_name}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Food Name"
            required
            onChange={handelInput}
          />
        </div>

        <div className="mb-5">
          <label
            for="items"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Items:
          </label>
          <input
            type="text"
            id="item"
            name="items"
            value={optData.items}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Items Include"
            required
            onChange={handelInput}
          />
        </div>

        <div className="mb-5">
          <label
            for="cal"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Total Calories:
          </label>
          <input
            type="text"
            id="total_cal"
            name="total_cal"
            value={optData.total_cal}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Total Calorie Contain"
            onChange={handelInput}
          />
        </div>
        <div className=" mb-5">
          <label
            className="block mb-2 text-sm font-medium text-gray-900"
            for="file_input"
          >
            Upload Food image
          </label>
          <input
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
            aria-describedby="file_input_help"
            id="image"
            name="image"
            type="file"
            onChange={handelImage}
          />
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Add New Food Item
        </button>
      </form>
    </div>
  );
};

export default AddMenuForm;
