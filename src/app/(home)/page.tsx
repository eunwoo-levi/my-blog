import Header from '@/app/(home)/_components/Header';
import Introduction from './_components/Introduction';
import Links from './_components/Links';
import SpaceBackground from '@/components/backgrounds/SpaceBackground';

export const metadata = {
  title: 'My Portfolio - Frontend Web Developer',
  description:
    'Portfolio of a skilled Frontend Web Developer, showcasing projects and expertise in web development.',
  keywords:
    'Frontend, Web Developer, Portfolio, React, Next.js, TypeScript, tech blog, Next.js blog',
};

export default function Home() {
  return (
    <main className='relative flex min-h-screen w-full flex-col'>
      <SpaceBackground />
      <div className='relative z-20'>
        <div className='flex flex-col items-center justify-center px-[50px] lg:flex-row'>
          <div className='flex flex-col'>
            <Header />
            <div className='mb-[50px] border border-slate-800' />
            <Introduction />
          </div>
        </div>
        <Links />
      </div>
    </main>
  );
}
