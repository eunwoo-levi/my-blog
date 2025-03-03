import { Giscus } from '@/src/shared/ui';

export const revalidate = 3600;

export default function Aboutpage() {
  return (
    <main className='relative min-h-screen w-full'>
      <div className='z-10 mb-[20px] flex h-[300px] w-full flex-col items-center justify-center gap-[30px]'>
        <h1 className='z-10 items-center rounded-md p-[10px] text-[65px] font-bold shadow-md shadow-purple-500 dark:text-white'>
          Board
        </h1>
        <h2 className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-[30px] font-semibold text-transparent'>
          자유 게시판
        </h2>
      </div>
      <article className='z-10 flex w-full flex-grow flex-col items-center justify-center bg-gray-900/50 pb-[80px] pt-[80px] text-white'>
        <Giscus />
      </article>
    </main>
  );
}
