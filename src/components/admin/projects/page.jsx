'use client';
import { database } from '@/utils/firebase';
import { onValue, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react'
import ProjectRow from '../projectRow';
import Modal from '../modal';

export default function Projects() {
    const [showAll, setShowAll] = useState(true)
    const [projects, setProjects] = useState([])
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const dbref = ref(database, "projects");
        const unsubscribe = onValue(dbref, (snapshot) => {

            let arr = []
            snapshot.forEach((doc) => {
                arr.push({ ...doc.val() })
            })
            setProjects(arr)
        })
        return () => unsubscribe
    }, [])

    // useEffect(() => {

    //     if (showAll) {
    //         setShowAll(true)
    //     }

    // }, [showAll])

    // function handleShow() {
    //     setShowAll(!showAll)
    // }
    const handleDelete = async (id) => {
        let x = confirm("Are you sure?");
        if (x) {
            const dbref = ref(database, 'projects/' + id)
            await remove(dbref)
            console.log("done")
        }
    }
    const handleSubmit = async (e,values) => {
        e.preventDefault();
        console.log(values)
    };
    return (
        <div >

            <div className="w-full flex flex-col my-5  ">
                <div className='flex justify-end sm:mx-12 lg:mx-16'>
                    <button onClick={() => setShowModal(true)} className='bg-yellow-400 p-2 '>
                        Add New Projects
                    </button>
                </div>
                <div className=" overflow-x-auto sm:mx-6 lg:mx-8">

                    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">

                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Project Image
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Project Title
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Project Description
                                        </th>
                                        <th
                                            scope="col"
                                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            No. of Downloads
                                        </th>


                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                        <th scope="col" className="relative px-6 py-3">
                                            <span className="sr-only">Delete</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {projects && projects.map((project, index) => (
                                        <ProjectRow key={index} project={project} index={index}  handleDelete={handleDelete} />
                                    ))}
                                </tbody>
                            </table>

                            <Modal showModal={showModal} setShowModal={setShowModal} handleSubmit={handleSubmit} />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
