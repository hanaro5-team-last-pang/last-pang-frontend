import React, { forwardRef, ReactNode } from 'react';

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

// forwardRef를 사용하여 ref를 전달받을 수 있도록 수정
const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
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
    },
    ref
  ) => {
    return (
      <div>
        <div>
          <label className={`block mb-1 ${labelClassName}`}>{label}</label>
          {children ? (
            <div
              className={`flex items-center w-full rounded-lg p-2 border ${className}`}
            >
              <input
                ref={ref}
                name={name}
                type={type}
                aria-invalid={invalid}
                placeholder={placeholder}
                defaultValue={defaultValue}
                autoFocus={autoFocus}
                className="w-full focus:outline-none"
              />
              {children}
            </div>
          ) : (
            <input
              ref={ref}
              name={name}
              type={type}
              aria-invalid={invalid}
              placeholder={placeholder}
              defaultValue={defaultValue}
              autoFocus={autoFocus}
              className={`w-full rounded-lg p-2 border focus:outline-none ${className}`}
            />
          )}
        </div>
      </div>
    );
  }
);

export default Input;
