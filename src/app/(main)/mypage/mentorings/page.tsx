import MentoringListTable from '@/components/organisms/MentoringListTable';

export default function Page() {
  return (
    <div className="w-full pl-32">
      <div className="text-ourGreen my-3 font-bold">최근 멘토링 기록</div>
      <div className="flex justify-center">
        <MentoringListTable />
      </div>
    </div>
  );
}
