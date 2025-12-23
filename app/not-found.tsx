import Link from 'next/link';
import { Button } from '@/src/shared/ui';

export default function NotFound() {
  return (
    <div className='flex min-h-[calc(100vh-300px)] flex-col items-center justify-center px-4'>
      <div className='max-w-2xl space-y-6 text-center'>
        <h1 className='bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-8xl font-bold text-transparent md:text-9xl'>
          404
        </h1>

        <div className='space-y-3'>
          <h2 className='text-2xl font-bold text-foreground md:text-3xl'>
            페이지를 찾을 수 없습니다
          </h2>
          <p className='text-base text-muted-foreground md:text-lg'>
            요청하신 페이지가 존재하지 않거나 삭제되었습니다.
            <br />
            주소를 다시 확인해주세요.
          </p>
        </div>

        <div className='flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row'>
          <Link href='/'>
            <Button size='lg' className='w-full sm:w-auto'>
              홈으로 돌아가기
            </Button>
          </Link>
          <Link href='/react'>
            <Button variant='outline' size='lg' className='w-full sm:w-auto'>
              React 글 보기
            </Button>
          </Link>
        </div>

        <div className='mt-8 border-t border-border pt-8'>
          <p className='text-sm text-muted-foreground'>
            문제가 지속되면{' '}
            <Link href='/' className='text-primary hover:underline'>
              메인 페이지
            </Link>
            에서 원하는 글을 찾아보세요.
          </p>
        </div>
      </div>
    </div>
  );
}
