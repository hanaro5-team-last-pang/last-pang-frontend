import OpenMentoringForm from '@/components/template/OpenMentoringForm';

export default function Page() {
  return (
    <div>
      <div className="text-2xl font-bold p-3 text-center text-ourGreen">
        {' '}
        {'name'} 멘토님, 멘토링 개설을 시작하세요!
      </div>
      <OpenMentoringForm />
    </div>
  );
}
