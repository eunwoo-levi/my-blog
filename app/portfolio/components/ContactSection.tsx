import { Mail, Github } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className='border-t border-gray-800 px-6 py-20'>
      <div className='mx-auto max-w-7xl text-center'>
        <div className='mb-8 flex items-center justify-center gap-3'>
          <Mail className='h-8 w-8 text-blue-400' />
          <h2 className='text-4xl font-bold text-white'>Let&apos;s Connect</h2>
        </div>
        <p className='mb-8 text-xl text-gray-400'>
          함께 멋진 서비스를 만들어가고 싶으시다면 편하게 언제든지 연락주세요!
        </p>
        <div className='flex flex-wrap items-center justify-center gap-4'>
          <a
            href='https://github.com/eunwoo-levi'
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50'
          >
            <Github className='h-5 w-5' />
            GitHub
          </a>
          <a
            href='mailto:your-email@example.com'
            className='inline-flex items-center gap-2 rounded-xl border border-gray-700 bg-gray-900 px-8 py-4 font-semibold text-white transition-all hover:border-blue-500 hover:bg-gray-800'
          >
            <Mail className='h-5 w-5' />
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
