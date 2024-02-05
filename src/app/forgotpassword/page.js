'use client';

import { useState } from 'react';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../utils/firebase';
import Link from 'next/link'
import { IoIosClose } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [show, setShow] = useState(false)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [msg, setmsg] = useState('')

    const inputs = [

        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Enter your email address",
            errorMessage: "It should be a valid email address!",
            label: "Enter your email address and we will send you a ink to reset your password",
            required: true,
        },

    ];


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        setLoading(true)


        try {
            const res2 = await sendPasswordResetEmail(auth, email)
            setmsg("Email send successfully")
            console.log(res2)

        } catch (error) {

            if (error.message === "Firebase: Error (auth/invalid-email).") {
                setError("Invalid email.")
            }

        }
        setLoading(false)
    };

    return (
        <>
            {show ? "" : (

                <div className="w-full h-screen bg-gray-500">

                    <div className="w-full h-screen flex  items-center justify-center px-2 py-4 lg:py-0 ">

                        <div className="w-full rounded-lg shadow bg-gray-900 md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6  sm:px-8">

                                <h1 className="mb-5 text-center text-2xl font-bold leading-tight tracking-tight text-yellow-300 md:text-3xl ">
                                    Forgot Password
                                </h1>

                                <form onSubmit={handleSubmit} >

                                    <div >
                                        <label className="block mt-4 mb-2 text-white text-sm font-medium text-gray-900 dark:text-white">
                                            Enter your email address and we will send you a ink to reset your password
                                        </label>
                                        <input
                                            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            value={email}
                                            type='email'
                                            placeholder='Enter your email address'
                                            onChange={(e) => setEmail(e.target.value)}
                                        />

                                    </div>


                                    <button
                                        type="submit"
                                        className="w-full mt-5 text-slate-700 bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800"
                                        disabled={loading ? true : false}
                                    >
                                        {loading ? "Sending Email" : "Send password reset email"}

                                    </button>

                                </form>
                                <div className="mt-4 flex justify-center text-yellow-400 hover:text-yellow-500 text-sm">
                                    <Link href="login">back to login page</Link>
                                </div>
                            </div>
                            <div className="mb-4 flex justify-center">
                                {error === '' ? '' : (
                                    <div id="toast-default" className="flex items-center  max-w-xs px-4 py-3  bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                                        <div className="flex items-center  max-w-xs px-4 py-3 text-white bg-red-400  rounded-lg shadow dark:text-white dark:bg-red-400">
                                            <MdErrorOutline />
                                        </div>
                                        <div className="mx-3 text-sm font-bold text-red-400">{error}</div>
                                        <button onClick={() => setError('')} type="button" className="bg-red-400 -mx-1.5 -my-1.5   hover:bg-red-500 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-red-400 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#toast-default" aria-label="Close">
                                            <span className="sr-only">Close</span>
                                            <IoIosClose size={25} color='white' />
                                        </button>
                                    </div>
                                )}
                                {msg === '' ? '' : (
                                    <div id="toast-default" className="flex items-center  max-w-xs px-4 py-3  bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                                        <div className="flex items-center  max-w-xs px-4 py-3 text-white bg-green-400  rounded-lg shadow dark:text-white dark:bg-red-400">
                                            <MdErrorOutline />
                                        </div>
                                        <div className="mx-3 text-sm font-bold text-green-400">{msg}</div>
                                        <button onClick={() => setmsg('')} type="button" className="bg-green-400 -mx-1.5 -my-1.5   hover:bg-green-500 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-red-400 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#toast-default" aria-label="Close">
                                            <span className="sr-only">Close</span>
                                            <IoIosClose size={25} color='white' />
                                        </button>
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>

                </div>
            )}
        </>
    );
}