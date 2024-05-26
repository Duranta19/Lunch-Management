import React, { useContext } from "react";
import { OrderHistCtx } from "../context_api/OrderHistCtx";

const EmployeeChoiceList = () => {
  const {histAdmin} = useContext(OrderHistCtx);
  return (
    <div>
      <hr className="my-5" />
      <span className="flex text-4xl text-blue-400 underline items-center justify-center mx-auto">
        View Employee Lunch Choice List Today
      </span>
      <div className="relative overflow-x-auto shadow-md px-10 py-10 sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Employee_Id
              </th>
              <th scope="col" class="px-6 py-3">
                Employee Name
              </th>
              <th scope="col" class="px-6 py-3">
                Food Option
              </th>
              <th scope="col" class="px-6 py-3">
                Item
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
            </tr>
          </thead>
          <tbody>
            {histAdmin.map((item) => (
                  <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {item.employee_id}
                  </th>
                  <td class="px-6 py-4">{item.e_name}</td>
                  <td class="px-6 py-4">{item.opt_name}</td>
                  <td class="px-6 py-4">{item.opt_items}</td>
                  <td class="px-6 py-4">{item.date}</td>
                
                </tr>
            ))}


            {/* <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                Microsoft Surface Pro
              </th>
              <td class="px-6 py-4">White</td>
              <td class="px-6 py-4">Laptop PC</td>
              <td class="px-6 py-4">$1999</td>
            
            </tr> */}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeChoiceList;
