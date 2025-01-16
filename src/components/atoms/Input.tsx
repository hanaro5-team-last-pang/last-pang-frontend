import { ReactNode } from 'react';

interface InputProps {
  name?: string;
  label: string;
  type?: string;
  placeholder: string;
  invalid?: boolean;
  autoFocus?: boolean;
  labelClassName?: string;
  className?: string;
  defaultValue?: string;
  children?: ReactNode;
}

export default function Input({
  name,
  label,
  type = 'text',
  placeholder,
  invalid = false,
  autoFocus = false,
  className = '',
  labelClassName,
  defaultValue,
  children,
}: InputProps) {
  return (
    <div>
      <div>
        <label className={`block mb-1 ${labelClassName}`}> {label}</label>
        {children ? (
          <div
            className={`flex items-center w-full rounded-lg px-3 py-2 border focus:ring-2 focus:ring-ourGreen focus:outline-none ${className}`}
          >
            <input
              name={name}
              type={type}
              aria-invalid={invalid}
              placeholder={placeholder}
              defaultValue={defaultValue}
              autoFocus={autoFocus}
              className="w-full"
            />
            {children}
          </div>
        ) : (
          <input
            name={name}
            type={type}
            aria-invalid={invalid}
            placeholder={placeholder}
            defaultValue={defaultValue}
            autoFocus={autoFocus}
            className={`w-full rounded-lg px-3 py-2 border focus:ring-2 focus:ring-ourGreen focus:outline-none ${className}`}
          />
        )}
      </div>
    </div>
  );
}
