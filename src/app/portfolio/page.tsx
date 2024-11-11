import React from "react";
import { IconType as ReactIconType } from "react-icons";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineWork } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { AuroraBackground } from "@/components/ui/aurora-background";


import {
  profileData,
  extracurricularData,
  experienceData,
  ProfileProps,
  ActivityProps,
} from "./data";

interface SectionTitleProps {
  icon: ReactIconType;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-[10px] mb-[20px] md:gap-[20px] md:mb-[35px]">
    <Icon size={25} className="md:size-30 text-blue-500" />
    <h1 className="text-indigo-900 text-[24px] md:text-[30px] font-bold">
      {title}
    </h1>
  </div>
);

interface ProfileSectionProps {
  data: ProfileProps;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ data }) => (
  <div className="flex flex-col justify-center gap-y-[30px] md:gap-y-[40px] bg-white p-6 md:p-8 rounded-lg shadow-lg">
    <SectionTitle icon={IoPersonOutline} title="Profile" />
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
      <div className="flex items-center gap-2 md:gap-3">
        <IoPersonOutline size={22} className="md:size-25 text-indigo-600" />
        <h1 className="text-[18px] md:text-[20px]">{data.name}</h1>
      </div>
      <div className="flex items-center gap-2 md:gap-3">
        <CiLocationOn size={22} className="md:size-25 text-indigo-600" />
        <h1 className="text-[18px] md:text-[20px]">{data.location}</h1>
      </div>
      <div className="flex items-center gap-2 md:gap-3">
        <MdOutlineEmail size={22} className="md:size-25 text-indigo-600" />
        <h1 className="text-[18px] md:text-[20px]">{data.email}</h1>
      </div>
      <div className="flex items-center gap-2 md:gap-3">
        <FaUniversity size={22} className="md:size-25 text-indigo-600" />
        <div className="flex flex-col">
          <h1 className="text-[18px] md:text-[20px]">{data.university}</h1>
          <h2 className="text-[16px] md:text-[18px] text-gray-600">
            {data.major}
          </h2>
        </div>
      </div>
    </div>
    <div className="mt-4 md:mt-6">
      <div className="flex items-center gap-2 md:gap-3 text-[20px] md:text-[22px] font-semibold mb-4 text-indigo-800">
        <GiAchievement size={25} className="md:size-25 text-indigo-600" />
        <h1>Achievements</h1>
      </div>
      <ul className="list-disc list-inside space-y-1 md:space-y-2">
        {data.achievements.map((achievement, index) => (
          <li key={index} className="text-[16px] md:text-[18px]">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
    <div className="bg-gray-700/20 flex flex-col items-center gap-4 p-4 rounded-lg mt-8">
      <h1 className="text-indigo-900 text-[24px] md:text-[30px] font-bold">
        ⚡ Main Stack ⚡
      </h1>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <img
          src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
          alt="React"
          className="lg:flex-shrink-0"
        />
        <img
          src="https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white"
          alt="Next JS"
          className="lg:flex-shrink-0"
        />
        <img
          src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white"
          alt="TypeScript"
          className="lg:flex-shrink-0"
        />
        <img
          src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white"
          alt="TailwindCSS"
          className="lg:flex-shrink-0"
        />
        <img
          src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"
          alt="Express.js"
          className="lg:flex-shrink-0"
        />
        <img
          src="https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white"
          alt="MongoDB"
          className="lg:flex-shrink-0"
        />
        <img
          src="https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB"
          alt="Zustand"
          className="lg:flex-shrink-0"
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
  <div className="flex flex-col justify-center gap-y-[30px] md:gap-y-[40px] bg-white p-6 md:p-8 rounded-lg shadow-lg">
    <SectionTitle icon={MdOutlineWork} title={title} />
    <div className="w-full">
      <table
        className="w-full table-fixed divide-y divide-gray-200"
        aria-label={title}
      >
        <thead className="bg-gray-50">
          <tr>
            <th
              scope="col"
              className="w-1/3 px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm text-gray-500 uppercase tracking-wider"
            >
              Activity
            </th>
            <th
              scope="col"
              className="w-1/3 px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm text-gray-500 uppercase tracking-wider"
            >
              Role
            </th>
            <th
              scope="col"
              className="w-1/3 px-2 md:px-4 py-2 md:py-3 text-left text-xs md:text-sm text-gray-500 uppercase tracking-wider"
            >
              Period
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((activity, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
            >
              <td className="px-2 md:px-4 py-2 md:py-4 text-xs md:text-sm font-medium text-gray-900 break-words">
                {activity.title}
              </td>
              <td className="px-2 md:px-4 py-2 md:py-4 text-xs md:text-sm text-gray-500 break-words">
                {activity.role || "-"}
              </td>
              <td className="px-2 md:px-4 py-2 md:py-4 text-xs md:text-sm text-gray-500 break-words">
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
    <main className="w-full min-h-screen">
      <AuroraBackground className="h-auto min-h-screen">
        <div className="w-full min-h-[300px] flex flex-col justify-center items-center gap-[20px] md:gap-[30px] pb-[40px] md:pb-[50px]">
          <h1 className="z-10 p-[5px] md:p-[10px] dark:text-white text-[50px] md:text-[65px] font-bold items-center shadow-md shadow-purple-500 rounded-md">
            About
          </h1>
          <h2 className="text-transparent lg:text-[30px] text-[20px] md:text-[25px] font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
            항상 도전하는 정신을 가진 개발자
          </h2>
        </div>
        <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-8 px-4 lg:px-0 mb-16 md:mb-20 z-20">
          <div className="w-full max-w-screen-lg bg-white py-6 rounded-lg">
            <Image
              width={150}
              height={150}
              src="/profile.webp"
              alt="profile picture"
              className="rounded-full object-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px] mx-auto mb-4"
              priority
            />
            <div className="text-center">
              <h1 className="text-indigo-900 text-[22px] md:text-[24px] font-bold">
                EunWoo Seong
              </h1>
              <h2 className="text-[16px] md:text-[18px] text-indigo-600">
                Frontend Developer
              </h2>
              <div className="flex justify-center gap-[8px] md:gap-[10px] text-indigo-500 items-center text-[14px] md:text-[15px] mt-2">
                <CiLocationOn size={22} /> Seoul (Daegu), South Korea
              </div>
            </div>
          </div>

          <div className="w-full max-w-screen-lg px-4 md:px-10 space-y-6 md:space-y-8">
            <ProfileSection data={profileData} />
            <ActivitySection
              data={extracurricularData}
              title="Extracurricular Activities"
            />
            <ActivitySection data={experienceData} title="Project Experience" />
          </div>
        </div>
      </AuroraBackground>
    </main>
  );
};

export default AboutPage;
