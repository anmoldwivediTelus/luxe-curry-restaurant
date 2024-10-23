import React, { useState } from 'react'
import { Formik } from 'formik';
import Axios from 'axios'
import { useNavigate } from "react-router-dom";
import Header from '../header';
import Footer from '../footer/Footer';
export const SignUp = () => {
    const [msg,setMsg]=useState('');
    const navigate = useNavigate();

  return (
    <div>
        <Header/>
        <div className='bg-banner w-full h-[700px] bg-cover max-h-svh bg-no-repeat relative'>
        <div className='absolute  h-[450px] w-[300px] bg-slate-800 top-[200px] end-0 right-[300px] font-serif rounded-xl  shadow-2xl '>
        <p className='text-center  text-slate-300 text-[30px] font-extrabold bg-gray-500 rounded-xl mb-2 '>Sign up here</p>    
        <Formik
            initialValues={{ name:'',fname:'', lname:'', email: '', password: '' }}
            validate={values => {
                const errors = {};
                if (!values.email) {
                errors.email = 'Required';
                } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
                Axios.post('http://localhost:4000/api/v1/users/createUser',values).then((res)=>{
                    setMsg("User registered")
                })
                setTimeout(() => {
                
                setSubmitting(false);
                navigate("/login");
                }, 400);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit} className='text-center p-2'>
                <div className='m-4'>
                    <input
                    className='w-full border-b-2 p-2'
                    placeholder='Enter your user name'
                        type="text"
                        name="name"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                    />
                    {errors.name && touched.name && errors.name}
                </div>
                    <div className='m-4'>
                    <input
                    className='w-full border-b-2 p-2'
                    placeholder='Enter your first name'
                        type="text"
                        name="fname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fname}
                    />
                    {errors.fname && touched.fname && errors.fname}
                </div>
                <div className='m-4'>
                    <input
                    className='w-full border-b-2 p-2'
                    placeholder='Enter your last name'
                        type="text"
                        name="lname"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lname}
                    />
                    {errors.lname && touched.lname && errors.lname}
                </div>
                <div className='m-4'>
                    <input
                    className='w-full border-b-2 p-2'
                    placeholder='Enter your email'
                        type="email"
                        name="email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                    />
                    {errors.email && touched.email && errors.email}
                </div>
                <div className='m-4'>
                    <input
                    placeholder='Enter your password'
                    className='w-full border-b-2 p-2'
                        type="password"
                        name="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                    />
                    {errors.password && touched.password && errors.password}
                </div>
                <button  type="submit" className='border-yellow-800  items-center border-2 p-2 m-2 mr-2 text-center text-[20px]  text-slate-300 hover:bg-yellow-800'>Sign Up</button>
                <p>{msg}</p>
                </form>
            )}
        </Formik>
        </div>
        </div>
        <Footer/>
    </div>
    
  )
}
