import { MdOutlineEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <div className='z-10 text-white  w-full h-[150px] bg-slate-900 mt-[250px] flex flex-col justify-center items-start pl-[20px] gap-[10px]'>
      <div className='flex gap-[20px]'>
        <MdOutlineEmail size={25} />
        <a href='mailto:eunwoo1341@gmail.com' className='text-[15px] hover:underline'>
          eunwoo1341@gmail.com
        </a>
      </div>
      <h1 className='text-[15px]'>Copyright ⓒ S. Eunwoo</h1>
    </div>
  );
}
