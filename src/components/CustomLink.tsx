'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { handleTransition } from '@/app/utils/handleTransition';

interface CustomLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export const CustomLink = ({ href, className, children }: CustomLinkProps) => {
  const router = useRouter();

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    handleTransition(href, router);
  };

  return (
    <Link
      onClick={handleLinkClick}
      href={href}
      className={className}
      aria-label={`Navigate to ${String(children)} page`}
    >
      {children}
    </Link>
  );
};
