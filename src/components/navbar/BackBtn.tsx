'use client';

import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

const BackBtn = () => {
  const router = useRouter();

  const handleBackClick = () => {
    router.back();
  };

  return (
    <button
      onClick={handleBackClick}
      className='w-[40px] h-[40px] flex justify-center items-center rounded-lg bg-slate-700 hover:bg-slate-600 transition duration-200 text-white'
    >
      <IoArrowBack size={35} />
    </button>
  );
};

export default BackBtn;
