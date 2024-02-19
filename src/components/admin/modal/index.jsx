'use client';
import React, { useEffect, useState } from 'react'
import { IoClose } from "react-icons/io5";


export default function Modal({ project, showModal, setShowModal, handleNew }) {
    const [title, setTitle] = useState()
    const [desc, setDesc] = useState()
    const [image, setImage] = useState('')
    const [file, setFile] = useState('')

    useEffect(() => {
        setTitle(project !== null ? project.title : '')
        setDesc(project !== null ? project.desc : '')

    }, [project])


    const newProject = (e) => {
        e.preventDefault()
        if (image === '' && title === '' && desc === '' && file === '') {
            alert("Please fill the empty feilds")
            return
        }

        let key = new Date().getTime().toString();
        let isedit = false
         handleNew(title, desc, image, file, isedit, key);
        setTitle('')
        setDesc('')
        setImage('')
        setShowModal(false)
    }
    const editProject = (e) => {

        e.preventDefault()
        if (image === '' && title === '' && desc === '' && file === '') {
            alert("Please fill the empty feilds")
            return
        }
        let isedit = true
        handleNew(title, desc, image, file, isedit, project.id);
        setTitle('')
        setDesc('')
        setImage('')
        setShowModal(false)
    }

    const closeModal = () => {
        setTitle('')
        setDesc('')
        setImage('')
        setShowModal(false)
    }

    return (
        < div >

            {showModal ? (
                <>
                    <div className="fixed top-0 flex items-center justify-center p-10 left-0 right-0 bottom-0 bg-opacity-25 bg-black z-10">
                        <div className="w-full h-100 bg-gray-800 p-5 rounded-lg max-w-2xl z-50 relative ">
                            <div className=' w-full flex justify-end cursor-pointer'>
                                <IoClose color='white' size={25} onClick={closeModal} />
                            </div>
                            <div className="p-4  sm:px-8">
                                <h1 className="mb-2 text-center text-2xl md:font-bold leading-tight tracking-tight text-yellow-400 md:text-3xl ">
                                    {project !== null ? 'Edit ' : ' New '}Project
                                </h1>
                                <form
                                    className="flex flex-col gap-2 "
                                    onSubmit={(e) => project !== null ? editProject(e) : newProject(e)}
                                >
                                    <label className='text-gray-200 text-sm' >Title</label>
                                    <input
                                        type='text'
                                        placeholder='Enter the title of project'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                        required
                                    />
                                    <label className='text-gray-200 text-sm'>Description</label>
                                    <input
                                        type='text'
                                        placeholder='Enter the Description of project'
                                        value={desc}
                                        onChange={(e) => setDesc(e.target.value)}
                                        required
                                    />
                                    <label className='text-gray-200 text-sm'>Image</label>
                                    <input
                                        type='file'
                                        className='text-gray-200 text-sm'
                                        accept='image/*'
                                        onChange={(e) => setImage(e.target.files[0])}
                                        required
                                    />
                                    <label className='text-gray-200 text-sm'>PDF</label>
                                    <input
                                        type='file'
                                        className='text-gray-200 text-sm'
                                        accept='application/pdf'
                                        onChange={(e) => setFile(e.target.files[0])}
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className={`w-full mt-5 text-slate-700 bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2 text-center  dark:focus:ring-primary-800`}
                                    >
                                        {project !== null ? 'Edit ' : 'Add '}Project
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

