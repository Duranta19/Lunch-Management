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
    const [isUpdate, setUpdate] = useState(false);
    const [upId, setUpId] = useState();
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
        if (isUpdate) {
            console.log(optData);
            try {
                const formData = new FormData();
                formData.append('option_name', optData.option_name);
                formData.append('items', optData.items);
                formData.append('total_cal', optData.total_cal);
                formData.append('image', optData.image);
                console.log([...formData], upId);
                const addOptResponse = await axios.put(`http://localhost:3001/admin/update-option/${upId}`, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
                if (addOptResponse.status === 205) {
                    alert("Update Item Success");
                }
                else{
                    alert("Add New Item Failed");
                }
                setUpdate(false);
                setUpId();
            } catch (error) {
                console.error(error);
            }
        } 
        else {
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
    };

    const updateHaldellar = (update, item) =>{
        setUpdate(update);
        setOptData({
            option_name: item.opt_name, 
            items: item.opt_items, 
            total_cal: item.total_cal,
        })
        setUpId(item.opt_id);

    }
    const add_item_value = {
        handelInput,
        handelImage,
        submitHandeler,
        optData,
        foodData,
        deleteItemhandelar,
        updateHaldellar,
        isUpdate,
        setUpdate,
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