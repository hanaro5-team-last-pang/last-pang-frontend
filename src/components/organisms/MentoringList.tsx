import { Badge } from '@/components/atoms/Badge';
import IconBadge from '@/components/atoms/IconBadge';
import LinkButton from '@/components/atoms/LinkButton';
import { FaRegCalendar, FaRegClock } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';
import Image from 'next/image';

interface MentoringListProps {
  id: string;
  title: string;
  mentor_name: string;
  start_time: string;
  duration: number;
  participants: number;
  max_participants: number;
  category: string;
  badgeClassName?: string;
  imageSrc: string;
}

export default function MentoringList({
  id,
  title,
  mentor_name,
  start_time,
  duration,
  participants,
  max_participants,
  category,
  badgeClassName,
  imageSrc,
}: MentoringListProps) {
  return (
    <div className="flex border rounded-2xl shadow-md overflow-hidden h-52">
      <div className="relative w-2/5 text-white flex items-center justify-center">
        <div>
          <Badge
            text={category}
            className={`rounded-lg absolute top-3 left-2 z-10 ${badgeClassName}`}
          />
        </div>
        <Image src={imageSrc} alt={''} fill />
      </div>
      <div className="flex-1 p-4">
        <div className="flex flex-col h-full">
          <div className="text-xl font-bold mb-1">{title}</div>
          <div className="text-gray-700 mb-2"> {mentor_name} 멘토</div>
          <div className="flex items-center mb-1">
            <IconBadge
              icon={
                <FaRegCalendar className="text-ourGreen text-lg font-bold" />
              }
              text={start_time}
              gapLength="2"
              textClassName="mr-3 text-sm text-gray-700"
            />
            <IconBadge
              icon={<FaRegClock className="text-ourGreen text-lg font-bold" />}
              text={`${duration}시간`}
              gapLength="2"
              textClassName="mr-3 text-sm text-gray-700"
            />
            <IconBadge
              icon={<IoPerson className="text-ourGreen text-lg font-bold" />}
              text={`${participants}/${max_participants}`}
              gapLength="2"
              textClassName="mr-3 text-sm text-gray-700"
            />
          </div>
          <div className="flex flex-grow items-end justify-end">
            <LinkButton
              label="자세히 보기"
              route={id}
              className="mt-1 font-bold hover:text-ourGreen"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
