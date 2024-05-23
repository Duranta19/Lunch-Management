import React from "react";

const AddMenuForm = () => {
  return (
    <div className="mt-5">
      <form className="max-w-sm mx-auto">
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
            name="opt_title"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Food Name"
            required
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
            name="item"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Items Include"
            required
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
            id="calorie"
            name="calorie"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Total Calorie Contain"
            required
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
            class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50"
            aria-describedby="file_input_help"
            id="file_input"
            name="file_input"
            type="file"
          />
          <p
            class="mt-1 text-sm text-gray-500 dark:text-gray-300"
            id="file_input_help"
          >
            SVG, PNG, JPG or GIF (MAX. 800x400px).
          </p>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
          Add New Food Item
        </button>
      </form>
    </div>
  );
};

export default AddMenuForm;
