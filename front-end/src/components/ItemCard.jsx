import React, { useContext } from "react";
import { ViewMenuContext } from "../context_api/ViewMenuCtx";
// import img from "../../../backEnd/uploads/morog-polao-jali-kabab.jpg"
// backEnd\uploads\Kacchi-Biryani4_800x.jpg
const ItemCard = (props) => {
  const {opt_id,opt_name,img,opt_items,total_cal} = props;
  
  const {orderFoodHandelar} = useContext(ViewMenuContext);
  return (
    <div>
      <div className="max-h-15 border rounded-lg shadow bg-gray-800 border-gray-700">
        <a href="#">
        <img
          className="flex rounded-t-lg h-[220px] w-[300px] items-center justify-center mx-auto"
          src={`http://localhost:3001/${img}`}
          alt={opt_name} 
        />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {opt_name} {opt_id}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {opt_items}
          </p>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {total_cal}
          </p>
          <a
            href="#"
            onClick={()=> orderFoodHandelar(opt_id)}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more

          </a>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
