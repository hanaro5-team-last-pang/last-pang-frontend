interface BadgeProps {
  text: string;
  className: string;
}

export function Badge({ text, className }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-2 mx-1 font-extralight ${className}`}
    >
      {text}
    </span>
  );
}
