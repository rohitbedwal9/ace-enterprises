"use client"
import { FcGoogle } from 'react-icons/fc';
import { EmailVerify, register, google, logout } from '@/utils/firebaseMethods';
import React, { useEffect, useState } from 'react';
import Router, { useRouter } from 'next/navigation';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../utils/firebase';
import Link from 'next/link'
import { Navbar } from '@/components';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [error, setError] = useState('')
    const [show, setShow] = useState(true)
    const router = useRouter()

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser && currentUser.emailVerified) {
                console.log(currentUser)
                router.push("/home")
            }
            else {
                setShow(false)
            }

        });
    }, [auth])

    async function Register(e) {
        e.preventDefault()
        console.log(email, password, name)

        try {
            const res2 = await register(email, password, name, number)
            console.log(res2)
            setError('')
            if (res2 === 'success') {
                // logout()
                localStorage.setItem('mail', JSON.stringify(email));
                router.push(`/verifyemail`)


            }
            else {
                setError('')
            }
            // router.push("/home")
        } catch (error) {
            setError(error)

        }
        // const res = await EmailVerify()
        if (error) {
            setEmail('')
            setpassword('')
            setName('')
            setNumber('')
        }

    }
    const handleGoogle = async () => {
        try {
            await google()
            router.push("/home")
        }
        catch (e) {
            console.log(e)
        }

    }

    return (
        <>
            {show ? "" : (
                <div className="w-full">
                    <div className="w-full h-full md:h-screen bg-[url('/images/construction-background2.jpeg')] bg-no-repeat bg-cover">
                        <div className="backdrop-blur-sm h-full">
                            <Navbar />
                            <div className="flex flex-col items-center justify-center px-2 py-4 mt-5  mx-auto lg:py-0 w-fll">
                                <div className="w-full  rounded-lg shadow bg-gray-900 md:mt-0 sm:max-w-md xl:p-0">
                                    <div className="p-6  sm:px-8">

                                        <h1 className="text-center text-2xl font-bold leading-tight tracking-tight text-yellow-300 md:text-3xl ">
                                            Create an account
                                        </h1>
                                        <p className='text-center text-red-400 '>{error ? 'Error: ' + error : ''}</p>
                                        

                                        <form onSubmit={(e) => Register(e)} className="" action="#">
                                            <div>
                                                <label htmlFor="name" className="block mt-4 mb-2 text-white text-sm font-medium text-gray-900 dark:text-white">
                                                    Full Name
                                                </label>
                                                <input
                                                    type="name"
                                                    name="name"
                                                    id="name"
                                                    value={name}
                                                    onChange={(e) => setName(e.target.value)}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="full name"
                                                    required
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block mt-4 mb-2 text-white text-sm font-medium text-gray-900 dark:text-white">
                                                    Your email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="name@company.com"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="name" className="block mt-4 mb-2 text-white text-sm font-medium text-gray-900 dark:text-white">
                                                    Phone Number
                                                </label>
                                                <input
                                                    type="tel"
                                                    name="number"
                                                    pattern="[0-9]{10}"
                                                    id="number"
                                                    value={number}
                                                    onChange={(e) => setNumber(e.target.value)}
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    placeholder="10 digit phone number"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="password" className="block mt-4 mb-2 text-white text-sm font-medium text-gray-900 dark:text-white">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    value={password}
                                                    onChange={(e) => setpassword(e.target.value)}
                                                    placeholder="••••••••"
                                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                    required
                                                />
                                            </div>

                                            <div className="flex items-start ">
                                                <div className="flex items-center h-5 my-3">
                                                    <input
                                                        id="terms"
                                                        aria-describedby="terms"
                                                        type="checkbox"
                                                        className=" accent-yellow-300 w-4 h-4 border border-yellow-400 rounded bg-white"
                                                        required
                                                    />
                                                </div>
                                                <div className="ml-3 my-3 text-sm">
                                                    <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">
                                                        I accept the{' '}
                                                        <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                                            Terms and Conditions
                                                        </a>
                                                    </label>
                                                </div>
                                            </div>
                                            <button
                                                type="submit"
                                                className="w-full text-slate-700 bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800"
                                            >
                                                Create an account
                                            </button>

                                            <div class="inline-flex items-center justify-center w-full ">
                                                <hr class="w-full h-0.5 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
                                                <div class="px-2 text-xs  text-white ">
                                                        OR
                                                    </div>
                                                <hr class="w-full h-0.5 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                                            </div>

                                           
                                        </form>
                                        <button onClick={handleGoogle} className=" w-full text-sm  px-5 py-2.5 bg-white border flex justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                                            <FcGoogle size={20} />
                                            <span>Continue with Google</span>
                                        </button>



                                        <div >
                                            <p className="text-center mt-3 text-sm font-light text-gray-500 dark:text-gray-400">
                                                Already have an account?{' '}
                                                <Link href="/login" className="font-medium text-yellow-300 hover:underline ">
                                                    Login
                                                </Link>
                                            </p>
                                        </div>
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

export default SignUp;