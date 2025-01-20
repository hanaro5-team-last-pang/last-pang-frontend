import Image from 'next/image';

export interface CommentProps {
  profileImage: string;
  userName: string;
  lectureName?: string;
  comment: string;
  createAt: string;
}

export default function Comment({
  profileImage,
  userName,
  lectureName,
  comment,
  createAt,
}: CommentProps) {
  return (
    <div className="flex items-start gap-5 mb-3">
      {/* 왼쪽 div (프로필 이미지) */}
      <div className="relative w-20 h-20">
        <Image
          alt="프로필 이미지"
          src={profileImage}
          layout="fill"
          className="rounded-full object-cover"
        />
      </div>

      {/* 오른쪽 div (댓글 내용) */}
      <div className="flex-1 text-sm mt-1">
        <div className="flex justify-between mb-1">
          <div className="flex">
            <div className="font-bold">{userName}</div>
            <div className="ml-3 font-semibold text-gray-600">
              {lectureName}
            </div>
          </div>
          <div>{createAt}</div>
        </div>
        <div>{comment}</div>
      </div>
    </div>
  );
}
