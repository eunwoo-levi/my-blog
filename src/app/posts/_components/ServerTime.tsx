"use client";

import { useEffect, useState } from "react";
import dayjs from "dayjs";

export function ServerTime({ generatedTime }: { generatedTime: string }) {
  const [formattedTime, setFormattedTime] = useState("");

  useEffect(() => {
    const formatted = dayjs(generatedTime).format("MMM DD, YYYY hh:mm A");
    setFormattedTime(formatted);
  }, [generatedTime]);

  return <p className="mt-4 text-sm">Page generated at: {formattedTime}</p>;
}
