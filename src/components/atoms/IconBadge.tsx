import clsx from 'clsx';
import { JSX } from 'react';

interface IconBadgeProps {
  icon: JSX.Element;
  text: string;
  gapLength?: string;
  iconClassName?: string;
  textClassName?: string;
  reverse?: boolean;
}
export default function IconBadge({
  icon,
  text,
  gapLength,
  iconClassName,
  textClassName,
  reverse,
}: IconBadgeProps) {
  return (
    <div>
      {!reverse ? (
        <div
          className={clsx('flex items-center gap', {
            [`gap-${gapLength}`]: gapLength,
          })}
        >
          <div className={clsx('', iconClassName)}>{icon}</div>
          <div className={clsx('', textClassName)}>{text}</div>
        </div>
      ) : (
        <div
          className={clsx('flex items-center gap', {
            [`gap-${gapLength}`]: gapLength,
          })}
        >
          <div className={clsx('', textClassName)}>{text}</div>
          <div className={clsx('', iconClassName)}>{icon}</div>
        </div>
      )}
    </div>
  );
}
