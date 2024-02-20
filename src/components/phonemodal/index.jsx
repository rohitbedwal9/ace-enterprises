'use client';
import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";

export default function PhoneModal({ showModal, setShowModal, handlePhoneNumber }) {
    const [number, setNumber] = useState('')
    const [focused, setFocused] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(number)
    }

    const closeModal = () => {

        setShowModal(false)
    }
    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        < div >

            {showModal ? (
                <>
                    <div className="fixed top-0 flex items-center justify-center sm:p-10 left-0 right-0 bottom-0 bg-opacity-25 bg-black z-10">
                        <div className="w-full h-100 bg-gray-800 p-5 rounded-lg max-w-2xl z-50 relative ">
                            <div className=' w-full flex justify-end cursor-pointer'>
                                <IoClose color='white' size={25} onClick={closeModal} />
                            </div>
                            <div className="p-4  sm:px-8">
                                <h1 className="mb-2 text-center text-2xl md:font-bold leading-tight tracking-tight text-yellow-400 md:text-3xl ">
                                    Please verify your phone number
                                </h1>




                                <form className="max-w-sm mx-auto" onSubmit={handleSubmit} >
                                    <div className="flex items-center">
                                       
                                            <button className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600" type="button">
                                                <div className="inline-flex items-center">
                                                    <img src="https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Findia.png?alt=media&token=b4a5b630-b2eb-42f4-8449-9eb5656d6589" alt="" />
                                                    <p className='ml-2'>IN(+91)</p>
                                                </div>
                                            </button>
                                  
                                   
                                            <input
                                                type="tel"
                                                className="block p-2.5 w-[80%]  z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg border-s-0 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-s-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
                                                placeholder="123-456-7890"
                                                value={number}
                                                onChange={(e) => setNumber(e.target.value)}
                                                required />
                                      
                                    </div>
                                  
                                    <button type="submit" className="text-white w-full bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
                                </form>

                            </div>
                        </div>
                    </div>
                </>
            ) : null}

        </div>
    )
}

