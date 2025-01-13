import { Checkbox as HeadlessCheckbox } from '@headlessui/react';
import clsx from 'clsx';

interface CheckboxProps {
  checked: boolean;
  setChecked: (checked: boolean) => void;
  text: string;
  className?: string;
}

export default function Checkbox({
  checked,
  setChecked,
  text,
  className,
}: CheckboxProps) {
  return (
    <div className="flex items-center">
      <HeadlessCheckbox
        checked={checked}
        onChange={setChecked}
        className={clsx(
          `group block size-4 rounded border bg-white mx-1`,
          className
        )}
      >
        <svg
          className="stroke-white opacity-0 group-data-[checked]:opacity-100"
          viewBox="0 0 14 14"
          fill="none"
        >
          <path
            d="M3 8L6 11L11 3.5"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </HeadlessCheckbox>
      {text}
    </div>
  );
}
