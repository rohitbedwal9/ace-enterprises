import Image from 'next/image';
import React from 'react'

export default function Card({project,onhandleClick}) {
  return (
      <div key={project.id}  onClick={() => onhandleClick(project.title)} className=" m-5 rounded-lg shadow-lg bg-white">
          <Image
              className="object-cover w-90 h-72 sm:w-64 rounded-lg"
              src={project.imgUrl}
              alt={project.desc}
              width={300}
              height={300}
          />

          <div className="p-4 sm:px-6 sm:py-4 text-center">
              <div className="font-semibold text-black sm:font-bold text-lg sm:text-xl mb-2">
                  {project.title}
              </div>
              <p className="text-gray-700 text-lg font-semibold">
                  {project.desc}
              </p>
          </div>
      </div>
  )
}
