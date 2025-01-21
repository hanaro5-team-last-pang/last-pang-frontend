import MentoringReviewModalForm from '@/components/template/MentoringReviewModalForm';

type Params = Promise<{ id: string }>;

export default async function Page(props: { params: Params }) {
  const { id } = await props.params;
  const classroomId: bigint = BigInt(id);

  return (
    <div
      key={classroomId}
      className="fixed inset-0 flex items-center justify-center rounded-md border border-gray-300"
    >
      <MentoringReviewModalForm />
    </div>
  );
}
