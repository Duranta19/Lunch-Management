import React from 'react'
import { createContext, useState, useEffect } from 'react';
import axios from 'axios';
export const OrderHistCtx = createContext("");

const OrderHistCtxProvider = ({children}) => {

    const [hist, setHist] = useState([]);
    const [histAdmin, setHistAdmin] = useState([]);
    const user_id = sessionStorage.getItem('user_id');
    useEffect(() => {
      fetchHistory();
      fetchHistoryAdmin();
    }, [hist]);
    const fetchHistory = async () =>{
        try {
            const history = await axios.get(`http://localhost:3001/employee/my-order/${user_id}`);
            setHist(history.data);
        } catch (error) {
            console.error(error);
        }
    };
    const fetchHistoryAdmin = async () =>{
        try {
            const historyAdmin = await axios.get('http://localhost:3001/admin/order-history');
            setHistAdmin(historyAdmin.data);
        } catch (error) {
            console.error(error);
        }
    };
    const deleteOrder = async (dltItem) =>{
        try {
            const new_history = await axios.delete(`http://localhost:3001/employee/delete-order/${dltItem}`);
            const updateHistory = hist.filter(item => item.opt_id !== dltItem)
            setHist(updateHistory);
            fetchHistory();
        } catch (error) {
            console.error(error);
        }
    }
    const val ={
        hist,
        histAdmin,
        deleteOrder,
    }
  return (
    <div>
      <OrderHistCtx.Provider value={val}>
        {children}
      </OrderHistCtx.Provider>
    </div>
  )
}

export default OrderHistCtxProvider
