import Image from 'next/image'
export default function TempPage(){
    return(
      <div className="bg-[url('/images/temp-bg.jpeg')] bg-no-repeat bg-cover">
        
        <div className=" w-full h-screen gap-2 flex justify-center items-center backdrop-blur-sm text-black font-bold">
        
          <div className='flex flex-col gap-24 bg-transparent shadow-black shadow-sm py-4 rounded-lg  w-[35%] h-[50%] px-2'>
            <div className='icons self-start  pl-2 flex flex-row gap-2 items-center justify-center'>
              <span className='bg-red-500 rounded-full w-4 h-4'></span>
              <span className='bg-yellow-500 rounded-full w-4 h-4'></span>
              <span className='bg-green-500 rounded-full w-4 h-4'></span>
            </div>
            <div className='flex flex-col items-center '>
            <h1 className="text-xl sm:text-3xl flex flex-row gap-[1px] items-center font-bold"><span>Comming Soon</span><Image src="/images/sand-timer.png" width={50} height={50} alt='sand-timer'/></h1>
            <p className="text-md sm:text-lg text-gray-700 rounded-lg">We are working hard to launch this site soon.</p>
        </div>
        </div>
        </div>
      </div>
    )
}