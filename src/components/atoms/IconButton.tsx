import Link from 'next/link';
import { JSX } from 'react';

interface IconButtonProps {
  icon: JSX.Element;
  label: string;
  count?: number;
  route: string;
  className?: string;
}

export default function IconButton({
  icon,
  label,
  route,
  count,
  className = '',
}: IconButtonProps) {
  return (
    <Link href={route}>
      <div
        className={`flex flex-col items-center justify-center ${className} pb-[100%] rounded-xl border-gray-200 border-[0.5px] 
        shadow-md transition-transform duration-300 ease-in-out transform hover:-translate-y-2 cursor-pointer`}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-2xl mb-3 text-ourOrange">{icon}</div>
          <div className="text-sm font-semibold text-gray-800">{label}</div>
          <div className="text-xs text-gray-600"> {count} Courses </div>
        </div>
      </div>
    </Link>
  );
}
