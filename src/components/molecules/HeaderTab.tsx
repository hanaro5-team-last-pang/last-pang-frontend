'use client';

import Tab from '@/components/atoms/Tab';
import { PiArrowSquareOut, PiUser } from 'react-icons/pi';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';

export default function HeaderTab() {
  const router = useRouter();
  const currentLocation = usePathname();
  const [showTabComponent, setShowTabComponent] = useState(false);
  const handleShowComponent = () => {
    if (showTabComponent) {
      setShowTabComponent(false);
    } else {
      setShowTabComponent(true);
    }
  };

  const tabList = [
    {
      tabTitle: '홈',
      tabOnClickEvent: () => router.push('/'),
      tabListClassName:
        currentLocation === '/' ? 'bg-gray-100 text-hanaGreen' : '',
    },
    {
      tabTitle: '멘토링',
      tabOnClickEvent: () => router.push('/mentorings'),
      tabListClassName:
        currentLocation === '/mentorings' ? 'bg-gray-100 text-hanaGreen' : '',
    },
    {
      tabTitle: '금융 뉴스',
      tabOnClickEvent: () => router.push('/news'),
      tabListClassName:
        currentLocation === '/news' ? 'bg-gray-100 text-hanaGreen' : '',
    },
    {
      tabTitle: '마이 페이지',
      tabOnClickEvent: handleShowComponent,
      tabComponent: (
        <div>
          {showTabComponent && (
            <div className="rounded-lg drop-shadow scrollbar-hide border border-gray-200 px-2">
              <a className="flex my-2 items-center" href="/support">
                <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
                  <PiUser />
                </div>
                <div className="text-xs px-2">나의 공간</div>
              </a>
              <a className="flex my-2 items-center" href="/support">
                <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
                  <PiArrowSquareOut />
                </div>
                <div className="text-xs px-2">멘토링 기록</div>
              </a>
              <a className="flex my-2 items-center" href="/support">
                <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
                  <PiArrowSquareOut />
                </div>
                <div className="text-xs px-2">내 지갑</div>
              </a>
              <a className="flex my-2 items-center" href="/support">
                <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
                  <PiArrowSquareOut />
                </div>
                <div className="text-xs px-2">계정 설정</div>
              </a>
            </div>
          )}
        </div>
      ),
    },
  ];

  return (
    <div>
      <Tab tabList={tabList}></Tab>
    </div>
  );
}
