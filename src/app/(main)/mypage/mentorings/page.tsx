import LinkButton from '@/components/atoms/LinkButton';
import MentoringListTable from '@/components/organisms/MentoringListTable';

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex justify-between items-center">
        <div className="text-ourGreen my-3 text-xl font-bold">
          최근 멘토링 기록
        </div>
        <LinkButton
          label="멘토링 개설하기"
          route={'/mypage/open-mentoring'}
          className="rounded-full bg-ourGreen text-sm text-white"
        />
      </div>
      <div className="flex justify-center mb-10 px-2">
        <MentoringListTable />
      </div>
    </div>
  );
}
