import { GraduationCap, Globe } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className='relative overflow-hidden border-b border-gray-800 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-gray-950'>
      <div className='bg-grid-white/[0.02] absolute inset-0 bg-[size:50px_50px]' />
      <div className='relative mx-auto max-w-7xl px-6 py-24 sm:py-32'>
        <div className='text-center'>
          <div className='mb-8 flex justify-center'>
            <div className='relative'>
              <div className='absolute -inset-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-75 blur-lg'></div>
              <div className='relative flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-6xl font-bold text-white shadow-2xl'>
                👨‍💻
              </div>
            </div>
          </div>
          <h1 className='mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl'>
            함께 일하고 싶은 개발자
          </h1>
          <p className='mb-4 text-xl text-gray-400 sm:text-2xl'>Frontend Engineer</p>
          <div className='flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 sm:text-base'>
            <div className='flex items-center gap-2'>
              <GraduationCap className='h-5 w-5 text-blue-400' />
              <span>Computer Science (Double Major: Electronic Engineering)</span>
            </div>
            <div className='flex items-center gap-2'>
              <Globe className='h-5 w-5 text-green-400' />
              <span>Fluent in English 🌍</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
