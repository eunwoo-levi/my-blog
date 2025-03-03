import { MdOutlineEmail } from 'react-icons/md';

export default function Footer() {
  return (
    <footer className='flex h-[120px] w-full flex-col justify-center gap-4 bg-[#242729] pl-32'>
      <span className='text-xl text-[#bbc0c4]'>COPYRIGHT ⓒ eunwoo-levi</span>
      <div className='flex gap-2'>
        <MdOutlineEmail size={25} />
        <span className='text-lg text-[#848d95]'>eunwoo1341@gmail.com</span>
      </div>
    </footer>
  );
}
