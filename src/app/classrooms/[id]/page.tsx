import ChatComponent from '@/app/classrooms/_component/ChatComponent';
import VideoComponent from '@/app/classrooms/_component/VideoComponent';
import StompConnectionProvider from '@/provider/StompConnectionProvider';

type Params = Promise<{ id: string }>;

export default async function Page(props: { params: Params }) {
  const { id } = await props.params;
  const classroomId: bigint = BigInt(id);

  return (
    <StompConnectionProvider>
      <p>{id}번 멘토링 화상 강의 상세 페이지</p>
      <div className={'grid grid-cols-2'}>
        <div>
          <VideoComponent />
        </div>
        <div>
          <ChatComponent classroomId={classroomId} />
        </div>
      </div>
    </StompConnectionProvider>
  );
}
