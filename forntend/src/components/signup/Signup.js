import React from 'react'
import { Formik } from 'formik';
export const SignUp = () => {
  return (
    <div className='bg-banner w-full h-[700px] bg-cover max-h-svh bg-no-repeat '>
        <div className=' absolute h-[450px] w-[300px] bg-slate-800 top-[200px] end-0 right-[300px] font-serif rounded-xl  shadow-2xl '>
        <p className='text-center  text-slate-300 text-[30px] font-extrabold bg-gray-500 rounded-xl mb-2 '>Sign up here</p>    
        <Formik
            initialValues={{ email: '', password: '' }}
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
                setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
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
                        name="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.fName}
                    />
                    {errors.fName && touched.fName && errors.fName}
                </div>
                <div className='m-4'>
                    <input
                    className='w-full border-b-2 p-2'
                    placeholder='Enter your last name'
                        type="text"
                        name="text"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lName}
                    />
                    {errors.lName && touched.lName && errors.lName}
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
                <button className='border-yellow-800  items-center border-2 p-2 m-2 mr-2 text-center text-[20px]  text-slate-300 hover:bg-yellow-800'>Sign Up</button>
                </form>
            )}
        </Formik>
        </div>
    </div>
  )
}
