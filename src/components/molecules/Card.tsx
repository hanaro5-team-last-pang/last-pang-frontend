import clsx from 'clsx';
import Image from 'next/image';

interface CardProps {
  cardColor: string;
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
}
export default function Card({
  cardColor,
  cardTitle,
  cardDescription,
  cardImage,
}: CardProps) {
  return (
    <div className="w-80 h-36 p-2">
      <div
        className={clsx(
          'rounded-lg drop-shadow-md p-3 flex flex-col h-full',
          cardColor
        )}
      >
        <div className="text-xl font-bold">{cardTitle}</div>
        <div className="ml-1 my-1 font-fontLight">{cardDescription}</div>
        <div className="absolute h-20 w-20 right-0 bottom-0">
          <Image src={cardImage} alt="카드 이미지" fill />
        </div>
      </div>
    </div>
  );
}
