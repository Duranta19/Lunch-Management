import React from 'react'
import { createContext, useState } from 'react';
import axios from 'axios';

export const SignupContext = createContext("");

const SignupProvider = ({children}) => {
    const[formData, setFormdata] = useState({
        user_name:"", 
        password: "", 
        conf_pass: "", 
        category: "",
    });
    const handelInput = (e) =>{
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandelar = async(e) =>{
        e.preventDefault();
        try {
            const signupResponse = await axios.post('http://localhost:3001/signup/', formData);
            console.log(signupResponse.data);
            alert("Signup Successful");
        } catch (error) {
            console.log(error);
        }
    }
    const signupContextValue = {
        handelInput,
        submitHandelar,
        formData,
        setFormdata,
    }
  return (
    <div>
        <SignupContext.Provider value={signupContextValue}>
            {children}
        </SignupContext.Provider>
    </div>
  )
}

export default SignupProvider