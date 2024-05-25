import React, { Children, createContext, useState } from 'react'
import axios from 'axios';
export const AdminAddOptContext = createContext("")

const AdminAddOptProvider = ({children}) => {
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
    const add_item_value = {
        handelInput,
        handelImage,
        submitHandeler,
        optData,
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