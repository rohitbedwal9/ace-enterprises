import React from 'react'
import { FaHome } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";
import { FaBuilding } from "react-icons/fa";

export const Services=() =>{
    return (
        <div>
            <div className=' mb-10  text-center '>
                <h1 className='mt-10 text-2xl sm:text-4xl text-gray-900  underline	decoration-yellow-400 decoration-42 underline-offset-[15px]'>
                    Services
                </h1>
            </div>

            <div className='sm:m-10 mb-10   bg-[url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D")] bg-center bg-cover bg-no-repeat '>
                <div className=' bg-gradient-to-t p-5 from-[#243c5a] text-center '>



                    <div className=' lg:flex  justify-center items-center m-5 '>
                        {/* service component */}

                        <div className=''>
                            <div className='flex justify-center'>
                                <div className='  bg-white  p-3 rounded-full '>
                                    <div className='  p-7 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full'>
                                        <FaHome size={100} color='white' />
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 sm:px-6 sm:py-4 text-center text-white">

                                <div className="font-semibold sm:font-bold text-lg sm:text-2xl mb-2">RESIDENTIAL</div>
                                <p className="text-white text-base">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ex quae corrupti voluptate amet explicabo, accusantium dolore voluptatum, veritatis nisi nesciunt nobis illum dicta. Cupiditate exercitationem eligendi eaque aperiam distinctio?
                                </p>
                            </div>
                        </div>

                        <div className=''>
                            <div className='flex justify-center'>
                                <div className='  bg-white  p-3 rounded-full '>
                                    <div className='  p-7 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full'>
                                        <FaBuilding size={100} color='white' />
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 sm:px-6 sm:py-4 text-center text-white">

                                <div className="font-semibold sm:font-bold text-lg sm:text-2xl mb-2">COMMERCIAL</div>
                                <p className="text-white text-base">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ex quae corrupti voluptate amet explicabo, accusantium dolore voluptatum, veritatis nisi nesciunt nobis illum dicta. Cupiditate exercitationem eligendi eaque aperiam distinctio?
                                </p>
                            </div>
                        </div>
                        <div className=''>
                            <div className='flex justify-center'>
                                <div className='  bg-white  p-3 rounded-full '>
                                    <div className='  p-7 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full'>
                                        <RiGovernmentFill size={100} color='white' />
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 sm:px-6 sm:py-4 text-center text-white">

                                <div className="font-semibold sm:font-bold text-lg sm:text-2xl mb-2">GOVERNMENT</div>
                                <p className="text-white text-base">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad ex quae corrupti voluptate amet explicabo, accusantium dolore voluptatum, veritatis nisi nesciunt nobis illum dicta. Cupiditate exercitationem eligendi eaque aperiam distinctio?
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}
