import { Users } from 'lucide-react';
import { activities } from '../data';

export default function ExperienceSection() {
  return (
    <section className='border-b border-gray-800 px-6 py-20'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-12 flex items-center gap-3'>
          <Users className='h-8 w-8 text-blue-400' />
          <h2 className='text-4xl font-bold text-white'>Experiences</h2>
        </div>
        <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {activities.map((activity, index) => (
            <div
              key={index}
              className='group relative overflow-hidden rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-gray-950 p-6 transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10'
            >
              <div className='absolute right-0 top-0 text-6xl opacity-5'>{activity.icon}</div>
              <div className='relative'>
                <div className='mb-2 text-3xl'>{activity.icon}</div>
                <h3 className='mb-2 text-xl font-bold text-white transition-colors group-hover:text-blue-400'>
                  {activity.title}
                </h3>
                <p className='mb-2 text-sm text-gray-400'>{activity.role}</p>
                <p className='text-xs text-gray-500'>{activity.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
