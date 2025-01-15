'use client';

import { useRouter } from 'next/navigation';

interface NavigationButtonProps {
  label: string;
  route: string;
  className: string;
}

export default function NavigateButton({
  label,
  route,
  className = '',
}: NavigationButtonProps) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(route)}
      className={`${className} px-4 py-2`}
    >
      {label}
    </button>
  );
}
