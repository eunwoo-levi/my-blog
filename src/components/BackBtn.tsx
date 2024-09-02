"use client";
import { IoArrowBack } from "react-icons/io5";

import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  return (
    <button
      onClick={onClickBack}
      className="w-[40px] h-[40px] flex justify-center items-center rounded-lg cursor-pointer hover:bg-slate-700 transition duration-200"
    >
      <IoArrowBack size={35} color="white" />
    </button>
  );
}
