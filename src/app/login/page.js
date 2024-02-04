'use client';
import FormInput from "@/components/formInput";
import { FcGoogle } from 'react-icons/fc';
import { login, google } from '@/utils/firebaseMethods';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../utils/firebase';
import Link from 'next/link'
import { Navbar } from '@/components';
import { IoIosClose } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: "",
    });
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


    const inputs = [

        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            errorMessage: "It should be a valid email address!",
            label: "Email",
            required: true,
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            required: true,
        },

    ];

    const handleGoogle = async () => {
        try {
            await google()
            router.push("/home")
        }
        catch (e) {
            console.log(e)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')

        try {
            const res2 = await login(values)
            console.log(res2)

        } catch (error) {
            setError(error)

        }

    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <>
            {show ? "" : (
                <div className="w-full ">
                    <div className="w-full h-screen  bg-gray-500">
                        <div className="backdrop-blur-sm h-full">
                            <Navbar />

                            <div className="flex flex-col items-center justify-center px-2 py-4 mt-5  mx-auto lg:py-0 w-fll">
                                <div className="mb-4">
                                    {error === '' ? '' : (
                                        <div id="toast-default" className="flex items-center  max-w-xs px-4 py-3 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
                                            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
                                                <MdErrorOutline />
                                            </div>
                                            <div className="mx-3 text-md font-bold text-red-400">{error}</div>
                                            <button onClick={() => setError('')} type="button" className="bg-red-300 -mx-1.5 -my-1.5   hover:text-red-400 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-red-400 inline-flex items-center justify-center h-8 w-8 " data-dismiss-target="#toast-default" aria-label="Close">
                                                <span className="sr-only">Close</span>
                                                <IoIosClose size={25} color='white' />
                                            </button>
                                        </div>
                                    )}
                                </div>
                                <div className="w-full m-10 rounded-lg shadow bg-gray-900 md:mt-0 sm:max-w-md xl:p-0">
                                    <div className="p-6  sm:px-8">

                                        <h1 className="text-center text-2xl font-bold leading-tight tracking-tight text-yellow-300 md:text-3xl ">
                                            Login
                                        </h1>

                                        <form onSubmit={handleSubmit}>

                                            {inputs.map((input) => (
                                                <FormInput
                                                    key={input.id}
                                                    {...input}
                                                    value={values[input.name]}
                                                    onChange={onChange}
                                                />
                                            ))}


                                            <button
                                                type="submit"
                                                className="w-full mt-5 text-slate-700 bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800"
                                            >
                                                Login
                                            </button>

                                            <div className="inline-flex items-center justify-center w-full ">
                                                <hr className="w-full h-0.5 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                                                <div className="px-2 text-xs  text-white ">
                                                    OR
                                                </div>
                                                <hr className="w-full h-0.5 my-4 bg-gray-200 border-0 rounded dark:bg-gray-700" />
                                            </div>

                                        </form>
                                        <button onClick={handleGoogle} className=" w-full text-sm  px-5 py-2.5 bg-white border flex justify-center gap-2 border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 hover:border-slate-400 dark:hover:border-slate-500 hover:text-slate-900 dark:hover:text-slate-300 hover:shadow transition duration-150">
                                            <FcGoogle size={20} />
                                            <p>Continue with Google</p>
                                        </button>



                                        <div >
                                            <p className="text-center mt-3 text-sm font-light text-gray-500 dark:text-gray-400">
                                                Dont&apos;t have an account?{' '}
                                                <Link href="/signup" className="font-medium text-yellow-300 hover:underline ">
                                                    Sign up
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

export default Login;