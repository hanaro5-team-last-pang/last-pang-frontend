import Image from 'next/image';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}
export default function BaseErrorWrapper(props: Props) {
  const { children } = props;
  return (
    <div className="max-w-screen-md mx-auto px-8">
      <div className="relative aspect-video mt-16 sm:mt-24 md:mt-32">
        <Image src={'/error.png'} fill alt="error image" />
      </div>
      {children}
    </div>
  );
}
