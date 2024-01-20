"use client";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
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
            <div style={{
                display: showMe ? "block" : "none",
                position: "fixed",
                top: "0",
                left: "0",
                width: "100%",
                height: "100%",
                backgroundColor: "white",
            
            }}>
                <div className='flex flex-col h-full  w-[100%] pl-12 pr-20 mt-6 gap-6 text-lg absolute top-0 bg-red z-10 font-semibold rounded-xl shadow-xl'>
                <div ><button className='sm:hidden' title='Toggle Menu' onClick={toggle}>
                <CgClose size={25}/>
                    </button>
                    </div>
                    <div className=' w-max font-bold pb-2 border-b-2 border-black text-xl bg-white p-2 rounded-lg text-black '>
                       Amante-Tassels
                    </div>
                    <a href='/' className=' border-b-2 border-gray-600 w-max'>Home</a>
                    <a href='/products' className='border-b-2 border-black w-max'>Product</a>
                    <a href='/about' className='border-b-2 border-black w-max'>About</a>
                    <a href='/contact' className='border-b-2 border-black w-max'>Contact</a>
                    <a href='/faq' className='border-b-2 border-black w-max'>FAQ</a>
                </div>
            </div>
            <div style={{
                display: showMe ? "none" : "flex"}} className="navbar flex bg-white justify-around sm:justify-between  items-center w-full pt-5 sm:px-10 sm:py-6 sticky top-0 " >
                <div className="sm:hidden">
                    <button title='Toggle Menu' onClick={toggle}>
                        <GiHamburgerMenu size={25}/>
                    </button>
                </div>
                <div className="logo hidden sm:block text-xl sm:text-2xl font-bold select-none">
                    Amante-Tassels
                </div>
                <div className="hidden sm:flex text-lg w-[30%] justify-between">
                    <Link href="/" className="border-b-2 border-transparent hover:border-b-black hover:dark:border-b-white hover:font-medium ">Home</Link>
                    <Link href="/products" className="border-b-2 border-transparent hover:border-b-black hover:dark:border-b-white  hover:font-medium">Products</Link>
                    <Link href="/about" className="border-b-2 border-transparent hover:border-b-black hover:dark:border-b-white  hover:font-medium">About</Link>
                    <Link href="/contact" className="border-b-2 border-transparent hover:border-b-black  hover:dark:border-b-white  hover:font-medium">Contact</Link>
                    <Link href="/faq" className="border-b-2 border-transparent hover:border-b-black  hover:dark:border-b-white   hover:font-medium">FAQ</Link>
                </div>
                <div className="flex mb-3 items-center gap-2">
                    <Link href="/login" className="flex items-center sm:text-xl  gap-2 p-2 rounded-3xl bg-white dark:text-black dark:border-gray-700 shadow hover:opacity-80 ">
                        <span><CgProfile /></span>
                        <span>Login</span>
                    </Link>
                    <Link href="/cart" className="flex  items-center sm:text-xl gap-2 p-2 rounded-3xl bg-white dark:text-black  dark:border-gray-700 shadow hover:opacity-80">
                        <span className="relative"><MdOutlineShoppingCart />
                            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-4 -end-3 dark:border-gray-900">2</div>
                        </span>
                        <span>Cart</span>
                    </Link>
                </div>
            </div>
        </>
    );
}