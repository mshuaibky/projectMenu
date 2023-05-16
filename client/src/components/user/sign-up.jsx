import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import toast, { Toaster } from 'react-hot-toast'
import { signUpDetails } from '../../helpers/user/user-helper'


const validate = values => {
    const errors = {}

    //username
    if (!values.name) {
        errors.name = toast.error('Username Required')
    } else if (values.name.length < 4) {
        errors.name = toast.error('username should contain atleast Four characters')
    }


    //email
    else if (!values.email) {
        errors.email = toast.error("email is required")
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = toast.error("invalid email address")
    }

    //password
    else if (!values.password) {
        errors.password = toast.error('password is required');
    } else if (values.password.length < 6) {
        errors.password = toast.error("password should contain atleast Six characters")
    } else if (values.password.includes(' ')) {
        errors.password = toast.error('password is required');
    }


    return errors;
}

function SignUp() {
    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: ''
        },
        validate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {

            let signUp = signUpDetails(values)
            toast.promise(signUp, {
                loading: 'creating...',
                success: <b>signUp completed</b>,
                error: <b>signUp failed</b>
            })
            signUp.then((data) => {
                if (data) {
                    navigate('/admin/login')
                }
            })
        }
    })
    return (
        <div>
        
            <div className="flex items-center justify-center">
                <Toaster position='top-center' reverseOrder={false}></Toaster>

                <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
                        <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl">
                            Sign Up
                        </h2>
                        <p className="mt-2 text-base text-gray-600 dark:text-gray-300">
                            Already have an account?{' '}
                            <Link to={'/user/login'}> <a
                                href="#"
                                title=""
                                className="font-medium text-indigo-600 transition-all duration-200 hover:text-indigo-700 hover:underline focus:text-indigo-700"
                            >
                                Sign In
                            </a></Link>
                        </p>

                        <form onSubmit={formik.handleSubmit} className="mt-8">
                            <div className="space-y-5">
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="text-base font-medium text-gray-900 dark:text-gray-200"
                                    >
                                        {' '}
                                        Full Name{' '}
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            name='name'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name}
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                            type="text"
                                            placeholder="Enter You Full Name"
                                            id="name"
                                        ></input>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="email"
                                        className="text-base font-medium text-gray-900 dark:text-gray-200"
                                    >
                                        {' '}
                                        Email address{' '}
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            name='email'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                            type="email"
                                            placeholder="Enter Your Email"
                                            id="email"
                                        ></input>
                                    </div>
                                </div>

                                <div>
                                    <label
                                        htmlFor="password"
                                        className="text-base font-medium text-gray-900 dark:text-gray-200"
                                    >
                                        {' '}
                                        Password{' '}
                                    </label>
                                    <div className="mt-2.5">
                                        <input
                                            name='password'
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.password}
                                            className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent py-2 px-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                                            type="password"
                                            placeholder="Enter Your Password"
                                            id="password"
                                        ></input>
                                    </div>
                                </div>

                                <div >
                                    <button
                                        type="submit"
                                        className="inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3.5 py-2.5 text-base font-semibold leading-7 text-white hover:bg-indigo-500"
                                    >
                                        Get started
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={1.5}
                                            stroke="currentColor"
                                            className="ml-2 h-4 w-4"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignUp
