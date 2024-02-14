"use client"
import { MdEmail } from "react-icons/md";
import { EmailVerify, register, google, logout } from '@/utils/firebaseMethods';
import React, { useEffect, useState } from 'react';
import Link from 'next/link'
import { auth } from '../../utils/firebase';
import { onAuthStateChanged } from "firebase/auth";

const Verify = () => {

    const [error, setError] = useState('')
    const [msg, setMsg] = useState('')
    const [email, setEmail] = useState('')


    const [timer, setTimer] = useState(30);


    useEffect(() => {
        var timerID = setInterval(() => tick(), 1000);

        return function cleanup() {
            clearInterval(timerID);
        };
    });

    function tick() {
        setTimer(timer - 1);
    }

    const handleKeypress = (e) => {
        //it triggers by pressing the enter key
        if (e.keyCode === 13) {
            handleSubmit(e);
        }
    };


    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser && !currentUser.emailVerified) {
               
                setEmail(currentUser.email)
            }
            else {
                setShow(false)
            }

        });
    }, [auth])


    async function sendEmail() {
        setTimer(30)
        try {
            const isverify = await EmailVerify()
            console.log(isverify) // too many request error 

        } catch (error) {
            console.log(error)

        }

    }





    return (
        <>
            {!email ? "Something wrong" : (
                <div className="w-full">
                    <div className="w-full h-screen md:h-screen bg-gray-500">
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
                                            className={`w-full text-black ${timer <= 0 ? 'hover:bg-yellow-500   bg-yellow-400' : ' bg-yellow-200'} focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-yellow-800`}
                                            onClick={sendEmail}
                                            disabled={timer <= 0 ? false : true}
                                        >
                                            {timer > 0 ? ' Resend(' + timer + ')' : 'Resend'}
                                        </button>
                                        <div className="mt-5">
                                            <Link
                                                href='/login'
                                                className="w-full text-black bg-green-300 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-green-800"

                                            >
                                                Please login after verifification
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            )}
        </>
    );
};

export default Verify