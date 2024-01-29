"use client";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";

export const Navbar = () => {
    const [showMe, setShowMe] = useState(false);
    const toggle = () => {
        setShowMe(!showMe);
    }

    const [isLogin, setIsLogin] = useState(true);
    const toggleLogin = () => {
        setIsLogin(!isLogin);
    }
    return (
        < div className="flex flex-col w-full">
            <div className="navbar flex bg-transparent justify-between items-center w-full pt-5 px-10 sm:py-6  " >
                <div className="md:hidden">
                    <button style={{'display':showMe?'none':'block'}} title='Toggle Menu' onClick={toggle}>
                        <GiHamburgerMenu size={25} />
                    </button>
                    <button style={{'display':showMe?'block':'none'}} title='Toggle Menu' onClick={toggle}>
                        <CgClose size={25} />
                    </button>
                </div>
                <div className="logo hidden md:block text-xl sm:text-3xl text-yellow-300 font-bold select-none">
                    Ace-Enterprises
                </div>
                <div className="hidden md:flex text-lg w-[30%] justify-between bg-gray-900 p-2 rounded-3xl text-white">
                    <Link href="/" className="  hover:bg-gray-400 font-semibold px-2 rounded-3xl focus:opacity-70">Home</Link>
                    <Link href="/products" className="  hover:bg-gray-400 font-semibold px-2 rounded-3xl focus:opacity-70">Projects</Link>
                    <Link href="/about" className="  hover:bg-gray-400 px-2 font-semibold rounded-3xl focus:opacity-70">About</Link>
                    <Link href="#contact" className="  hover:bg-gray-400 px-2 font-semibold rounded-3xl focus:opacity-70">Contact</Link>
                    <Link href="/faq" className="  hover:bg-gray-400 px-2  font-semibold rounded-3xl focus:opacity-70">FAQ</Link>
                </div>
                <div>
                    <Link href="/signup" className="flex  items-center border-2 border-black  hover:bg-gray-900 hover:text-white p-2 rounded-3xl sm:text-lg shadow-lg " onClick={toggleLogin}>
                        <span style={{display:isLogin?"block":"none"}}>Login / Register</span>
                        <span style={{display:isLogin?"none":"block"}}>SignOut</span>
                    </Link>

                </div>
                
            </div>
            <div style={{display:showMe?"block":"none",
            }} className="bg-gray-900 text-white w-max  rounded-xl p-10 z-10 fixed top-20 left-1" >
                <div className='flex flex-col     gap-6 text-lg font-semibold'>
                    <div className='w-max  text-xl  text-yellow-300'>
                        Ace-Enterprises
                    </div>
                    <Link href='/' className=' border-b-2 border-white  w-max hover:text-gray-300'>Home</Link>
                    <Link href='/products' className=' border-b-2 border-white  w-max hover:text-gray-300'>Projects</Link>
                    <Link href='/about' className='border-b-2 border-white  w-max hover:text-gray-300'>About</Link>
                    <Link href='/contact' className='border-b-2 border-white  w-max hover:text-gray-300'>Contact</Link>
                    <Link href='/faq' className='border-b-2 border-white  w-max hover:text-gray-300'>FAQ</Link>
                </div>
            </div>   
        </div>
    );
}