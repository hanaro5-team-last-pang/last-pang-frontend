import { Badge } from '@/components/atoms/Badge';
import { FaRegCalendar, FaRegClock } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';

interface CardViewProps {
  title: string;
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
}

export default function CardView({
  title,
  mentor_name,
  start_time,
  duration,
  participants,
  max_participants,
  category,
  date,
  description,
}: CardViewProps) {
  return (
    <div className="flex flex-col h-full border rounded-2xl shadow-md overflow-hidden">
      <div className="relative w-full h-1/2 bg-ourGreen text-white flex items-center justify-center">
        <div>
          {category && (
            <Badge
              text={category}
              className="rounded-lg absolute top-3 left-3 z-10 bg-red-500"
            />
          )}
        </div>
        <img
          src="/" // 이미지 경로
          className="w-full h-full object-cover"
          alt="이벤트 이미지"
        />
      </div>
      <div className="flex-1 p-4">
        <div className="text-xl font-bold mb-1">{title}</div>

        {mentor_name && (
          <div className="text-gray-700 mb-2">{mentor_name} 멘토</div>
        )}
        {date && (
          <div className="flex items-center text-gray-700 mb-2">
            <FaRegCalendar className="mr-1 text-ourGreen text-lg font-bold" />
            {date}{' '}
          </div>
        )}
        {description && <div className="text-gray-700 mb-2">{description}</div>}

        {start_time && (
          <div className="flex items-center text-gray-700 mb-1">
            <FaRegCalendar className="mr-1 text-ourGreen text-lg font-bold" />
            {start_time}{' '}
            {duration !== undefined && (
              <>
                <FaRegClock className="ml-3 mr-1 text-ourGreen text-lg font-bold" />
                {duration}시간{' '}
              </>
            )}
            {participants !== undefined && max_participants !== undefined && (
              <>
                {' '}
                <IoPerson className="ml-3 mr-1 text-ourGreen text-lg font-bold" />
                {participants}/{max_participants}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
