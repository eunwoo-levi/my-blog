import Link from 'next/link';

interface CustomLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function CustomLink({ href, className, children }: CustomLinkProps) {
  return (
    <Link
      href={href}
      className={`${className} relative overflow-hidden`}
      aria-label={`Navigate to ${String(children)} page`}
    >
      <span className='relative z-10'>{children}</span>
    </Link>
  );
}
