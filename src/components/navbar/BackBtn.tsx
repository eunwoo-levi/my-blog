'use client';

import { IoArrowBack } from 'react-icons/io5';
import { useRouter } from 'next/navigation';

export default function BackBtn() {
  const router = useRouter();

  const handleTransition = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    const body = document.querySelector('body');
    body?.classList.add('page-transition');

    await sleep(200);
    router.back();
    await sleep(200);

    body?.classList.remove('page-transition');
  };

  // sleep 함수 (딜레이를 주기 위한 함수)
  function sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <button
      onClick={handleTransition}
      className='w-[40px] h-[40px] flex justify-center items-center rounded-lg cursor-pointer hover:bg-slate-700 transition duration-200'
    >
      <IoArrowBack size={35} color='white' />
    </button>
  );
}
