import { getMentorings } from '@/app/(main)/mypage/actions';
import LinkButton from '@/components/atoms/LinkButton';
import MentoringListTable from '@/components/organisms/MentoringListTable';

export default async function Page() {
  const mentorings = await getMentorings();

  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="text-ourGreen m-2 text-2xl font-bold">
          최근 멘토링 기록
        </div>
        <LinkButton
          label="멘토링 개설하기"
          route={'/mypage/open-mentoring'}
          className="rounded-full bg-ourGreen text-sm text-white"
        />
      </div>
      <div className="flex justify-center mt-3 mb-10 px-2">
        <MentoringListTable mentorings={mentorings} />
      </div>
    </div>
  );
}
