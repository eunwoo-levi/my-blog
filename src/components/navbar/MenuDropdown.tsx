import { RxHamburgerMenu } from 'react-icons/rx';

export default function MenuDropdown() {
  return (
    <div className='relative flex items-center justify-center'>
      <button className='rounded-lg p-1 hover:bg-slate-700'>
        <RxHamburgerMenu size={30} color='white' />
      </button>
      <div className='absolute right-0'></div>
    </div>
  );
}
