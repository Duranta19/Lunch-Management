import React, { Children, createContext, useState, useEffect } from 'react'
import axios from 'axios';
export const AdminAddOptContext = createContext("")

const AdminAddOptProvider = ({children}) => {
    const [foodData, setFoodData] = useState([]);
    const [optData, setOptData] = useState({
        option_name: "", 
        items: "", 
        total_cal: "",
        image: null
    });
    const handelInput = (e)=>{
        setOptData({
            ...optData,
            [e.target.name]: e.target.value,
        });
    };
    const handelImage = (e) =>{
        setOptData({
            ...optData,
            image: e.target.files[0],
        });
    };
    const submitHandeler = async(e) =>{
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('option_name', optData.option_name);
            formData.append('items', optData.items);
            formData.append('total_cal', optData.total_cal);
            formData.append('image', optData.image);
            const addOptResponse = await axios.post('http://localhost:3001/admin/add-option', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            if (addOptResponse.status === 201) {
                alert("Add New Item Success");
            }
            else{
                alert("Add New Item Failed");
            }
        } catch (error) {
            console.error(error);
        }
    };
    const fetchFoodOptData = async() =>{
        const response = await axios.get('http://localhost:3001/admin/get-option');
        setFoodData(response.data);
    }
    useEffect(() => {

        fetchFoodOptData();

    }, [foodData,optData]);

    const deleteItemhandelar = async (opt_id) =>{

        const dltResponse = await axios.delete(`http://localhost:3001/admin/delete-item/${opt_id}`);
        const deleteItem = foodData.filter(items => items.opt_id !== opt_id);
        setFoodData(deleteItem)
    }
    const add_item_value = {
        handelInput,
        handelImage,
        submitHandeler,
        optData,
        foodData,
        deleteItemhandelar,
    }
  return (
    <div>
      <AdminAddOptContext.Provider value={add_item_value}>
        {children}
      </AdminAddOptContext.Provider>
    </div>
  )
}

export default AdminAddOptProvider;