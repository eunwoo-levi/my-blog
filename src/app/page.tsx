import Earth from "@/components/Earth";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex flex-col">
      <StarsBackground />
      <ShootingStars />
      <div className="relative flex flex-col items-center justify-between px-[50px] lg:flex-row">
        <div className="flex flex-col">
          <h1 className="font-bold text-[50px] pl-[60px] mb-[40px] bg-gradient-to-r from-purple-400 via-pink-500 to-red-700 rounded-lg text-transparent bg-clip-text">
            PORTFOLIO <br />
            Frontend Web Developer
          </h1>
          <div className="">
            <div className="border border-slate-800 mb-[50px]" />
            <h2 className="text-[25px] mb-[20px] font-semibold">
              Welcome to My Portfolio.
            </h2>
            <h3 className="text-[20px]">
              I am committed to growing as a skilled and professional frontend
              developer.
              <br />
              I dedicate myself to learning new technologies and mastering them,
              prioritizing User eXperience.
              <br /> <br />
              While my primary focus is on Frontend development, <br />
              I am also expanding my expertise in Backend technologies.
              <br /> <br />
              Additionally, I am fluent in English and capable of collaborating
              effectively on international projects.
            </h3>
          </div>
        </div>
        <div className="relative flex flex-col items-center justify-between lg:flex-row w-full overflow-hidden lg:pl-[40px]">
          <Earth className="w-full h-auto" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-[30px] mt-[150px]">
        <Link
          href={"/about"}
          className="flex justify-center items-center w-[300px] lg:w-[500px] h-[50px] border  rounded-3xl transform duration-200 hover:bg-slate-700 hover:bg-opacity-30 hover:scale-110 cursor-pointer"
        >
          About Me
        </Link>
        <Link
          href={"/posts"}
          className="flex justify-center items-center w-[300px] lg:w-[500px] h-[50px] border  rounded-3xl transform duration-200 hover:bg-slate-700 hover:bg-opacity-30 hover:scale-110 cursor-pointer"
        >
          Blog
        </Link>
        <Link
          href={"/board"}
          className="flex justify-center items-center w-[300px] lg:w-[500px] h-[50px] border  rounded-3xl transform duration-200 hover:bg-slate-700 hover:bg-opacity-30 hover:scale-110 cursor-pointer"
        >
          Board
        </Link>
      </div>
      <div className="z-10 text-white  w-full h-[200px] bg-slate-900 mt-[200px] flex flex-col justify-center items-start pl-[20px] gap-[10px]">
        <div className="flex gap-[20px]">
          <MdOutlineEmail size={25} />
          <h1 className="text-[15px]">eunwoo1341@gmail.com</h1>
        </div>
        <h1 className="text-[15px]">Copyright ⓒ S. Eunwoo</h1>
      </div>
    </main>
  );
}
