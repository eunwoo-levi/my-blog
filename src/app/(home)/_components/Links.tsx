import CustomLink from '@/components/CustomLink';

const customLinkClassName =
  'flex justify-center items-center w-[300px] lg:w-[500px] h-[50px] border rounded-3xl transform duration-300 hover:bg-slate-700 hover:bg-opacity-30 hover:scale-110 cursor-pointer';

export default function Links() {
  return (
    <div className='flex flex-col justify-center items-center gap-[30px] mt-[150px]'>
      <CustomLink href='/portfolio' className={customLinkClassName}>
        Portfolio
      </CustomLink>
      <CustomLink href='/blog' className={customLinkClassName}>
        Blog
      </CustomLink>
      <CustomLink href='/board' className={customLinkClassName}>
        Board
      </CustomLink>
    </div>
  );
}
