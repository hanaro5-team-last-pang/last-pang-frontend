// TODO: 컴포넌트 추가 시 배경색 지우기
import IconButton from '@/components/atoms/IconButton';
import LinkButton from '@/components/atoms/LinkButton';
import HeaderTab from '@/components/molecules/HeaderTab';
import LandingText from '@/components/molecules/LandingText';
import MainpageText from '@/components/molecules/MainpageText';
import CardView from '@/components/organisms/CardView';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import { cardData, iconButtonData, newsData } from '@/utils/dummy';
import landing from 'public/img_landing.png';
import banner from 'public/img_main_banner.png';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header loginStatus={false}>
        <HeaderTab />
      </Header>
      <div className="header-skeleton"></div>
      <div>
        <div className="relative w-full">
          <Image src={landing} alt="랜딩이미지" layout="responsive" />
          <div className="wrapper absolute w-full top-1/2 left-1/5 transform -translate-y-1/2">
            <LandingText />
          </div>
        </div>

        <div className="wrapper flex flex-col w-full my-20 gap-20 items-center">
          <div className="w-full px-4">
            <MainpageText
              title="카테고리"
              description="카테고리별 멘토링 프로그램을 만나보세요"
              buttonRoute="/mentorings"
            />
            {/* 아이콘 버튼 배치 */}
            <div className="grid grid-cols-5 gap-5 mt-4">
              {iconButtonData.map((data, index) => (
                <IconButton
                  key={index}
                  icon={data.icon}
                  label={data.label}
                  count={data.count}
                  route={data.route}
                />
              ))}
            </div>
          </div>
          <div className="w-full px-4">
            <MainpageText
              title="멘토링 목록"
              description="진행 예정 멘토링 프로그램을 확인하세요"
              buttonRoute="/mentorings"
            />
            {/* 카드 뷰 배치 */}
            <div className="grid grid-cols-3 gap-6 gap-y-8 mt-4">
              {cardData.map((card, index) => (
                <CardView key={index} {...card} />
              ))}
            </div>
          </div>
          {/* 회원가입 배너 */}
          <div className="relative w-full px-4">
            <Image src={banner} alt="배너 이미지" />
            <div className="absolute right-16 top-1/2 transform -translate-y-1/2">
              <LinkButton
                label={'회원가입'}
                className={
                  'rounded-full bg-ourOrange text-white text-sm font-medium items-center'
                }
                route={'/signup'}
              />
            </div>
          </div>
          <div className="w-full px-4">
            <MainpageText
              title="금융 NEWS"
              description="최신 금융 이슈에 대해 알아보세요"
              buttonRoute="/news"
            />
            <div className="grid grid-cols-3 gap-6 mt-4">
              {newsData.map((card, index) => (
                <CardView key={index} {...card} />
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
