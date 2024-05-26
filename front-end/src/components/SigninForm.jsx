import React, { useContext } from "react";
import {SignupContext} from "../context_api/signupContext";

const SigninForm = () => {
  const {
    handelInput,
    submitHandelar,
    formData,
  }= useContext(SignupContext)
  return (
    <div>
      <form className="max-w-sm mx-auto" onSubmit={submitHandelar}>
        <div className="mb-5">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your Username
          </label>
          <input
            type="text"
            id="user_name"
            name="user_name"
            value={formData.user_name}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Username"
            required
            onChange={handelInput}
          />
        </div>
        <div className="mb-5">
          <label
            for="password"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            placeholder="Enter your password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            onChange={handelInput}
          />
        </div>
        <div class="mb-5">
          <label
            for="repeat-password"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Repeat password
          </label>
          <input
            type="password"
            id="repeat-password"
            name="conf_pass"
            value={formData.conf_pass}
            placeholder="Repeat password"
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
            onChange={handelInput}
          />
        </div>

        <div class="mb-5">
          <label
            for="category"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Select Category:
          </label>

          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handelInput}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          >
            <option selected>Choose a Category</option>
            <option value="admin">Admin</option>
            <option value="employee">Employee</option>
   
          </select>
        </div>
        <button
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Register new account
        </button>
      </form>
    </div>
  );
};

export default SigninForm;
