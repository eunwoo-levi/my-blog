import { AuroraBackground } from "@/components/ui/aurora-background";

import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineWork } from "react-icons/md";
import { FaUniversity } from "react-icons/fa";

export default function Aboutpage() {
  return (
    <main className="relative w-full min-h-screen">
      <AuroraBackground>
        <div className="w-full min-h-[300px] flex flex-col justify-center items-center gap-[30px] mt-[850px]">
          <h1 className="z-10 p-[10px] dark:text-white text-[65px] font-bold items-center shadow-md shadow-purple-500 rounded-md">
            About
          </h1>
          <h2 className="text-transparent lg:text-[30px] text-[25px] font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
            항상 도전하는 정신을 가진 개발자
          </h2>
        </div>
        <div className="flex lg:w-[230px] lg:min-h-[400px] w-[180px] min-h-[300px] flex-col justify-start items-center pt-[20px] bg-gray-700 z-20 lg:absolute right-[10px] top-[300px] md:right-[80px] md:top-[380px] lg:left-[100px] lg:top-[180px] rounded-2xl">
          <Image
            width={200}
            height={130}
            src={"/profile.webp"}
            alt="profile pictrue"
            className="rounded-full object-cover w-[140px] h-[140px] lg:w-[200px] lg:h-[200px]"
          />
          <div className="mt-[10px] flex flex-col items-center gap-[8px]">
            <h1 className="text-white text-[24px] font-bold">S. EunWoo</h1>
            <h1 className="text-[18px] text-gray-300">Frontend Developer</h1>
            <div className="flex gap-[10px] text-gray-300 items-center text-[15px]">
              <CiLocationOn size={20} color="gray" /> Seoul , Daegu
            </div>
          </div>
        </div>
        <article className="text-white flex flex-col items-center z-10 w-full pt-[40px] bg-gray-900">
          <section className="flex flex-col p-[60px] bg-gray-500 w-full max-w-[900px] lg:ml-[380px] mx-auto rounded-lg gap-[150px]">
            <div className="flex flex-col justify-center gap-y-[40px]">
              <div className="flex items-center gap-[20px] mb-[35px]">
                <IoPersonOutline size={30} />
                <h1 className="text-black text-[30px] font-bold">Profile</h1>
              </div>
              <div className="flex items-center gap-3">
                <IoPersonOutline size={25} />
                <h1 className="text-[20px]">Seong, Eunwoo</h1>
              </div>
              <div className="">
                <h1 className="text-[20px]">● &nbsp;&nbsp; 2001. 01. 01</h1>
              </div>
              <div className="flex items-center gap-3">
                <CiLocationOn size={25} />
                <h1 className="text-[20px]">
                  Republic of Korea, Daegu (Seoul)
                </h1>
              </div>
              <div className="flex items-center gap-3">
                <MdOutlineEmail size={25} />
                <h1 className="text-[20px]">Eunwoo1341@gmail.com</h1>
              </div>
              <div className="flex gap-3">
                <FaUniversity size={25} />
                <div className="flex flex-col">
                  <h1 className="text-[20px]">Kyungbook National University</h1>
                  <h2 className="text-[20px]"> - Computer Science</h2>
                </div>
              </div>
              <div className="flex flex-col gap-3 text-[20px] ml-[10px]">
                <h1>● &nbsp;&nbsp; TOEIC - 935 </h1>
                <h1>
                  ● &nbsp;&nbsp; Computer Specialist in Spreadsheet & Database
                  (컴퓨터활용능력 1급)
                </h1>
              </div>
            </div>

            <div className="flex flex-col justify-center gap-y-[40px]">
              <div className="flex items-center gap-[20px] mb-[35px]">
                <MdOutlineWork size={30} />
                <h1 className="text-black text-[30px] font-bold">Experience</h1>
              </div>
              <ul className="flex items-center gap-3 text-[20px]">
                <li className="flex flex-col gap-2">
                  <h1>
                    ● &nbsp;&nbsp; Korean Augmentation To the United States
                    Army, KATUSA,
                    <br /> &nbsp;&nbsp; &nbsp;&nbsp; 2020.09.06 - 2023.03.06
                  </h1>
                  <h1>
                    ● &nbsp;&nbsp; 대구 지방환경청 팀 프로젝트 - Frontend &
                    Backend 담당
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 2024.07.01 ~
                  </h1>
                </li>
              </ul>
            </div>
          </section>
        </article>
      </AuroraBackground>
    </main>
  );
}
