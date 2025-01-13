interface BadgeProps {
  text: string;
  bgColor: string;
  textColor: string;
  rounded: string;
}

export function Badge({ text, bgColor, textColor, rounded }: BadgeProps) {
  return (
    <span
      className={`inline-block px-3 py-2 mx-1 font-semibold ${rounded}`}
      style={{
        backgroundColor: bgColor,
        color: textColor,
      }}
    >
      {text}
    </span>
  );
}
