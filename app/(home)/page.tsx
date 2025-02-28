import { CategoryList } from '@/src/features/blog';

export default function HomePage() {
  return (
    <div className='flex w-full flex-col items-center'>
      <div className='mt-10 w-full max-w-[1000px]'>
        <CategoryList />
      </div>
      <div className='w-[100px] bg-blue-300'>음22</div>
    </div>
  );
}
