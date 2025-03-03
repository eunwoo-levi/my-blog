import { CategoryList } from '@/src/features/blog';

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex w-full flex-col items-center'>
      <div className='mt-10 w-full max-w-[1000px]'>
        <CategoryList />
      </div>
      {children}
    </div>
  );
}
