import { FaGithub } from "react-icons/fa";
import { DarkModeBtn } from "./DarkModeBtn";
import MoveTo from "./MoveTo";

export default function Navbar() {
  return (
    <div className="relative w-full h-[60px] border-b border-slate-800 flex justify-center items-center">
      <MoveTo to="/posts">
        <h1>은우의 개발자's Blog</h1>
      </MoveTo>

      <div className="absolute right-1 pr-[80px] flex gap-[30px]">
        <MoveTo to="https://github.com/eunwoo-levi">
          <FaGithub size={40} className="cursor-pointer" />
        </MoveTo>
        <DarkModeBtn />
      </div>
    </div>
  );
}
