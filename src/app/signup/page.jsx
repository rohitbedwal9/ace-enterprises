"use client"
import { FcGoogle } from 'react-icons/fc';
import { EmailVerify, register, google, logout } from '@/utils/firebaseMethods';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../utils/firebase';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [error, setError] = useState('')
    const [msg, setMsg] = useState('')
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
                setMsg('Email verification send successfully')
            }
            // router.push("/home")
        } catch (error) {
            setError(error)

        }
        // const res = await EmailVerify()


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
                <section className="bg-white">
                    <div className="flex flex-col items-center justify-center px-2 py-4 mx-auto md:h-screen lg:py-0 w-fll">
                        <div className="w-full  rounded-lg shadow bg-gray-900 md:mt-0 sm:max-w-md xl:p-0">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                                <h1 className="text-center text-2xl font-bold leading-tight tracking-tight text-yellow-300 md:text-3xl ">
                                    Create an account
                                </h1>
                                <p className='text-center text-red-400'>{error ? 'Error: ' + error : ''}</p>
                                <p className='text-center text-green-400'>{msg ? msg : ''}</p>

                                <form onSubmit={(e) => Register(e)} className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
                                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
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

                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input
                                                id="terms"
                                                aria-describedby="terms"
                                                type="checkbox"
                                                className=" accent-yellow-300 w-4 h-4 border border-yellow-400 rounded bg-white"
                                                required
                                            />
                                        </div>
                                        <div className="ml-3 text-sm">
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
                                        className="w-full text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800"
                                    >
                                        Create an account
                                    </button>
                                    <button
                                        onClick={handleGoogle}
                                        className="w-full text-black  bg-white focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm py-2.5 text-center  flex gap-2 justify-center items-center"
                                    >
                                        SignUp With <FcGoogle size={20} />
                                    </button>

                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Already have an account?{' '}
                                        <a href="/login" className="font-medium text-yellow-300 hover:underline ">
                                            Login
                                        </a>

                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default SignUp;