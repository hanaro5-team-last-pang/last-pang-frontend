// TODO: 컴포넌트 추가 시 배경색 지우기
import HeaderTab from '@/components/molecules/HeaderTab';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';

export default function Home() {
  return (
    <>
      <Header loginStatus={false}>
        <HeaderTab />
      </Header>
      <div className="header-skeleton"></div>
      <div>
        {/*TODO: 환영합니다 어쩌구 컴포넌트 추가*/}
        <div className="bg-slate-700 font-[family-name:var(--font-geist-sans)]">
          환영합니다.
        </div>
        <div className="bg-gray-500 wrapper flex flex-col w-full items-center">
          {/*TODO: 컴포넌트 추가*/}
          <div className="bg-slate-800">검색</div>
          <div className="bg-slate-800">키테고리</div>
          <div className="bg-slate-800">강의 목록</div>
          <div className="bg-slate-800">교육생 후기</div>
          <div className="bg-slate-800">회원 가입</div>
          <div className="bg-slate-800">최근 금융 NEWS</div>
        </div>
        <Footer />
      </div>
    </>
  );
}
