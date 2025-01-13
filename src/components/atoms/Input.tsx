interface InputProps {
  label: string;
  type?: string;
  placeholder: string;
  invalid?: boolean;
  autoFocus?: boolean;
  className?: string;
}

export function Input({
  label,
  type = 'text',
  placeholder,
  invalid = false,
  autoFocus = false,
  className = '',
}: InputProps) {
  return (
    <form>
      <div>
        <label className="block mb-1"> {label}</label>
        <input
          type={type}
          aria-invalid={invalid}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className={`w-full rounded-lg px-3 py-2 border focus:ring-2 focus:ring-emerald-300 focus:outline-none ${className}`}
        />
      </div>
    </form>
  );
}
