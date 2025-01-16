import { Badge } from '@/components/atoms/Badge';
import IconBadge from '@/components/atoms/IconBadge';
import { FaRegCalendar, FaRegClock } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import Image from 'next/image';
import Link from 'next/link';

interface CardViewProps {
  title: string;
  imageSrc: string;
  //멘토링 목록의 prop
  mentor_name?: string;
  start_time?: string;
  duration?: number;
  participants?: number;
  max_participants?: number;
  category?: string;
  //금융뉴스카드의 prop
  date?: string;
  description?: string;
  route: string;
}

export default function CardView({
  title,
  imageSrc,
  mentor_name,
  start_time,
  duration,
  participants,
  max_participants,
  category,
  date,
  description,
  route,
}: CardViewProps) {
  return (
    <Link href={route} className={'cursor-pointer'}>
      <div className="flex flex-col w-1/2 border rounded-2xl shadow-md overflow-hidden aspect-[3/4]">
        <div className="relative h-3/5 text-white flex items-center justify-center">
          <div>
            {category && (
              <Badge
                text={category}
                className="rounded-lg absolute top-3 left-3 z-10 bg-red-500"
              />
            )}
          </div>
          <Image src={imageSrc} alt={''} fill />
        </div>
        <div className="flex-1 p-4">
          <div className="text-xl font-bold mb-1">{title}</div>

          {mentor_name && (
            <div className="text-gray-700 mb-2">{mentor_name} 멘토</div>
          )}
          {date && (
            <div className="flex items-center mb-1">
              <IconBadge
                icon={
                  <FaRegCalendar className="text-ourGreen text-lg font-bold" />
                }
                text={date}
                gapLength="2"
                textClassName="text-gray-700"
              />
            </div>
          )}

          {description && <div className="text-gray-700">{description}</div>}

          {start_time && (
            <div className="flex items-center mb-1">
              <IconBadge
                icon={
                  <FaRegCalendar className="text-ourGreen text-lg font-bold" />
                }
                text={start_time}
                gapLength="2"
                textClassName="text-gray-700 mr-3"
              />
              {duration !== undefined && (
                <IconBadge
                  icon={
                    <FaRegClock className="text-ourGreen text-lg font-bold" />
                  }
                  text={`${duration}시간`}
                  gapLength="2"
                  textClassName="text-gray-700 mr-3"
                />
              )}
              {participants !== undefined && max_participants !== undefined && (
                <IconBadge
                  icon={
                    <IoPerson className="text-ourGreen text-lg font-bold" />
                  }
                  text={`${participants}/${max_participants}`}
                  gapLength="2"
                  textClassName="text-gray-700 mr-3"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
