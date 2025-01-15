import Link from 'next/link';

interface NavigationButtonProps {
  label: string;
  route: string;
  className: string;
}

export default function LinkButton({
  label,
  route,
  className = '',
}: NavigationButtonProps) {
  return (
    <Link href={route}>
      <button type="button" className={`${className} px-4 py-2`}>
        {label}
      </button>
    </Link>
  );
}
