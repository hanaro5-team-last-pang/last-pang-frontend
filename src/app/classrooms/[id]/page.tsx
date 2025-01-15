type Params = Promise<{ id: string }>;

export default async function Page(props: { params: Params }) {
  const { id } = await props.params;

  return <div>{id as string}번 멘토링 화상 강의 상세 페이지</div>;
}
