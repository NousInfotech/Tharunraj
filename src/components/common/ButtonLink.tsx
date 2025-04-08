'use client';

import Link from 'next/link';

interface ButtonLinkProps {
  href: string;
  label: string;
  fontSize?: string;
  fontWeight?: string;
  onClick?: () => void; // Optional
}

const ButtonLink: React.FC<ButtonLinkProps> = ({
  href,
  label,
  fontSize = '',
  fontWeight = '',
  onClick,
}) => {
  return (
    <Link href={href}>
      <button
        onClick={onClick} // will be ignored if undefined
        className={`w-fit bg-[var(--primary-bg)] hover:bg-amber-700 text-white px-4 py-2 rounded-md transition-colors duration-200 ${fontSize} ${fontWeight}`}
      >
        {label}
      </button>
    </Link>
  );
};

export default ButtonLink;
