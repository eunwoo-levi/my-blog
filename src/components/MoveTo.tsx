"use client";

import { useRouter } from "next/navigation";

export default function MoveTo({ to, children }: any) {
  const router = useRouter();

  const onClick = () => {
    router.push(`${to}`);
  };

  return (
    <div
      onClick={onClick}
      className="z-10 flex justify-center items-center cursor-pointer hover:bg-slate-700 p-[4px] rounded-lg transition duration-200"
    >
      {children}
    </div>
  );
}
