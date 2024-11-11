import { FaGithub } from 'react-icons/fa';
import { DarkModeBtn } from './DarkModeBtn';
import BackBtn from './BackBtn';
import { NavTitle } from './NavTitle';
import { CustomLink } from '../CustomLink';

export default function Navbar() {
  return (
    <div className='fixed z-50 top-0 left-0 w-full h-[60px] border-b border-slate-800 pl-[20px] flex justify-between lg:justify-center lg:ml-0 items-center bg-gray-950 bg-opacity-90'>
      <div className='absolute top-[9px] right-2 lg:left-5'>
        <BackBtn />
      </div>
      <CustomLink
        href='/'
        className='z-10 flex justify-center items-center cursor-pointer hover:bg-slate-700 p-[4px] rounded-lg transition duration-200'
      >
        <NavTitle />
      </CustomLink>

      <div className='lg:absolute right-1 pr-[60px] lg:pr-[80px] flex gap-[20px] items-center'>
        <CustomLink href='https://github.com/eunwoo-levi' className='hover:bg-neutral-700 p-1 rounded-lg'>
          <FaGithub size={34} color='white' className='cursor-pointer' />
        </CustomLink>

        <DarkModeBtn />
      </div>
    </div>
  );
}
