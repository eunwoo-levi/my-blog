import { IconType as ReactIconType } from 'react-icons';
import Image from 'next/image';
import { CiLocationOn } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { MdOutlineEmail, MdOutlineWork } from 'react-icons/md';
import { FaUniversity } from 'react-icons/fa';
import { GiAchievement } from 'react-icons/gi';
import SpaceBackground from '@/components/backgrounds/SpaceBackground';

import {
  profileData,
  extracurricularData,
  experienceData,
  ProfileProps,
  ActivityProps,
} from './data';

interface SectionTitleProps {
  icon: ReactIconType;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon: Icon, title }) => (
  <div className='flex items-center gap-[10px]'>
    <Icon size={25} className='md:size-30 text-blue-500' />
    <h1 className='text-[24px] font-bold text-indigo-900 md:text-[30px]'>
      {title}
    </h1>
  </div>
);

interface ProfileSectionProps {
  data: ProfileProps;
}

const ProfileSection = ({ data }: ProfileSectionProps) => (
  <div className='flex flex-col justify-center gap-y-[30px] rounded-lg bg-white p-6 shadow-lg md:gap-y-[40px] md:p-8'>
    <SectionTitle icon={IoPersonOutline} title='Profile' />
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6'>
      <div className='flex items-center gap-2 md:gap-3'>
        <IoPersonOutline size={22} className='md:size-25 text-indigo-600' />
        <h1 className='text-[18px] md:text-[20px]'>{data.name}</h1>
      </div>
      <div className='flex items-center gap-2 md:gap-3'>
        <CiLocationOn size={22} className='md:size-25 text-indigo-600' />
        <h1 className='text-[18px] md:text-[20px]'>{data.location}</h1>
      </div>
      <div className='flex items-center gap-2 md:gap-3'>
        <MdOutlineEmail size={22} className='md:size-25 text-indigo-600' />
        <h1 className='text-[18px] md:text-[20px]'>{data.email}</h1>
      </div>
      <div className='flex items-center gap-2 md:gap-3'>
        <FaUniversity size={22} className='md:size-25 text-indigo-600' />
        <div className='flex flex-col'>
          <h1 className='text-[18px] md:text-[20px]'>{data.university}</h1>
          <h2 className='text-[16px] text-gray-600 md:text-[18px]'>
            {data.major}
          </h2>
        </div>
      </div>
    </div>
    <div className='mt-4 md:mt-6'>
      <div className='mb-4 flex items-center gap-2 text-[20px] font-semibold text-indigo-800 md:gap-3 md:text-[22px]'>
        <GiAchievement size={25} className='md:size-25 text-indigo-600' />
        <h1>Achievements</h1>
      </div>
      <ul className='list-inside list-disc space-y-1 md:space-y-2'>
        {data.achievements.map((achievement, index) => (
          <li key={index} className='text-[16px] md:text-[18px]'>
            {achievement}
          </li>
        ))}
      </ul>
    </div>
    <div className='mt-8 flex flex-col items-center gap-4 rounded-lg bg-gray-700/20 p-4'>
      <h1 className='text-[24px] font-bold text-indigo-900 md:text-[30px]'>
        ⚡ Tech Stack ⚡
      </h1>
      <div className='flex flex-wrap items-center justify-center gap-2'>
        <Image
          src='/techStack.webp'
          alt='React'
          width={1000}
          height={200}
          className='h-auto w-full object-contain'
        />
      </div>
    </div>
  </div>
);

interface ActivitySectionProps {
  data: ActivityProps[];
  title: string;
}

const ActivitySection: React.FC<ActivitySectionProps> = ({ data, title }) => (
  <div className='flex flex-col justify-center gap-y-[30px] rounded-lg bg-white p-6 shadow-lg md:gap-y-[40px] md:p-8'>
    <SectionTitle icon={MdOutlineWork} title={title} />
    <div className='w-full'>
      <table
        className='w-full table-fixed divide-y divide-gray-200'
        aria-label={title}
      >
        <thead className='bg-gray-50'>
          <tr>
            <th
              scope='col'
              className='w-1/3 px-2 py-2 text-left text-xs uppercase tracking-wider text-gray-500 md:px-4 md:py-3 md:text-sm'
            >
              Activity
            </th>
            <th
              scope='col'
              className='w-1/3 px-2 py-2 text-left text-xs uppercase tracking-wider text-gray-500 md:px-4 md:py-3 md:text-sm'
            >
              Role
            </th>
            <th
              scope='col'
              className='w-1/3 px-2 py-2 text-left text-xs uppercase tracking-wider text-gray-500 md:px-4 md:py-3 md:text-sm'
            >
              Period
            </th>
          </tr>
        </thead>
        <tbody className='divide-y divide-gray-200 bg-white'>
          {data.map((activity, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
            >
              <td className='break-words px-2 py-2 text-xs font-medium text-gray-900 md:px-4 md:py-4 md:text-sm'>
                {activity.title}
              </td>
              <td className='break-words px-2 py-2 text-xs text-gray-500 md:px-4 md:py-4 md:text-sm'>
                {activity.role || '-'}
              </td>
              <td className='break-words px-2 py-2 text-xs text-gray-500 md:px-4 md:py-4 md:text-sm'>
                {activity.period}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <main className='min-h-screen w-full text-black'>
      <SpaceBackground />
      <div className='my-[60px] flex w-full flex-col items-center justify-center gap-[30px]'>
        <h1 className='z-10 items-center rounded-md p-[5px] text-[50px] font-bold shadow-md shadow-purple-500 dark:text-white md:p-[10px] md:text-[65px]'>
          Portfolio
        </h1>
        <h2 className='bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-[20px] font-semibold text-transparent md:text-[25px] lg:text-[30px]'>
          항상 도전하는 정신을 가진 개발자
        </h2>
      </div>
      <div className='z-20 mb-16 flex w-full flex-col items-center justify-center gap-6 px-4 md:mb-20 md:gap-8 lg:px-0'>
        <div className='w-full max-w-screen-lg rounded-lg bg-white py-6'>
          <Image
            width={150}
            height={150}
            src='/profile.webp'
            alt='profile picture'
            className='mx-auto mb-4 h-[150px] w-[150px] rounded-full object-cover md:h-[200px] md:w-[200px]'
            priority
          />
          <div className='text-center'>
            <h1 className='text-[22px] font-bold text-indigo-900 md:text-[24px]'>
              EunWoo Seong
            </h1>
            <h2 className='text-[16px] text-indigo-600 md:text-[18px]'>
              Frontend Developer
            </h2>
            <div className='mt-2 flex items-center justify-center gap-[8px] text-[14px] text-indigo-500 md:gap-[10px] md:text-[15px]'>
              <CiLocationOn size={22} /> Seoul (Daegu), South Korea
            </div>
          </div>
        </div>

        <div className='w-full max-w-screen-lg space-y-6 px-4 md:space-y-8 md:px-10'>
          <ProfileSection data={profileData} />
          <ActivitySection
            data={extracurricularData}
            title='Extracurricular Activities'
          />
          <ActivitySection data={experienceData} title='Project Experience' />
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
