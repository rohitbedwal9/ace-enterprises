import Link from 'next/link';

export default function Home(){
    return(
        <div className='main h-screen'>
                <nav className="w-full p-4 flex justify-around">
                <div className='text-xl font-semibold'>Ace-Enterprises</div>
                <div className='text-lg'>
                    <Link href="/admin/login" className="bg-yellow-300 hover:bg-yellow-400   p-2 rounded-lg">Login</Link>
                </div>
            </nav>
            <div className="flex flex-col justify-center items-center ">
            <div className="text-4xl">
                Welcome Admin
             </div>
     </div>
        
        </div>

    );  
}