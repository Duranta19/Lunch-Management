import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import { useNavigate } from 'react-router-dom';
export const SigninContext = createContext("");
const SigninProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        user_name: "",
        password: "",
    });
    const navigate = useNavigate()
    const handelInput = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    };
    const submitHandelar = async (e) => {
        e.preventDefault();
        try {
            const signinResposnse = await axios.post('http://localhost:3001/signin/', formData);
            console.log(signinResposnse.data.msg, signinResposnse.data.user_id);
            sessionStorage.setItem('user_id',signinResposnse.data.user_id);
            console.log(sessionStorage.getItem('user_id'))
            if (signinResposnse.data.msg == 'admin') {
                navigate('/admin');
            } else if(signinResposnse.data.msg == 'employee'){
                navigate('/employee');
            }
            else{
                alert(signinResposnse.data.msg);
                navigate('/')
            }

        } catch (error) {
            console.error(error);
        }
    }
  const SigninContextValue = {
    formData,
    submitHandelar,
    handelInput,
  };
  return (
    <div>
      <SigninContext.Provider value={SigninContextValue}>
        {children}
      </SigninContext.Provider>
    </div>
  );
};

export default SigninProvider;
