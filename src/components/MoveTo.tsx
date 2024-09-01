"use client";

import { useRouter } from "next/navigation";

export default function MoveTo({ to, children }: any) {
  const router = useRouter();

  const onClick = () => {
    router.push(`${to}`);
  };

  return (
    <div onClick={onClick} className="cursor-pointer">
      {children}
    </div>
  );
}
