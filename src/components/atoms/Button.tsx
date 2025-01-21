import { Button as HeadlessButton } from '@headlessui/react';
import clsx from 'clsx';
import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  type: 'button' | 'submit' | 'reset';
  onClick?: () => void;
  disabled?: boolean;
  text?: string;
  className?: string;
}

export default function Button({
  children,
  type = 'button',
  onClick,
  disabled = false,
  text,
  className,
}: ButtonProps) {
  return (
    <>
      {children ? (
        <HeadlessButton
          type="button"
          onClick={onClick}
          disabled={disabled}
          className={clsx('', className)}
        >
          {children}
        </HeadlessButton>
      ) : (
        <HeadlessButton
          type={type}
          onClick={onClick}
          disabled={disabled}
          className={`
          ${className}
        `}
        >
          {text}
        </HeadlessButton>
      )}
    </>
  );
}
