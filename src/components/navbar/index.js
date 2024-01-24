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
        <>
            <div style={{display:showMe?"block":"none",
            }} className="h-full w-full fixed top-0  z-10  text-white bg-gradient-to-r from-[#2f8396] to-[#2f8396]" >
                <div className='flex flex-col h-max pl-[2.5rem] pr-22 pt-6 gap-6 text-lg font-semibold'>
                    <div >
                        <button className='md:hidden' title='Toggle Menu' onClick={toggle}>
                        <CgClose size={25}/>
                        </button>
                    </div>
                    <div className='w-max pb-2  text-xl  p-2  bg-transparent shadow-sm border-y-2  text-yellow-300'>
                        Ace-Enterprises
                    </div>
                    <Link href='/' className=' border-b-2 border-white  w-max hover:text-gray-300'>Home</Link>
                    <Link href='/products' className=' border-b-2 border-white  w-max hover:text-gray-300'>Projects</Link>
                    <Link href='/about' className='border-b-2 border-white  w-max hover:text-gray-300'>About</Link>
                    <Link href='/contact' className='border-b-2 border-white  w-max hover:text-gray-300'>Contact</Link>
                    <Link href='/faq' className='border-b-2 border-white  w-max hover:text-gray-300'>FAQ</Link>
                </div>
            </div>
            <div style={{
                display: showMe ? "none" : "flex"}} className="navbar flex bg-transparent justify-between items-center w-full pt-5 px-10 sm:py-6  " >
                <div className="md:hidden">
                    <button title='Toggle Menu' onClick={toggle}>
                        <GiHamburgerMenu size={25} className="text-white"/>
                    </button>
                </div>
                <div className="logo hidden md:block text-xl sm:text-3xl  font-bold select-none text-white ">
                    Ace-Enterprises
                </div>
                <div className="hidden md:flex text-lg w-[30%] justify-between bg-black p-2 rounded-3xl text-white">
                    <Link href="/" className="  hover:bg-gray-700 font-semibold px-2 rounded-3xl focus:opacity-70">Home</Link>
                    <Link href="/products" className="  hover:bg-gray-700 font-semibold px-2 rounded-3xl focus:opacity-70">Projects</Link>
                    <Link href="/about" className="  hover:bg-gray-700 px-2 font-semibold rounded-3xl focus:opacity-70">About</Link>
                    <Link href="/contact" className="  hover:bg-gray-700 px-2 font-semibold rounded-3xl focus:opacity-70">Contact</Link>
                    <Link href="/faq" className="  hover:bg-gray-700 px-2  font-semibold rounded-3xl focus:opacity-70">FAQ</Link>
                </div>
                <div>
                    <Link href="/signup" className="flex  items-center bg-yellow-300 hover:opacity-80 p-2 rounded-3xl sm:text-lg shadow-lg " onClick={toggleLogin}>
                        <span style={{display:isLogin?"block":"none"}}>Login/Register</span>
                        <span style={{display:isLogin?"none":"block"}}>SignOut</span>
                    </Link>

                </div>
            </div>
            
        </>
    );
}