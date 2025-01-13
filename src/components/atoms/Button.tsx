import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';

interface ButtonProps {
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  text?: string;
  className?: string;
  textColor?: string;
}

export default function Button({
  type = 'button',
  onClick,
  disabled = false,
  text,
  className,
  textColor = 'text-white',
}: ButtonProps) {
  return (
    <div
      className={clsx(
        'px-4 py-2 rounded-xl flex justify-center items-center gap-2 transition cursor-not-allowed',
        className
      )}
    >
      <HeadlessButton
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`w-full h-full text-md
          ${textColor}
        `}
      >
        {text}
      </HeadlessButton>
    </div>
  );
}
