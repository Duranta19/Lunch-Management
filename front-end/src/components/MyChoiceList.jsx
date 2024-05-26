import React, { useContext } from 'react'
import { OrderHistCtx } from '../context_api/OrderHistCtx'

const MyChoiceList = () => {
  const { hist,
    deleteOrder,} = useContext(OrderHistCtx)
  return (
    <div>
              <div className="relative overflow-x-auto shadow-md px-10 py-10 sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Option Name
              </th>
              <th scope="col" class="px-6 py-3">
                Items
              </th>
              <th scope="col" class="px-6 py-3">
                Total Calorie
              </th>
              <th scope="col" class="px-6 py-3">
                Date
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {hist.map((item) => (
                          <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                          <th
                            scope="row"
                            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                          >
                            {item.opt_name}
                          </th>
                          <td class="px-6 py-4">{item.opt_items}</td>
                          <td class="px-6 py-4">{item.total_cal}</td>
                          <td class="px-6 py-4">{item.date}</td>
                          <td class=" space-x-3 px-6 py-4">
                            {/* <a
                              href="#"
                              className=" space-x-3 font-medium text-blue-600 dark:text-blue-500 hover:underline"
                            >
                              Edit
                            </a> */}
                            <a
                              href="#"
                              onClick={()=> deleteOrder(item.order_id)}
                              className=" space-x-3 font-medium text-red-600 dark:text-red-500 hover:underline"
                            >
                              Delete
                            </a>
                          </td>
                        </tr>
            ))}

            
            
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MyChoiceList