import TabBody from '@/components/molecules/TabBody';
import MenteeSignUpForm from '@/components/template/MenteeSignUpForm';
import MentorSignUpForm from '@/components/template/MentorSignUpForm';

export default function Page() {
  const tabList = [
    {
      tabTitle: '교육생',
    },
    {
      tabTitle: '멘토',
    },
  ];

  //각각 메뉴에 대한 body list
  const tabPanelList = [<MenteeSignUpForm />, <MentorSignUpForm />];

  return (
    <div>
      <div className="mt-6 px-4">
        <div className="text-center font-bold text-3xl">회원가입</div>
        <TabBody tabList={tabList} tabPanelList={tabPanelList} />
      </div>
    </div>
  );
}
