type Params = Promise<{ id: string }>;

export default async function Page(props: { params: Params }) {
  const { id } = await props.params;

  return (
    <div className="wrapper">
      <div>{id} 번 뉴스</div>
    </div>
  );
}
