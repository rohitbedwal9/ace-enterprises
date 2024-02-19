import React from 'react'
import Image from 'next/image';

function ProjectRow({ project, index, handleEditOpen, handleDelete }) {
    return (

        <tr key={index}>
            <td className="px-6 py-4  whitespace-nowrap">
                <div className="flex sm:justify-start justify-center ">

                    <Image className='w-100 h-auto rounded' src={project.imgURL} alt={project.imgURL} width={120} height={100} />

                </div>
            </td>

            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {project.title}
            </td>
            <td className="px-6 py-4 whitespace-wrap  text-sm text-gray-500">
                {project.desc.length > 50 ? project.desc.substring(0, 50) + "..." : project.desc}
                {/* <button onClick={handleShow} className='bg-black text-white p-1'>{showAll ? "show" : "hide"}</button> */}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {project.downloads}+
            </td>


            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={() => handleEditOpen(project)} className="text-indigo-600 hover:text-indigo-900">
                    Edit
                </button>
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <button onClick={() => handleDelete(project)} className="text-indigo-600 hover:text-indigo-900">
                    Delete
                </button>
            </td>

        </tr>

    )
}

export default ProjectRow