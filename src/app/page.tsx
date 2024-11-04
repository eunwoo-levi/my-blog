import { MdOutlineEmail } from 'react-icons/md';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ShootingStars = dynamic(
  () => import('@/components/ui/shooting-stars').then((mod) => mod.ShootingStars),
  { ssr: false }
);
const StarsBackground = dynamic(
  () => import('@/components/ui/stars-background').then((mod) => mod.StarsBackground),
  { ssr: false }
);
const Earth = dynamic(() => import('@/components/Earth'), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}

const CustomLink: React.FC<CustomLinkProps> = ({ href, children }) => (
  <Link
    href={href}
    className='flex justify-center items-center w-[300px] lg:w-[500px] h-[50px] border rounded-3xl transform duration-200 hover:bg-slate-700 hover:bg-opacity-30 hover:scale-110 cursor-pointer'
    aria-label={`Navigate to ${String(children)} page`}
  >
    {children}
  </Link>
);

export const metadata = {
  title: 'My Portfolio - Frontend Web Developer',
  description:
    'Portfolio of a skilled Frontend Web Developer, showcasing projects and expertise in web development.',
  keywords:
    'Frontend, Web Developer, Portfolio, React, Next.js, TypeScript, tech blog, Next.js blog',
};

export default function Home() {
  return (
    <main className='relative w-full min-h-screen flex flex-col'>
      <StarsBackground />
      <ShootingStars />
      <div className='relative flex flex-col items-center justify-between px-[50px] lg:flex-row'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-[50px] mt-[40px] pl-[30px] lg:pl-[80px] mb-[40px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-700 rounded-lg text-transparent bg-clip-text'>
            PORTFOLIO <br />
            Frontend Web Developer
          </h1>
          <section>
            <div className='border border-slate-800 mb-[50px]' />
            <h2 className='text-[25px] mb-[20px] font-semibold'>Welcome to My Portfolio.</h2>
            <div className='lg:text-[22px] space-y-4 font-semibold'>
              <p className='lg:text-[20px] mb-[40px]'>
                My name is Eunwoo and I decided to make my own Portfolio & Tech Blog with Next.JS
              </p>
              <p>I am committed to growing as a skilled and professional Frontend developer.</p>
              <p>
                I dedicate myself to learning new technologies and mastering them, prioritizing User
                eXperience.
              </p>
              <p>
                While my primary focus is on Frontend development, I am also expanding my expertise
                in Backend technologies.
              </p>
              <p>
                Additionally, I am fluent in English and capable of collaborating effectively on
                international projects.
              </p>
            </div>
          </section>
        </div>
        <div className='relative flex flex-col items-center justify-between lg:flex-row w-full overflow-hidden lg:pl-[40px]'>
          <Earth className='w-full h-auto' />
        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-[30px] mt-[150px]'>
        <CustomLink href='/about'>Portfolio</CustomLink>
        <CustomLink href='/blog'>Blog</CustomLink>
        <CustomLink href='/board'>Board</CustomLink>
      </div>
      <div className='z-10 text-white  w-full h-[200px] bg-slate-900 mt-[200px] flex flex-col justify-center items-start pl-[20px] gap-[10px]'>
        <div className='flex gap-[20px]'>
          <MdOutlineEmail size={25} />
          <a href='mailto:eunwoo1341@gmail.com' className='text-[15px] hover:underline'>
            eunwoo1341@gmail.com
          </a>
        </div>
        <h1 className='text-[15px]'>Copyright ⓒ S. Eunwoo</h1>
      </div>
    </main>
  );
}
