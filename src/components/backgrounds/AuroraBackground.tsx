import React, { ReactNode } from 'react';

interface AuroraBackgroundProps {
  children: ReactNode;
}

export const AuroraBackground = ({ children }: AuroraBackgroundProps) => {
  return <div className={'relative overflow-hidden w-full h-full .aurora-background'}>{children}</div>;
};
