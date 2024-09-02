"use client";
import { IoArrowBack } from "react-icons/io5";

import { useRouter } from "next/navigation";

export default function BackBtn() {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  return (
    <button onClick={onClickBack} className="w-[50px] h-[50px] cursor-pointer">
      <IoArrowBack size={35} color="white" />
    </button>
  );
}
