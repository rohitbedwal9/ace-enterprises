import Image from 'next/image';
import { CgSandClock } from 'react-icons/cg';
export default function TempPage() {
  return (
    <div className="bg-[url('https://firebasestorage.googleapis.com/v0/b/ace-enterprises-af30e.appspot.com/o/images%2Ftemp-bg.jpg?alt=media&token=67e09f1d-70d9-4591-adba-6c6341026a19')] sm:bg-no-repeat bg-cover">
      <div className=" w-full h-screen gap-2 flex justify-center items-center sm:backdrop-blur-sm backdrop-blur-sm text-white font-bold">
        <div className="flex flex-col gap-12 sm:gap-24 bg-transparent shadow-black shadow-sm py-4 rounded-lg  w-[80%] sm:w-[35%] h-[40%] sm:h-[50%] px-2">
          <div className="icons self-start  pl-2 flex flex-row gap-2 items-center justify-center">
            <span className="bg-red-500 rounded-full w-4 h-4"></span>
            <span className="bg-yellow-600 rounded-full w-4 h-4"></span>
            <span className="bg-green-500 rounded-full w-4 h-4"></span>
          </div>
          <div className="flex flex-col items-center ">
            <h1 className="text-xl sm:text-3xl flex flex-row gap-[1px] items-center font-bold">
              <span>Coming Soon</span>
              <CgSandClock />
            </h1>
            <p className="text-md sm:text-lg text-gray-300 rounded-lg text-center">
              We are working hard to launch this site soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
