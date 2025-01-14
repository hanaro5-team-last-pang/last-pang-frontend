interface CommentProps {
  profileImage: string;
  userName: string;
  lectureName: string;
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
    <div className="flex items-center gap-3">
      <img className="rounded-full" alt="프로필 이미지" src={profileImage} />
      <div className="text-xs">
        <div className="flex justify-between mb-1">
          <div className="flex">
            <div className="font-bold">{userName}</div>{' '}
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
