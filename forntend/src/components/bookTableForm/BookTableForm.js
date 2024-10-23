import React, { useEffect } from 'react'

import { Formik } from 'formik';
import Axios from 'axios'
import Footer from '../footer/Footer';
import Header from '../header';
export const BookTablrForm = () => {
    useEffect(()=>{
        setTimeout(function() {
            let token = localStorage.getItem('token');
            console.log("valuesvaluesvalues",token)
        }, 50);
    },[])
  return (
    <div>
        <Header/>
        <div className='bg-banner w-full h-[700px] bg-cover max-h-svh bg-no-repeat relative'>
            <div className='absolute  h-[550px] w-[300px] bg-slate-800 top-[130px] end-0 right-[300px] font-serif rounded-xl  shadow-2xl '>
            <p className='text-center  text-slate-300 text-[30px] font-extrabold bg-gray-500 rounded-xl mb-2 '>Book a table</p>    
            <Formik
                initialValues={{ mobile:'',fname:'', lname:'', email: '', bookingDate: '', bookingTime: '',guestCount: 0 }}
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
                    var a =localStorage.getItem('token')
                    console.log(values,"valuesvaluesvalues",a)
                    
                    Axios.post('http://localhost:4000/api/v1/table/bookTable',values).then((res)=>{
                        //setMsg("User registered")
                        console.log(res,"valuesvaluesvalues",a)
                    })
                    setTimeout(() => {
                    
                    setSubmitting(false);
                    //navigate("/login");
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
                        className='w-full border-b-2 p-2'
                        placeholder='Enter your mobile'
                            type="text"
                            name="mobile"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.mobile}
                        />
                        {errors.mobile && touched.mobile && errors.mobile}
                    </div>
                    <div className='m-4'>
                        <input  
                            className='w-full border-b-2 p-2' 
                            onChange={handleChange}
                            onBlur={handleBlur} 
                            placeholder='Select date'
                            type="date" 
                            name='bookingDate' 
                            value={values.bookingDate}
                        />
                    {errors.bookingDate && touched.bookingDate && errors.bookingDate}
                    </div>
                    <div className='m-4'>
                        <input
                        className='w-full border-b-2 p-2'
                        placeholder='Enter your time'
                            type='time'
                            name="bookingTime"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.bookingTime}
                        />
                        {errors.bookingTime && touched.bookingTime && errors.bookingTime}
                    </div>
                    <div className='m-4'>
                        <input
                        className='w-full border-b-2 p-2'
                        placeholder='Enter number of guests'
                            type='number'
                            name="guestCount"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.guestCount}
                        />
                        {errors.guestCount && touched.guestCount && errors.guestCount}
                    </div>
                    <button  type="submit" className='border-yellow-800  items-center border-2 p-2 m-2 mr-2 text-center text-[20px]  text-slate-300 hover:bg-yellow-800'>Sign Up</button>
                    </form>
                )}
            </Formik>
            </div>
        </div>
        <Footer/>
    </div>
  )
}
