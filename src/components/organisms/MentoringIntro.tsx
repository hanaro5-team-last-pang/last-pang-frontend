import { Badge } from '@/components/atoms/Badge';
import IconBadge from '@/components/atoms/IconBadge';
import { BsFillBarChartFill } from 'react-icons/bs';
import { FaClock } from 'react-icons/fa';
import { RiGraduationCapFill } from 'react-icons/ri';

interface MentoringInfoProps {
  mentorImageUrl: string;
  mentorName: string;
  startAt: string;
  takenTime: number;
  currentAttendees: number;
  totalAttendees: number;
  classroomTitle: string;
  tagList: string[];
}

export default function MentoringIntro({
  mentorImageUrl,
  mentorName,
  startAt,
  takenTime,
  currentAttendees,
  totalAttendees,
  classroomTitle,
  tagList,
}: MentoringInfoProps) {
  return (
    <div className="flex justify-between bg-black px-60 py-10">
      <div>
        <div className="flex items-center">
          <Badge
            text="마감 임박"
            className="bg-red-500 text-white text-xs rounded-lg mr-3"
          />
          <div className="flex gap-2">
            <IconBadge
              icon={<FaClock />}
              text={startAt}
              gapLength="2"
              iconClassName="text-amber-500"
              textClassName="text-sm text-gray-400"
            />
            <IconBadge
              icon={<BsFillBarChartFill />}
              text={`${takenTime}시간`}
              gapLength="2"
              iconClassName="text-amber-500"
              textClassName="text-sm text-gray-400"
            />
            <IconBadge
              icon={<RiGraduationCapFill />}
              text={`${currentAttendees}명/${totalAttendees}명`}
              gapLength="2"
              iconClassName="text-amber-500"
              textClassName="text-sm text-gray-400"
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="text-white text-lg my-4 font-bold ml-1 mr-3">
            {classroomTitle}
          </div>
          <div className="text-sm text-gray-400">{`${mentorName} 멘토님`}</div>
        </div>
        <div className="flex items-center mb-4">
          {tagList.map((items, index) => {
            return (
              <Badge
                text={`#${items}`}
                key={index}
                className="bg-blue-500 text-white text-xs rounded-lg mr-3"
              />
            );
          })}
        </div>
      </div>
      <img
        width={200}
        height={150}
        className="rounded-lg"
        src={mentorImageUrl}
        alt="멘토 이미지"
      />
    </div>
  );
}
