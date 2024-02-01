"use client";
import { login } from '@/utils/firebaseMethods';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../utils/firebase';
import { EmailVerify } from '@/utils/firebaseMethods';
import Link from 'next/link'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [show, setShow] = useState(true)
    const [error, setError] = useState('')
    const [msg, setMsg] = useState('')
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

    const handleEmailVerify = () => {
        setMsg('Email verification send successfully')
        setError('')
        EmailVerify()
    }

    async function signIn(e) {
        e.preventDefault();
        try {
            const res = await login(email, password);
            if (!auth.currentUser.emailVerified) {
                setError("Please verify the email ")
            }
        } catch (error) {
            console.log(error)
            setError(error)
        }

    }

    return (
        <>
            {show ? "" : (
                <div className="w-full">
                    <div className="w-full h-screen md:h-screen bg-[url('/images/construction-background2.jpeg')] bg-no-repeat bg-cover">
                        <div className="backdrop-blur-sm h-full">
                            <div className="flex flex-col items-center justify-center px-4 md:px-6 py-4 md:py-8 md:mx-auto md:h-screen lg:py-0">
                                <div className="w-full bg-gray-900 rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                        <h1 className="text-center text-2xl font-bold leading-tight tracking-tight text-white md:text-3xl ">
                                            Login
                                        </h1>
                                        <p className='text-center text-green-400'>{msg ? msg : ''}</p>

                                        <p className='text-center text-red-400'>{error ? 'Error: ' + error : ''}
                                            {error === 'Please verify the email ' && !auth.currentUser.emailVerified ? (
                                                <span className='cursor-pointer text-center text-green-400 underline' onClick={handleEmailVerify}>verify</span>
                                            ) : ''}
                                        </p>
                                        <form className="space-y-4 md:space-y-6" onSubmit={(e) => signIn(e)} action="#">
                                            <div>
                                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                                                    Your email
                                                </label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    className=" bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                                    placeholder="name@company.com"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <div className="flex justify-between items-center">
                                                    <label className="block text-sm font-medium leading-6 text-white"

                                                    >Password</label>
                                                    <Link href="/forgotpassword" className="block text-sm hover:underline text-yellow-300 hover:text-yellow-400 font-medium leading-6 ">forgot password</Link>
                                                </div>


                                                <input
                                                    type="password"
                                                    name="password"
                                                    id="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    placeholder="••••••••"
                                                    className="mt-2 bg-gray-700 border border-gray-300 text-white sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                                                    required
                                                />
                                            </div>


                                            <button
                                                type="submit"
                                                className="w-full text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                            >
                                                Login
                                            </button>
                                            <p className="text-sm text-center font-light text-gray-400 ">
                                                Already have an account?{' '}
                                                <Link href="/signup" className="font-medium text-yellow-300 hover:underline ">
                                                    Sign up
                                                </Link>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}