'use client';
import React, { useEffect, useState } from 'react'

const projects = [
    {
        pid: 1,
        title: "project 1",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae esse magnam consequatur mollitia expedita nemo eligendi explicabo reprehenderit magni hic, perspiciatis rerum? Perferendis illo adipisci non neque? Sunt, eius sapiente!",
        imgURL: "https://www.theacehub.co.in/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdppjj5yox%2Fimage%2Fupload%2Fv1706968354%2Facehub%2Fimages%2Fproject-img.jpg&w=384&q=75",
        downloads: 50
    }
]

export default function Projects({ usersData }) {
    const [showAll, setShowAll] = useState(true)
    
    let description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae esse magnam consequatur mollitia expedita nemo eligendi explicabo reprehenderit magni hic, perspiciatis rerum? Perferendis illo adipisci non neque? Sunt, eius sapiente!"

    useEffect(() => {

        if (showAll) {
            setShowAll(true)
        }

    }, [showAll])

    function handleShow() {
        setShowAll(!showAll)
    }
    return (
        <div >
            <div className="w-full flex flex-col my-5  ">
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
                                    {usersData && usersData.map((user, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap">
                                                <div className="flex sm:justify-start justify-center ">
                                                    <div className="flex-shrink-0 h-50 w-50">
                                                        <img className=" " src={user.data.profile_picture} alt="" width={100} />
                                                    </div>
                                                </div>
                                            </td>

                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                project 1
                                            </td>
                                            <td className="px-6 py-4 whitespace-wrap lg:whitespace-nowrap text-sm text-gray-500">
                                                {description.length > 50 && showAll ? description.substring(0, 50) + "..." : description}
                                                <button onClick={handleShow} className='bg-black text-white p-1'>show</button>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                50+
                                            </td>


                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    Edit
                                                </a>
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                                    Delete
                                                </a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
