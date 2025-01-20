import TabBody from '@/components/molecules/TabBody';
import MentoringIntro from '@/components/organisms/MentoringIntro';
import MentoringDescriptionForm from '@/components/template/MentoringDescriptionForm';
import MentoringFAQForm from '@/components/template/MentoringFAQForm';
import MentoringIntroduceForm from '@/components/template/MentoringIntroduceForm';
import MentoringReviewForm from '@/components/template/MentoringReviewForm';

type Params = Promise<{ id: string }>;

export default async function Page(props: { params: Params }) {
  const { id } = await props.params;

  // 메뉴 Title
  const tabList = [
    { tabTitle: '멘토링 소개' },
    { tabTitle: '멘토 소개' },
    { tabTitle: '강의 리뷰' },
    { tabTitle: 'FAQs' },
  ];

  //각각 메뉴에 대한 body list
  const tabPanelList = [
    <MentoringDescriptionForm />,
    <MentoringIntroduceForm />,
    <MentoringReviewForm />,
    <MentoringFAQForm />,
  ];

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
      <div className="wrapper w-full items-start mb-10">
        <TabBody
          tabList={tabList}
          tabPanelList={tabPanelList}
          activeText={'text-ourOrange'}
        />
      </div>
    </>
  );
}
