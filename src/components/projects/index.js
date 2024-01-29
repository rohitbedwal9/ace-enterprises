
const data = [
    {
        id: 1,
        image: 'https://t3.ftcdn.net/jpg/03/20/36/32/360_F_320363200_5OmTMzWXKD86jBvsiraMbZCA0uSKyGtt.jpg',
        title: 'Project 1',
        desc: 'Bridge'
    },
    {
        id: 2,
        image: 'https://media.istockphoto.com/id/526298880/photo/road-rollers-working-on-the-construction-site.jpg?s=612x612&w=0&k=20&c=C7CM-81xFktkVKcJMmC-CgYuE5D2zomncwTv7kZ5h4o=',
        title: 'Project 2',
        desc: 'Road'
    },
    {
        id: 3,
        image: 'https://t3.ftcdn.net/jpg/03/31/59/82/360_F_331598222_tadTdFeI0WxEmyGFoWuMTlEK1jNu2Xhl.jpg',
        title: 'Project 3',
        desc: 'Building'
    },
    {
        id: 4,
        image: 'https://t3.ftcdn.net/jpg/03/31/59/82/360_F_331598222_tadTdFeI0WxEmyGFoWuMTlEK1jNu2Xhl.jpg',
        title: 'Project 4',
        desc: 'Building'
    },
    {
        id: 5,
        image: 'https://t3.ftcdn.net/jpg/03/31/59/82/360_F_331598222_tadTdFeI0WxEmyGFoWuMTlEK1jNu2Xhl.jpg',
        title: 'Project 5',
        desc: 'Building'
    },
    {
        id: 6,
        image: 'https://t3.ftcdn.net/jpg/03/31/59/82/360_F_331598222_tadTdFeI0WxEmyGFoWuMTlEK1jNu2Xhl.jpg',
        title: 'Project 6',
        desc: 'Building'
    },
    {
        id: 7,
        image: 'https://t3.ftcdn.net/jpg/03/31/59/82/360_F_331598222_tadTdFeI0WxEmyGFoWuMTlEK1jNu2Xhl.jpg',
        title: 'Project 7',
        desc: 'Building'
    },

]



export const Projects = () => {
  
    return (
        <div className='mx-3 sm:mx-10 my-4 dark:bg-gray-900 py-10'>
            <div className='mb-10 w-full'>
                <h1 className='text-xl sm:text-3xl tracking-tight font-bold text-center text-gray-900 dark:text-white flex gap-2 justify-center '>
                    <span className=' border-b-4 border-yellow-500'>RECENT</span><span className='text-yellow-500 border-b-4 border-yellow-500'>PROJECTS</span>
                </h1>
            </div>

            <div className='w-100 h-100 lg:flex  justify-center items-center flex-wrap '>
                {data.map((project, index) => (
                    <div key={project.id} className=" m-5 rounded-lg shadow-lg bg-white">
                        <img className="object-cover w-100 h-72 md:w-72 rounded-lg" src={project.image} alt={project.desc} />

                        <div className="p-4 sm:px-6 sm:py-4 text-center">
                            <div className="font-semibold text-black sm:font-bold text-lg sm:text-xl mb-2">{project.title}</div>
                            <p className="text-gray-700 text-lg font-semibold">
                                {project.desc}
                            </p>
                        </div>
                    </div>

                ))}
              
            </div>
        </div>
    )
}