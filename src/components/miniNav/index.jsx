import Link from 'next/link';
import { IoArrowBackCircle } from 'react-icons/io5';
export const MiniNav = () => {
  return (
    <div className="text-white bg-white bg-opacity-20 gap-1 flex flex-row  w-max  rounded-xl bg-transparent shadow-xl p-2">
      <IoArrowBackCircle size={24}/>
      <Link href="/home" className="">
        Home
      </Link>
    </div>
  );
};
