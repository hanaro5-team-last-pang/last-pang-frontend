import Comment from '@/components/molecules/Comment';
import { commentsData, reviews_percent } from '@/utils/dummy';
import { FaStar } from 'react-icons/fa6';

//실제 평점 받아오기
const rating = 4.8;

export default function MentoringReviewForm() {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <FaStar
      key={index}
      className={`h-5 w-5 ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
    />
  ));

  return (
    <div className="p-10 w-full">
      <div className="flex items-center gap-3">
        <h2 className="text-3xl font-bold mb-4">{rating.toFixed(1)}</h2>
        <div className="flex flex-col items-start mb-4">
          <div className="flex mb-1">{stars}</div>
          <span className="text-sm text-gray-700">
            전체 리뷰 수 {commentsData.length}개
          </span>
        </div>
      </div>
      <div className="mb-6">
        {reviews_percent.map((review) => (
          <div key={review.stars} className="flex items-center mb-2 gap-2">
            <div className="flex mr-2">
              {Array.from({ length: review.stars }, (_, index) => (
                <FaStar key={index} className="h-5 w-5 text-yellow-400" />
              ))}
              {Array.from({ length: 5 - review.stars }, (_, index) => (
                <FaStar
                  key={index + review.stars}
                  className="h-5 w-5 text-gray-300"
                />
              ))}
            </div>
            <span className="w-10 mr-2">{review.percentage}%</span>
            <div className="flex-1 bg-gray-300 rounded-full h-2 relative">
              <div
                className="absolute top-0 left-0 h-2 bg-yellow-400 rounded-full"
                style={{ width: `${review.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-300 pt-4">
        {commentsData.map((comment, index) => (
          <div key={index}>
            {index > 0 && <div className="border-t border-gray-300 pt-4" />}
            <Comment {...comment} />
          </div>
        ))}
      </div>
    </div>
  );
}
