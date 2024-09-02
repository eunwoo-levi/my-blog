import { AuroraBackground } from "@/components/ui/aurora-background";
import { CiLocationOn } from "react-icons/ci";
import Image from "next/image";

export default function Aboutpage() {
  return (
    <main className="relative w-full min-h-screen">
      <AuroraBackground>
        <div className="w-full h-[300px] flex flex-col justify-center items-center gap-[30px]">
          <h1 className="z-10 p-[10px] dark:text-white text-[65px] font-bold items-center shadow-md shadow-purple-500 rounded-md">
            About
          </h1>
          <h2 className="text-transparent text-[30px] font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
            항상 도전하는 정신을 가진 개발자
          </h2>
        </div>
        <div className="w-[230px] h-[400px] flex flex-col justify-start items-center pt-[20px] bg-gray-700 z-20 absolute left-[180px] top-[180px] rounded-2xl">
          <Image
            width={200}
            height={130}
            src={"/profile.jpg"}
            alt="profile pictrue"
            className="rounded-full object-cover"
          />
          <div className="mt-[10px] flex flex-col items-center gap-[8px]">
            <h1 className="text-white text-[24px] font-bold">S. Eun Woo</h1>
            <h1 className="text-[18px] text-gray-300">Frontend Developer</h1>
            <div className="flex gap-[10px] text-gray-300 items-center text-[15px]">
              <CiLocationOn size={20} color="gray" /> Seoul , Daegu
            </div>
          </div>
        </div>
        <div className="text-white flex justify-center items-center z-10 w-full flex-grow bg-gray-900">
          <h1>저에 대한 페이지</h1>
        </div>
      </AuroraBackground>
    </main>
  );
}
