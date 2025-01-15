'use client';

import clsx from 'clsx';
import { BsPersonWorkspace } from 'react-icons/bs';
import { IoIdCardOutline } from 'react-icons/io5';
import { MdOutlineAccountBox } from 'react-icons/md';
import { PiShoppingBagOpen } from 'react-icons/pi';
import { usePathname } from 'next/navigation';

export default function MyPageNavbar() {
  const currentLocation = usePathname();
  console.log(currentLocation);

  return (
    <div className="rounded-lg scrollbar-hide px-2">
      <a
        className={clsx(
          'flex my-4 items-center',
          currentLocation === '/' && 'bg-hanaGreen40'
        )}
        href="/mypage"
      >
        <div className="flex items-center justify-center rounded-lg p-2">
          <BsPersonWorkspace />
        </div>
        <div className="text-sm px-2">나의 공간</div>
      </a>
      <a
        className={clsx(
          'flex my-4 items-center',
          currentLocation === '/mypage/mentorings' && 'bg-hanaGreen40'
        )}
        href="/mypage/mentorings"
      >
        <div className="flex items-center justify-center rounded-lg p-2">
          <PiShoppingBagOpen />
        </div>
        <div className="text-sm px-2">멘토링 기록</div>
      </a>
      <a
        className={clsx(
          'flex my-4 items-center',
          currentLocation === '/mypage/card-settings' && 'bg-hanaGreen40'
        )}
        href="/mypage/card-settings"
      >
        <div className="flex items-center justify-center rounded-lg p-2">
          <IoIdCardOutline />
        </div>
        <div className="text-sm px-2">명함 설정</div>
      </a>
      <a
        className={clsx(
          'flex my-4 items-center',
          currentLocation === '/mypage/account-settings' && 'bg-hanaGreen40'
        )}
        href="/mypage/account-settings"
      >
        <div className="flex items-center justify-center rounded-lg p-2">
          <MdOutlineAccountBox />
        </div>
        <div className="text-sm px-2">계정 설정</div>
      </a>
    </div>
  );
}
