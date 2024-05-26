import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import ViewMenu from '../pages/ViewMenu'
export const ViewMenuContext = createContext("");

const ViewMenuProvider =  ({children}) => {

  const user_id = sessionStorage.getItem("user_id");

  const orderFoodHandelar = async(orderId) =>{
    // const orderData = new FormData();
    // orderData.append('opt_id', orderId)
    // orderData.append('user_id', sessionStorage.getItem('user_id'));

    const od = {
      'opt_id': orderId,
      'user_id':sessionStorage.getItem('user_id'),
    }
    try {
      const orderResponse = await axios.post('http://localhost:3001/employee/order-food',od)
      // const msg = orderResponse.data.message;

      if(orderResponse.status === 403){
        alert("Food order successfull");
        // console.log(msg)
      }
      if(orderResponse.status === 200){
        alert("Food order failed. An order oxist please delete your previous order to place a new one.");
      }
      
    } catch (error) {
        console.error(error);
    }
  };
  const viewMenuCtxvalues = {
    user_id,
    orderFoodHandelar,
  }
  return(
    <div>
      <ViewMenuContext.Provider value={viewMenuCtxvalues}>
        {children}
      </ViewMenuContext.Provider>
    </div>
  ) 
};

export default ViewMenuProvider;
