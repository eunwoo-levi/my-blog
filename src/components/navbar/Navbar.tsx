import { FaGithub } from 'react-icons/fa';
import { DarkModeBtn } from './DarkModeBtn';
import BackBtn from './BackBtn';
import { NavTitle } from './NavTitle';
import CustomLink from '../CustomLink';
import MenuDropdown from './MenuDropdown';

export default function Navbar() {
  return (
    <div className='fixed left-0 top-0 z-50 flex h-[60px] w-full items-center justify-between border-b border-slate-800 bg-gray-950 bg-opacity-90 pl-[20px] lg:ml-0 lg:justify-center'>
      <div className='absolute left-5 hidden lg:block'>
        <BackBtn />
      </div>
      <CustomLink
        href='/'
        className='z-10 flex cursor-pointer items-center justify-center rounded-lg p-[4px] transition duration-200 hover:bg-slate-700'
      >
        <NavTitle />
      </CustomLink>

      <div className='right-1 flex items-center gap-[20px] pr-[10px] lg:absolute lg:pr-[80px]'>
        <CustomLink
          href='https://github.com/eunwoo-levi'
          className='rounded-lg p-1 hover:bg-neutral-700'
        >
          <FaGithub size={34} color='white' className='cursor-pointer' />
        </CustomLink>

        <DarkModeBtn />
        <MenuDropdown />
      </div>
    </div>
  );
}
