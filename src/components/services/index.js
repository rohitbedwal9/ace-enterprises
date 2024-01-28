import React from 'react'
import { FaHome } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";
import { FaBuilding } from "react-icons/fa";
import Link from 'next/link'

export const Services=() =>{
    return (
        <div className='py-5 md:px-20 '>
            <div className='flex md:flex-row gap-4 flex-col m-4 md:m-10 items-center'>
                <div className='flex flex-col gap-4 p-4 md:p-10 align-center'>
                <h1 className='text-lg md:text-2xl font-bold w-max text-black px-4 bg-yellow-300'>
                    Our Services
                </h1>
                <p className='text-2xl md:text-4xl font-bold text-black '>We offer a range of services to meet your needs</p>
                </div>
            <div className="mx-auto "><Link href='/services' className='p-3 ml-auto w-full rounded-3xl text-sky-600 border-sky-600 border-2'>Read More</Link></div>
            </div>

            <div className='m-5 sm:m-10 mb-10 '>
                <div className=' text-center '>
                    <div className='py-5 md:py-10  border-black flex md:flex-row flex-col gap-4 justify-center items-center md:m-5 '>
                        
                        <div className='  shadow-lg bg-white p-6 rounded-lg'>
                            <div className='flex justify-center'>
                                <div className='  bg-white  rounded-full '>
                                    <div className=' p-4 bg-black rounded-full'>
                                        <FaHome size={80}  color='white' />
                                    </div>
                                </div>
                            </div>

                            <div className="px-6 sm:py-4 md:text-center text-black ">

                                <div className="font-semibold md:font-bold text-lg md:text-2xl mb-2">RESIDENTIAL</div>
                                <p className="text-black text-base">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ex quae corrupti voluptate amet explicabo, accusantium dolore voluptatum, veritatis nisi nesciunt nobis illum dicta. Cupiditate exercitationem eligendi eaque aperiam distinctio?
                                </p>
                                
                            </div>
                            <div className='mt-4'><Link href='/services' className='p-3 w-full rounded-3xl bg-black text-white hover:bg-gray-600'>Read More</Link></div>
                        </div>

                        <div className='bg-black text-white border-2  p-6 shadow-lg rounded-lg'>
                            <div className='flex justify-center'>
                                <div className='  bg-black  rounded-full '>
                                    <div className='  p-4 bg-white rounded-full'>
                                        <FaBuilding size={80} color='black' />
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 sm:px-6 sm:py-4 text-center ">

                                <div className="font-semibold md:font-bold text-lg md:text-2xl mb-2">COMMERCIAL</div>
                                <p className=" text-base">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ex quae corrupti voluptate amet explicabo, accusantium dolore voluptatum, veritatis nisi nesciunt nobis illum dicta. Cupiditate exercitationem eligendi eaque aperiam distinctio?
                                </p>

                            </div>
                            <div className='mt-4'><Link href='/services' className='p-3 w-full rounded-3xl bg-white text-black hover:bg-gray-300'>Read More</Link></div>

                        </div>
                        <div className='bg-yellow-300 p-6 rounded-lg shadow-lg'>
                            <div className='flex justify-center'>
                                <div className='  bg-black  rounded-full '>
                                    <div className='  p-4 rounded-full'>
                                        <RiGovernmentFill size={80} color='white' />
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 sm:px-6 sm:py-4 text-center text-black">

                                <div className="font-semibold md:font-bold text-lg md:text-2xl mb-2">GOVERNMENT</div>
                                <p className="text-black text-base">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ex quae corrupti voluptate amet explicabo, accusantium dolore voluptatum, veritatis nisi nesciunt nobis illum dicta. Cupiditate exercitationem eligendi eaque aperiam distinctio?
                                </p>

                            </div>
                            <div className='mt-4'><Link href='/services' className='p-3 w-full rounded-3xl bg-black text-white hover:bg-gray-600'>Read More</Link></div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}