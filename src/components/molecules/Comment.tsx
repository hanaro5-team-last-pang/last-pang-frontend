import dayjs from 'dayjs';
import Image from 'next/image';

export interface CommentProps {
  profileImageUrl?: string;
  userName?: string;
  lectureTitle?: string;
  content?: string;
  createdAt?: Date;
}

export default function Comment({
  profileImageUrl,
  userName,
  lectureTitle,
  content,
  createdAt,
}: CommentProps) {
  return (
    <div className="flex items-start gap-5 mb-3">
      {/* 왼쪽 div (프로필 이미지) */}
      <div className="relative w-20 h-20">
        {profileImageUrl ? (
          <Image
            alt="프로필 이미지"
            src={profileImageUrl}
            layout="fill"
            className="rounded-full object-cover"
          />
        ) : (
          <Image
            alt={`${userName} 이미지`}
            src={'/img_landing.png'}
            layout="fill"
            className="rounded-full object-cover"
          />
        )}
      </div>

      {/* 오른쪽 div (댓글 내용) */}
      <div className="flex-1 text-sm mt-1">
        <div className="flex justify-between mb-1">
          <div className="flex">
            <div className="font-bold">{userName}</div>
            <div className="ml-3 font-semibold text-gray-600">
              {lectureTitle}
            </div>
          </div>
          <div>{dayjs(createdAt).format('YYYY년 MM월 DD일')}</div>
        </div>
        <div>{content}</div>
      </div>
    </div>
  );
}
