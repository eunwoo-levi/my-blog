import React from "react";
import { IconType as ReactIconType } from "react-icons";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail, MdOutlineWork } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";

const AuroraBackground = dynamic(
  () =>
    import("@/components/ui/aurora-background").then(
      (mod) => mod.AuroraBackground
    ),
  { ssr: false, loading: () => <div>Loading...</div> }
);

import {
  profileData,
  extracurricularData,
  experienceData,
  ProfileProps,
  ActivityProps,
} from "./data";
import dynamic from "next/dynamic";

interface SectionTitleProps {
  icon: ReactIconType;
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ icon: Icon, title }) => (
  <div className="flex items-center gap-[20px] mb-[35px]">
    <Icon size={30} color="blue" />
    <h1 className="text-indigo-900 text-[30px] font-bold">{title}</h1>
  </div>
);

interface ProfileSectionProps {
  data: ProfileProps;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ data }) => (
  <div className="flex flex-col justify-center gap-y-[40px] bg-white p-4 md:p-8 rounded-lg shadow-lg">
    <SectionTitle icon={IoPersonOutline} title="Profile" />
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="flex items-center gap-3">
        <IoPersonOutline size={25} className="text-indigo-600" />
        <h1 className="text-[20px]">{data.name}</h1>
      </div>
      <div className="flex items-center gap-3">
        <CiLocationOn size={25} className="text-indigo-600" />
        <h1 className="text-[20px]">{data.location}</h1>
      </div>
      <div className="flex items-center gap-3">
        <MdOutlineEmail size={25} className="text-indigo-600" />
        <h1 className="text-[20px]">{data.email}</h1>
      </div>
      <div className="flex items-center gap-3">
        <FaUniversity size={25} className="text-indigo-600" />
        <div className="flex flex-col">
          <h1 className="text-[20px]">{data.university}</h1>
          <h2 className="text-[18px] text-gray-600">{data.major}</h2>
        </div>
      </div>
    </div>
    <div className="mt-6">
      <div className="flex items-center gap-3 text-[22px] font-semibold mb-4 text-indigo-800">
        <GiAchievement size={25} className="text-indigo-600" />
        <h1>Achievements</h1>
      </div>
      <ul className="list-disc list-inside space-y-2">
        {data.achievements.map((achievement, index) => (
          <li key={index} className="text-[18px]">
            {achievement}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

interface ActivitySectionProps {
  data: ActivityProps[];
  title: string;
}

const ActivitySection: React.FC<ActivitySectionProps> = ({ data, title }) => (
  <div className="flex flex-col justify-center gap-y-[40px] bg-white p-4 md:p-8 rounded-lg shadow-lg">
    <SectionTitle icon={MdOutlineWork} title={title} />
    <table className="min-w-full divide-y divide-gray-200" aria-label={title}>
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider"
          >
            Activity
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider"
          >
            Role
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs text-gray-500 uppercase tracking-wider"
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
            <td className="px-6 py-4 whitespace-normal">
              <div className="text-sm font-medium text-gray-900">
                {activity.title}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">
                {activity.role || "-"}
              </div>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              <div className="text-sm text-gray-500">{activity.period}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const AboutPage: React.FC = () => {
  return (
    <main className="w-full min-h-screen ">
      <AuroraBackground className="h-auto min-h-screen">
        <div className="w-full min-h-[300px] flex flex-col justify-center items-center gap-[30px] pb-[50px] ">
          <h1 className="z-10 p-[10px] dark:text-white text-[65px] font-bold items-center shadow-md shadow-purple-500 rounded-md">
            About
          </h1>
          <h2 className="text-transparent lg:text-[30px] text-[25px] font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
            항상 도전하는 정신을 가진 개발자
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-start gap-8 px-4 lg:px-0 mb-20 z-20">
          <div className="mx-auto lg:w-1/4 bg-white p-6 rounded-lg shadow-lg">
            <Image
              width={200}
              height={200}
              src="/profile.webp"
              alt="profile picture"
              className="rounded-full object-cover w-[200px] h-[200px] mx-auto mb-4"
              priority
            />
            <div className="text-center">
              <h1 className="text-indigo-900 text-[24px] font-bold">
                S. EunWoo
              </h1>
              <h2 className="text-[18px] text-indigo-600">
                Frontend Developer
              </h2>
              <div className="flex justify-center gap-[10px] text-indigo-500 items-center text-[15px] mt-2">
                <CiLocationOn size={20} /> Seoul , Daegu
              </div>
            </div>
          </div>
          <div className="lg:w-3/4 space-y-8">
            <ProfileSection data={profileData} />
            <ActivitySection
              data={extracurricularData}
              title="Extracurricular Activities"
            />
            <ActivitySection data={experienceData} title="Experience" />
          </div>
        </div>
      </AuroraBackground>
    </main>
  );
};

export default AboutPage;
