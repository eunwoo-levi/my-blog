import SpaceBackgrounds from '@/components/backgrounds/SpaceBackground';
import Giscus from '@/components/Giscus';

export const revalidate = 3600;

export default function Aboutpage() {
  return (
    <main className='relative w-full min-h-screen'>
      <SpaceBackgrounds />
      <div className='z-10 w-full h-[600px] flex flex-col justify-center items-center gap-[30px] mt-[800px] mb-[50px]'>
        <h1 className='z-10 p-[10px] dark:text-white text-[65px] font-bold items-center shadow-md shadow-purple-500 rounded-md'>
          Board
        </h1>
        <h2 className='text-transparent text-[30px] font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text'>
          자유 게시판
        </h2>
      </div>
      <article className='z-10 w-full flex-grow text-white flex flex-col justify-center items-center bg-gray-900 pt-[80px] pb-[80px]'>
        <Giscus />
      </article>
    </main>
  );
}
