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
    return (
        <>
            <div style={{display:showMe?"block":"none",
            }}className="h-screen w-full dark:bg-gray-900 bg-gray" >
                <div className='flex flex-col h-max py-10 pl-[4rem] pr-20 pt-6 gap-6 text-lg font-semibold'>
                    <div >
                        <button className='sm:hidden' title='Toggle Menu' onClick={toggle}>
                        <CgClose size={25}/>
                        </button>
                    </div>
                    <div className='w-max pb-2 border-b-2  text-xl  p-2 rounded-lg  bg-white text-black'>
                        Ace-Enterprises
                    </div>
                    <Link href='/' className=' border-b-2 border-black dark:border-white w-max dark:hover:text-gray-300 hover:text-gray-700'>Home</Link>
                    <Link href='/products' className='border-b-2 border-black dark:border-white w-max dark:hover:text-gray-300 hover:text-gray-700'>Projects</Link>
                    <Link href='/about' className='border-b-2 border-black dark:border-white w-max dark:hover:text-gray-300 hover:text-gray-700'>About</Link>
                    <Link href='/contact' className='border-b-2 border-black dark:border-white w-max dark:hover:text-gray-300 hover:text-gray-700'>Contact</Link>
                    <Link href='/faq' className='border-b-2 border-black dark:border-white w-max dark:hover:text-gray-300 hover:text-gray-700 '>FAQ</Link>
                </div>
            </div>
            <div style={{
                display: showMe ? "none" : "flex"}} className="navbar flex bg-transparent justify-around sm:justify-between items-center w-full pt-5 sm:px-10 sm:py-6  " >
                <div className="sm:hidden">
                    <button title='Toggle Menu' onClick={toggle}>
                        <GiHamburgerMenu size={25}/>
                    </button>
                </div>
                <div className="logo hidden sm:block text-xl sm:text-2xl font-bold select-none ">
                    Ace-Enterprises
                </div>
                <div className="hidden sm:flex text-lg w-[30%] justify-between">
                    <Link href="/" className="bg-transparent hover:bg-white hover:dark:bg-gray-600 px-2 rounded-md focus:opacity-70">Home</Link>
                    <Link href="/products" className="bg-transparent hover:bg-white hover:dark:bg-gray-600 px-2 rounded-md focus:opacity-70">Projects</Link>
                    <Link href="/about" className="bg-transparent hover:bg-white hover:dark:bg-gray-600 px-2 rounded-md focus:opacity-70">About</Link>
                    <Link href="/contact" className="bg-transparent hover:bg-white hover:dark:bg-gray-600 px-2 rounded-md focus:opacity-70">Contact</Link>
                    <Link href="/faq" className="bg-transparent hover:bg-white hover:dark:bg-gray-600 px-2 rounded-md focus:opacity-70">FAQ</Link>
                </div>
                <div>
                    <Link href="/signup" className="flex gap-2 items-center bg-white dark:text-black hover:opacity-80 p-2 rounded-lg text-lg shadow-lg ">
                        <span>Get Started</span>
                    </Link>  
                </div>
            </div>
            
        </>
    );
}