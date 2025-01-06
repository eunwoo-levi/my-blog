import CustomLink from '@/components/CustomLink';

const customLinkClassName =
  'flex justify-center items-center w-[300px] lg:w-[500px] h-[50px] border rounded-3xl transform duration-300 hover:bg-slate-700 hover:bg-opacity-30 hover:scale-110 cursor-pointer';

export default function Links() {
  return (
    <div className='mt-[150px] flex flex-col items-center justify-center gap-[30px]'>
      <CustomLink href='/portfolio' className={customLinkClassName}>
        Portfolio
      </CustomLink>
      <CustomLink href='/project' className={customLinkClassName}>
        Projects
      </CustomLink>
      <CustomLink href='/blog' className={customLinkClassName}>
        Tech Blogs
      </CustomLink>
      <CustomLink href='/board' className={customLinkClassName}>
        Board
      </CustomLink>
    </div>
  );
}
