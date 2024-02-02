"use client"
import { MdEmail } from "react-icons/md";
import { EmailVerify, register, google, logout } from '@/utils/firebaseMethods';
import React, { useEffect, useState } from 'react';


const Verify = () => {

    const [error, setError] = useState('')
    const [msg, setMsg] = useState('')
    const [email, setEmail] = useState('')


    useEffect(() => {
        setEmail(localStorage.getItem("mail") ? JSON.parse(localStorage.getItem("mail")) : 'wrongEmail')
    }, [])

    async function sendEmail() {

        try {
           const isverify= await EmailVerify()
           console.log(isverify) // too many request error 

        } catch (error) {
            console.log(error)

        }

    }


    return (
        <>
            {!email ? "Something wrong" : (
                <div className="w-full">
                    <div className="w-full h-screen md:h-screen bg-[url('/images/construction-background2.jpeg')] bg-no-repeat bg-cover">
                        <div className="backdrop-blur-sm h-full">
                            <div className="flex flex-col items-center justify-center px-2 py-4 mx-auto md:h-screen lg:py-0 w-fll">
                                <div className="w-full  rounded-lg shadow bg-gray-900 md:mt-0 sm:max-w-md xl:p-0">
                                    <div className=" text-center p-6 space-y-4 md:space-y-6 sm:p-8">

                                        <div className=" m-1  text-yellow-600 border border-yellow-200 bg-yellow-200  focus:ring-4 focus:outline-none focus:ring-yellow-200 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center dark:border-yellow-600 dark:text-yellow-600  dark:focus:ring-yellow-200 ">
                                            <MdEmail size={25} />
                                            <span className="sr-only">email</span>

                                        </div>

                                        <h1 className="text-center text-2xl font-bold leading-tight tracking-tight text-yellow-300 md:text-3xl ">
                                            Please verify your email
                                        </h1>
                                        <div className="text-white text-md">
                                            <p>You&apos;re almost there! We sent to email to</p>
                                            <p className="text-yellow-200">{email}</p>
                                            <div className="my-3">
                                                <p>Just click on the link in that email to complete your signup. If you don&apos;t see it, you may need to <span className="font-bold text-yellow-200">check you spam</span> folder.</p>
                                            </div>
                                            <div className="my-3">
                                                <p>Still can&apos;t find the email? No problem</p>
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800"
                                            onClick={sendEmail}
                                        >
                                            Resend Verification Email
                                        </button>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Verify