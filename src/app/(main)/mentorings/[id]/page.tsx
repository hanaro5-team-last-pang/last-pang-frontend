import TabBody from '@/components/molecules/TabBody';
import MentoringIntro from '@/components/organisms/MentoringIntro';
import { tabList, tabPanelList } from '@/utils/dummy';

type Params = Promise<{ id: string }>;

export default async function Page(props: { params: Params }) {
  const { id } = await props.params;

  return (
    <>
      <div>
        <MentoringIntro
          mentorImageUrl={'/img_landing.png'}
          mentorName={'한성민'}
          startAt={'2025-01-23'}
          takenTime={1}
          currentAttendees={3}
          totalAttendees={5}
          classroomTitle={'어서오세요 동물의 숲'}
          tagTitle={'마감임박'}
          tagList={['하이', '방가']}
        />
      </div>
      <div className="wrapper w-full items-start">
        <TabBody
          tabList={tabList}
          tabPanelList={tabPanelList}
          activeText={'text-ourOrange'}
        />
        <div> {id}번 상세페이지 입니다. </div>
      </div>
    </>
  );
}
