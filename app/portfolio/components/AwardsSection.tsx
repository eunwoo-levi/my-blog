import { Trophy } from 'lucide-react';
import { awards } from '../data';

export default function AwardsSection() {
  return (
    <section className='border-b border-gray-800 px-6 py-20'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-12 flex items-center gap-3'>
          <Trophy className='h-8 w-8 text-yellow-400' />
          <h2 className='text-4xl font-bold text-white'>Awards</h2>
        </div>
        <div className='grid gap-6 md:grid-cols-3'>
          {awards.map((award, index) => (
            <div
              key={index}
              className='group rounded-2xl border border-gray-800 bg-gradient-to-br from-yellow-950/20 to-gray-950 p-6 transition-all duration-300 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10'
            >
              <div className='mb-4 text-5xl'>{award.prize.split(' ')[0]}</div>
              <h3 className='mb-2 text-lg font-bold text-white'>{award.title}</h3>
              <p className='text-sm font-semibold text-yellow-400'>{award.prize}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
