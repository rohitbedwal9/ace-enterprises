import { IoArrowBackCircle } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const MiniNav = ({ oldUser, values }) => {
  const router = useRouter();


  const handleBack = () => {
    let emptyfield=true
    if (values.number && values.password) {
      if (values.number === '' && values.password === '') {
        emptyfield=false
      }
    }

    if (emptyfield && oldUser === false) {
      toast.error("Please Fill empty feilds")
    }
    else {
      router.back()
    }
  }
  return (
    <div className="text-white bg-white bg-opacity-20 gap-1 flex flex-row  w-max  rounded-xl bg-transparent shadow-xl p-2">

      <button className='flex' onClick={handleBack}>
        <IoArrowBackCircle size={24} />
        Home
      </button>

    </div >
  );
};
