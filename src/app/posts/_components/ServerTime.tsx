"use client";

import { useEffect, useState } from "react";

export function ServerTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const now = new Date();
    setTime(
      `${now.toLocaleDateString()} ${now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      })}`
    );
  }, []);

  return <p className="mt-4 text-sm">Page generated at: {time}</p>;
}
