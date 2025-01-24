import { getLectureData } from '@/app/(main)/mentorings/actions';
import TabBody from '@/components/molecules/TabBody';
import MentoringIntro from '@/components/organisms/MentoringIntro';
import MentoringDescriptionForm from '@/components/template/MentoringDescriptionForm';
import MentoringFAQForm from '@/components/template/MentoringFAQForm';
import MentoringIntroduceForm from '@/components/template/MentoringIntroduceForm';
import MentoringReviewForm from '@/components/template/MentoringReviewForm';

type Params = Promise<{ id: string }>;

export default async function Page(props: { params: Params }) {
  const { id: lectureId } = await props.params;

  const lectureData = await getLectureData(lectureId);

  // 메뉴 Title
  const tabList = [
    { tabTitle: '멘토링 소개' },
    { tabTitle: '멘토 소개' },
    { tabTitle: '강의 리뷰' },
    { tabTitle: 'FAQs' },
  ];

  //각각 메뉴에 대한 body list
  const tabPanelList = [
    <MentoringDescriptionForm lectureDescription={lectureData.description} />,
    <MentoringIntroduceForm lectureId={lectureId} />,
    <MentoringReviewForm lectureId={lectureId} />,
    <MentoringFAQForm lectureId={lectureId} />,
  ];

  return (
    <>
      <div>
        <MentoringIntro lectureData={lectureData} />
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
