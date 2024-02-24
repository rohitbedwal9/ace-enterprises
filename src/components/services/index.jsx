import React from 'react'
import { FaHome } from "react-icons/fa";
import { RiGovernmentFill } from "react-icons/ri";
import { FaBuilding } from "react-icons/fa";
import Link from 'next/link'

export const Services = () => {
    return (
        <div data-aos="fade-in" className='py-5 md:px-20 '>
            <div className='flex md:flex-row gap-4 flex-col m-4 md:m-10 items-center'>
                <div className='flex flex-col gap-4 p-4 md:p-10 align-center'>
                    <h1 className='text-lg md:text-2xl font-bold w-max text-black px-4 bg-yellow-300'>
                        Our Services
                    </h1>
                    <p className='text-2xl md:text-4xl font-bold text-black '>We offer a range of services to meet your needs</p>
                </div>
                <div className="mx-auto "><Link href='/services' className='p-3 ml-auto w-full rounded-3xl text-sky-600 border-sky-600 border-2'>Read More</Link></div>
            </div>

            <div data-aos="fade-in" className='m-5 sm:m-10 mb-10 '>
                <div className=' text-center '>
                    <div className='py-5 md:py-10  border-black flex md:flex-row flex-col gap-4 justify-center w-full  items-center'>

                        <div className=' shadow-lg bg-white p-4 flex flex-col gap-2 rounded-lg md:w-1/3 '>
                            <div className='flex justify-center'>
                                <div className='  bg-white  rounded-full '>
                                    <div className=' p-4 bg-black rounded-full'>
                                        <FaHome size={80} color='white' />
                                    </div>
                                </div>
                            </div>

                            <div className="md:px-6 md:py-4 md:text-center text-black ">

                                <div className="font-semibold md:font-bold text-lg md:text-2xl mb-2">RESIDENTIAL</div>
                                <p className="text-black text-base text-ellipsis h-[280px]">
                                    We specialize in crafting exceptional residential structures. With a dedication to quality craftsmanship and innovative design, we bring dreams to life, creating homes that are not just buildings, but havens of comfort, style, and enduring value. From concept to completion, we are committed to exceeding expectations and delivering unparalleled excellence in every aspect of residential construction.
                                </p>

                            </div>
                            <div className='mb-2'><Link href='/services' className='p-3 w-full rounded-3xl bg-black text-white hover:bg-gray-600'>Read More</Link></div>
                        </div>

                        <div className='bg-black text-white border-2 flex flex-col gap-2 p-4  shadow-lg rounded-lg md:w-1/3 '>
                            <div className='flex justify-center'>
                                <div className='  bg-black  rounded-full '>
                                    <div className='  p-4 bg-white rounded-full'>
                                        <FaBuilding size={80} color='black' />
                                    </div>
                                </div>
                            </div>

                            <div className="md:px-6 md:py-4 text-center ">

                                <div className="font-semibold md:font-bold text-lg md:text-2xl mb-2">COMMERCIAL</div>
                                <p className=" text-base text-ellipsis h-[280px]">
                                    {/* We excel in constructing vibrant spaces that transcend mere structures, becoming bustling hubs of commerce and innovation. From inception to completion, our commitment to quality and innovation ensures that each project exceeds expectations, setting new benchmarks in design and functionality. */}
                                    We are architects of dynamic environments, sculpting vibrant spaces that transcend the ordinary, pulsating with life and purpose. From the inception of an idea to its realization, we immerse ourselves in a relentless pursuit of excellence, ensuring each project not only meets but exceeds expectations, setting new benchmarks in design and functionality.
                                </p>

                            </div>
                            <div className='mb-2'><Link href='/services' className='p-3 w-full rounded-3xl bg-white text-black hover:bg-gray-300'>Read More</Link></div>

                        </div>
                        <div className='bg-yellow-300 p-4 flex flex-col gap-2 rounded-lg shadow-lg md:w-1/3 '>
                            <div className='flex justify-center'>
                                <div className='  bg-black  rounded-full '>
                                    <div className='  p-4 rounded-full'>
                                        <RiGovernmentFill size={80} color='white' />
                                    </div>
                                </div>
                            </div>

                            <div className="md:px-6 md:py-4  text-center text-black">

                                <div className="font-semibold md:font-bold text-lg md:text-2xl mb-2">GOVERNMENT</div>
                                <p className="text-black text-base text-ellipsis h-[280px]">
                                    We specialize in executing government contracts at both the central and state levels, including projects in Uttarakhand. Our expertise lies in delivering high-quality infrastructure tailored to the unique needs and regulations of governmental entities. From essential facilities to critical infrastructure, we are dedicated to ensuring timely completion and adherence to the highest standards of excellence.
                                </p>

                            </div>
                            <div className='mb-2 mt-6 md:mt-0'><Link href='/services' className='p-3 w-full rounded-3xl bg-black text-white hover:bg-gray-600'>Read More</Link></div>

                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}