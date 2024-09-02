import { FaGithub } from "react-icons/fa";
import { DarkModeBtn } from "./DarkModeBtn";
import MoveTo from "./MoveTo";
import BackBtn from "./BackBtn";

export default function Navbar() {
  return (
    <div className="fixed z-10 top-0 left-0 w-full h-[60px] border-b border-slate-800 pl-[20px] flex justify-between lg:justify-center lg:ml-0 items-center bg-gray-950 bg-opacity-90">
      <div className="absolute top-1 left-5">
        <BackBtn />
      </div>
      <MoveTo to="/">
        <h1 className="text-white text-[22px]">은우&#39;s 개발자 Blog</h1>
      </MoveTo>

      <div className="lg:absolute right-1 pr-[80px] flex gap-[30px]">
        <MoveTo to="https://github.com/eunwoo-levi">
          <FaGithub size={40} color="white" className="cursor-pointer" />
        </MoveTo>
        <DarkModeBtn />
      </div>
    </div>
  );
}
