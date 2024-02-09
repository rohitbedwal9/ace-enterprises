'use client';
import FormInput from "@/components/formInput";
import { FcGoogle } from 'react-icons/fc';
import { register, google } from '@/utils/firebaseMethods';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../utils/firebase';
import Link from 'next/link'
import { Navbar } from '@/components';
import { IoIosClose } from "react-icons/io";
import { MdErrorOutline } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';


const inputs = [
    {
        id: 1,
        name: "username",
        type: "text",
        placeholder: "Username",
        errorMessage: "Username should be 3-16 characters and shouldn't include any special character!",
        label: "Username",
        disabled: true,
        pattern: `^[A-Za-z0-9]{3,16}$`,
        required: true,
    },
    {
        id: 2,
        name: "email",
        type: "email",
        disabled: true,
        placeholder: "Email",
        errorMessage: "It should be a valid email address!",
        label: "Email",
        required: true,
    },
    {
        id: 3,
        name: "password",
        type: "password",
        placeholder: "Password",
        disabled: false,
        errorMessage:
            "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
        label: "Password",
        pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
        required: true,
    },
    {
        id: 4,
        name: "number",
        type: "tel",
        disabled: false,
        placeholder: "Phone Number",
        errorMessage: "Not a valid Phone Number",
        label: "Phone Number",
        pattern: `[0-9]{10}`,
        required: true,
    },
];

const SignUp = () => {
    const [values, setValues] = useState({
        username: "",
        email: "",
        password: "",
        number: "",
    });
    const [show, setShow] = useState(true)
    const [loading, setLoading] = useState(false)
    const router = useRouter()
    const notify = (text) => toast.error(text)

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if (currentUser && currentUser.emailVerified) {
                console.log(currentUser)
                setShow(false)
            }
            else {
                setShow(false)
            }

        });
    }, [auth])




    const handleGoogle = async () => {
        try {
            await google()

            setValues({ ...values, username: auth.currentUser.displayName, email: auth.currentUser.email });
        }
        catch (e) {
            console.log(e)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        console.log("submit")
        try {
            const res2 = await register(values)
            console.log(res2)

            if (res2 === 'success') {
                toast.success("You account are successfully created")
                if (auth.currentUser.providerData[0].providerId === "password")
                    router.push(`/verifyemail`)
                else {
                    router.push(`/home`)
                }
            }

        } catch (error) {
            notify(error)
        }
        setLoading(false)
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <>
            {show ? "" : (
                <div className="w-full  md:h-screen  sm:h-full  bg-gray-500 ">
                    <ToastContainer
                        position="top-center"
                    />
                    <div className="w-full   ">
                        <div className="backdrop-blur-sm">
                            <Navbar />

                            <div className="flex flex-col items-center justify-center px-2 py-4 mt-5  mx-auto lg:py-0 w-fll">

                                <div className="w-full m-10 rounded-lg shadow bg-gray-900 md:mt-0 sm:max-w-md xl:p-0">
                                    <div className="p-6  sm:px-8">

                                        <h1 className="text-center text-2xl font-bold leading-tight tracking-tight text-yellow-300 md:text-3xl ">
                                            Create an account
                                        </h1>


                                        <form onSubmit={handleSubmit}>

                                            {inputs.map((input) => (
                                                <FormInput
                                                    key={input.id}
                                                    {...input}
                                                    value={values[input.name]}
                                                    onChange={onChange}
                                                    google={auth.currentUser && auth.currentUser.providerData[0].providerId !== "password"}
                                                />
                                            ))}

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
                                                className={`w-full text-slate-700  ${loading ? 'bg-yellow-200 ' : 'bg-yellow-400 hover:bg-yellow-500 '} focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-primary-800`}
                                                disabled={loading ? true : false}
                                            >
                                                {loading ? "Creating Account..." : "Create an account"}
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
                                            <p className="text-gray-500">Continue with Google</p>
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