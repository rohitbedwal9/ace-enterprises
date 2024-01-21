import React from 'react'

const data = [
    {
        id: 1,
        image: "https://t3.ftcdn.net/jpg/03/20/36/32/360_F_320363200_5OmTMzWXKD86jBvsiraMbZCA0uSKyGtt.jpg",
        title: "Project 1",
        desc: "Bridge"
    },
    {
        id: 2,
        image: "https://media.istockphoto.com/id/526298880/photo/road-rollers-working-on-the-construction-site.jpg?s=612x612&w=0&k=20&c=C7CM-81xFktkVKcJMmC-CgYuE5D2zomncwTv7kZ5h4o=",
        title: "Project 2",
        desc: "Road"
    },
    {
        id: 3,
        image: "https://cdn.pixabay.com/photo/2016/04/28/15/50/construction-site-1359136_640.jpg",
        title: "Project 3",
        desc: "Buiding"
    },
    {
        id: 4,
        image: "https://cdn.pixabay.com/photo/2016/04/28/15/50/construction-site-1359136_640.jpg",
        title: "Project 4",
        desc: "Buiding"
    },
    {
        id: 5,
        image: "https://cdn.pixabay.com/photo/2016/04/28/15/50/construction-site-1359136_640.jpg",
        title: "Project 5",
        desc: "Buiding"
    },
    {
        id: 6,
        image: "https://cdn.pixabay.com/photo/2016/04/28/15/50/construction-site-1359136_640.jpg",
        title: "Project 6",
        desc: "Buiding"
    },
    {
        id: 7,
        image: "https://cdn.pixabay.com/photo/2016/04/28/15/50/construction-site-1359136_640.jpg",
        title: "Project 7",
        desc: "Buiding"
    },

]


export default function Projects() {
    return (
        <div className='sm:m-10'>
            <div className='mb-10  text-center '>
                <h1 className='mt-10 text-2xl sm:text-4xl text-gray-900  underline	decoration-yellow-400 decoration-42 underline-offset-[15px]'>
                    RECENT <span className='text-yellow-400'>PROJECTS</span>
                </h1>
            </div>

            <div className='w-100 h-100 lg:flex  justify-center items-center flex-wrap '>
                {data.map((project, index) => (
                    <div key={project.id} className=" m-5 rounded-lg shadow-lg bg-white">
                        <img className="object-cover h-72 lg:w-72 w-100" src={project.image} alt="Sunset in the mountains" />

                        <div className="p-4 sm:px-6 sm:py-4 text-center">

                            <div className="font-semibold sm:font-bold text-lg sm:text-xl mb-2">{project.title}</div>


                            <p className="text-gray-700 text-base">
                                {project.desc}
                            </p>
                        </div>
                    </div>

                ))}
            </div>

        </div>
    )
}
