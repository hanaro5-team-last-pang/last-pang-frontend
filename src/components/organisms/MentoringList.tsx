import { Badge } from '@/components/atoms/Badge';
import LinkButton from '@/components/atoms/LinkButton';
import { FaRegCalendar, FaRegClock } from 'react-icons/fa6';
import { IoPerson } from 'react-icons/io5';

interface MentoringListProps {
  title: string;
  mentor_name: string;
  start_time: string;
  duration: number;
  participants: number;
  max_participants: number;
  category: string;
}

export default function MentoringList({
  title,
  mentor_name,
  start_time,
  duration,
  participants,
  max_participants,
  category,
}: MentoringListProps) {
  return (
    <div className="flex border rounded-2xl shadow-md overflow-hidden">
      <div className="relative w-2/5 bg-ourGreen text-white flex items-center justify-center">
        <div>
          <Badge
            text={category}
            className="rounded-lg absolute top-3 left-2 z-10 bg-red-500"
          />
        </div>
        <img
          src="/" // 이미지 경로'
          alt={''}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 p-4 ">
        <div className="text-xl font-bold mb-1">{title}</div>
        <div className="text-gray-700 mb-2"> {mentor_name} 멘토</div>
        <div className="flex items-center text-gray-700 mb-1">
          <FaRegCalendar className="mr-1 text-ourGreen  text-lg font-bold" />{' '}
          {start_time}{' '}
          <FaRegClock className="ml-3 mr-1 text-ourGreen  text-lg font-bold" />{' '}
          {duration}시간{' '}
          <IoPerson className="ml-3 mr-1 text-ourGreen text-lg font-bold" />{' '}
          {participants}/{max_participants}
        </div>
        <div className="flex justify-end">
          <LinkButton
            label="자세히 보기"
            route="/mentorings/{mentoring_id}"
            className="mt-1 font-bold hover:text-ourGreen"
          />
        </div>
      </div>
    </div>
  );
}
