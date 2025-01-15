import clsx from 'clsx';
import { JSX } from 'react';

interface IconBadgeProps {
  icon: JSX.Element;
  text: string;
  gapLength: string;
  iconClassName: string;
  textClassName: string;
}
export default function IconBadge({
  icon,
  text,
  gapLength,
  iconClassName,
  textClassName,
}: IconBadgeProps) {
  return (
    <div
      className={clsx('flex items-center gap', {
        [`gap-${gapLength}`]: gapLength,
      })}
    >
      <div className={clsx('', iconClassName)}>{icon}</div>
      <div className={clsx('', textClassName)}>{text}</div>
    </div>
  );
}
