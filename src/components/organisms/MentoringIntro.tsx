import { Badge } from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import IconBadge from '@/components/atoms/IconBadge';
import { BsFillBarChartFill } from 'react-icons/bs';
import { FaClock } from 'react-icons/fa';
import { RiGraduationCapFill } from 'react-icons/ri';
import Image from 'next/image';

interface MentoringInfoProps {
  mentorImageUrl: string;
  mentorName: string;
  startAt: string;
  takenTime: number;
  currentAttendees: number;
  totalAttendees: number;
  classroomTitle: string;
  tagTitle: string;
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
  tagTitle,
  tagList,
}: MentoringInfoProps) {
  return (
    <div>
      <div className="w-full bg-black py-5">
        <div className="wrapper flex justify-between items-center">
          <div className="flex-1 flex flex-col">
            <div className="flex items-end">
              <Badge
                text={tagTitle}
                className="bg-red-500 text-white text-sm rounded-lg mr-3"
              />
              <div className="flex gap-3">
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
            <div className="flex flex-col items-start ml-1">
              <div className="text-white text-2xl mt-4 font-bold">
                {classroomTitle}
              </div>
              <div className="text-lg text-gray-400 my-2">{`${mentorName} 멘토님`}</div>
            </div>
            <div className="flex items-start my-2">
              {tagList.map((items, index) => {
                return (
                  <Badge
                    text={`#${items}`}
                    key={index}
                    className="bg-blue-500 text-white text-sm rounded-lg mr-3"
                  />
                );
              })}
            </div>
          </div>
          {/* 오른쪽 div */}
          <div className="flex flex-col items-center rounded-2xl bg-white border border-gray-400 overflow-hidden relative">
            <div className="relative w-[280px] h-[210px]">
              <Image
                src={mentorImageUrl}
                alt="멘토 명함"
                layout="fill"
                className="object-fit"
              />
              <div className="absolute bottom-0 right-0 p-2">
                <Button
                  type="submit"
                  text="수강 신청"
                  className="bg-ourOrange text-white rounded-full py-2 px-4 mr-3 mb-1 hover:bg-orange-600 transition"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
