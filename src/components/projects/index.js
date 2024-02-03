import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const data = [
  {
    id: 1,
    imgUrl:
      'https://t3.ftcdn.net/jpg/03/20/36/32/360_F_320363200_5OmTMzWXKD86jBvsiraMbZCA0uSKyGtt.jpg',
    title: 'Project 1',
    desc: 'Bridge',
  },
  {
    id: 2,
    imgUrl:
      'https://t3.ftcdn.net/jpg/03/31/59/82/360_F_331598222_tadTdFeI0WxEmyGFoWuMTlEK1jNu2Xhl.jpg',
    title: 'Project 2',
    desc: 'Road',
  },
  {
    id: 3,
    imgUrl:
      'https://t3.ftcdn.net/jpg/03/31/59/82/360_F_331598222_tadTdFeI0WxEmyGFoWuMTlEK1jNu2Xhl.jpg',
    title: 'Project 3',
    desc: 'Buiding',
  },
  {
    id: 4,
    imgUrl:
      'https://t3.ftcdn.net/jpg/03/31/59/82/360_F_331598222_tadTdFeI0WxEmyGFoWuMTlEK1jNu2Xhl.jpg',
    title: 'Project 4',
    desc: 'Buiding',
  },
  {
    id: 5,
    imgUrl:
      'https://t3.ftcdn.net/jpg/03/31/59/82/360_F_331598222_tadTdFeI0WxEmyGFoWuMTlEK1jNu2Xhl.jpg',
    title: 'Project 5',
    desc: 'Buiding',
  },
  {
    id: 6,
    imgUrl:
      'https://t3.ftcdn.net/jpg/03/31/59/82/360_F_331598222_tadTdFeI0WxEmyGFoWuMTlEK1jNu2Xhl.jpg',
    title: 'Project 6',
    desc: 'Buiding',
  },
  {
    id: 7,
    imgUrl:
      'https://t3.ftcdn.net/jpg/03/31/59/82/360_F_331598222_tadTdFeI0WxEmyGFoWuMTlEK1jNu2Xhl.jpg',
    title: 'Project 7',
    desc: 'Buiding',
  },
];

export const Projects = () => {
  return (
    <div className="py-5 md:px-20">
      <div className="flex md:flex-row gap-4 flex-col m-4 md:m-10 items-center">
        <div className="flex flex-col gap-4 p-4 md:p-10 align-center md:w-[70%]">
          <p className="text-xl md:text-2xl font-bold text-gray-800 ">
            What we do
          </p>
          <h1 className="text-2xl md:text-4xl font-bold w-max text-black px-2 bg-yellow-300">
            Recent Projects
          </h1>
          <p className="text-xl font-semibold">
            We design curated residential spaces that are a beautiful reflection
            of what’s most important to you. Our portfolio spans all style
            disciplines, from traditional to contemporary and everything in
            between.
          </p>
        </div>
        <div className="mx-auto justify-self-center text-center md:w-[20%] ">
          <Link
            href="/services"
            className="p-3 ml-auto rounded-3xl text-sky-600 border-sky-600 border-2    "
          >
            Read More
          </Link>
        </div>
      </div>
      <div className="w-full flex-wrap h-100 flex md:flex-row flex-col  justify-center items-center">
        {data.map((project) => (
          <div key={project.id} className=" m-5 rounded-lg shadow-lg bg-white">
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
        ))}
      </div>
    </div>
  );
}