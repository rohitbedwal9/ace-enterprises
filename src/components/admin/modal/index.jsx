'use client';
import { FormInput } from '@/components'
import React, { useState } from 'react'

const inputs = [
    {
        id: 1,
        name: 'title',
        type: 'text',
        placeholder: 'Enter the title of project',
        errorMessage: 'It should not be a empty!',
        label: 'Title',
        required: true,
    },
    {
        id: 2,
        name: 'desc',
        type: 'text',
        placeholder: 'Enter the description of project',
        errorMessage: 'It should not be a empty!',
        label: 'Description',
        required: true,
    },
    {
        id: 3,
        name: 'image',
        type: 'file',
        label: 'Select Image',
        accept: 'image/*',
        errorMessage: 'It should not be a empty!',
        required: true,
    },

];

export default function Modal({ showModal, setShowModal, handleSubmit }) {
    const [values, setValues] = useState({
        title: '',
        desc: '',
        image: '',
    });
    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    return (
        < div >

            {showModal ? (
                <>
                    <div className="fixed top-0 flex items-center justify-center p-10 left-0 right-0 bottom-0 bg-opacity-25 bg-black z-10">
                        <div className="w-full h-100 bg-gray-500 p-5 rounded-lg max-w-2xl z-50 relative ">
                            <button className=' w-full flex justify-end' onClick={() => setShowModal(false)}>close</button>
                            <div className="p-6  sm:px-8">
                                <h1 className="text-center text-2xl md:font-bold leading-tight tracking-tight text-yellow-400 md:text-3xl ">
                                    New Project
                                </h1>
                                <form
                                    className="flex flex-col gap-2"
                                    onSubmit={(e) => { handleSubmit(e, values); setShowModal(false) }}
                                >
                                    {inputs.map((input) => (
                                        <FormInput
                                            key={input.id}
                                            {...input}
                                            value={values[input.name]}
                                            onChange={onChange}
                                            className="p-2 my-0 w-full text-sm text-black "
                                        />
                                    ))}
                                    <button
                                        type="submit"
                                        className={`w-full mt-5 text-slate-700 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2 text-center  dark:focus:ring-primary-800`}
                                    >
                                        Add Project
                                    </button>
                                </form>

                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </div>
    )
}

