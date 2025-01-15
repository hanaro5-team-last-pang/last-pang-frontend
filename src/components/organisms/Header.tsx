'use client';

import NavigateButton from '@/components/atoms/NavigateButton';
import AlarmDropdown from '@/components/molecules/AlarmDropdown';
import HeaderPageMenu from '@/components/molecules/HeaderPageMenu';
import HeaderTab from '@/components/molecules/HeaderTab';
import ProfileDropdown from '@/components/molecules/ProfileDropdown';
import { useRouter } from 'next/navigation';

interface HeaderProps {
  loginStatus: boolean;
}

export default function Header({ loginStatus }: HeaderProps) {
  const router = useRouter();
  const items = ['start', 'modify', 'start'];
  const userInfo = {
    username: '정중일',
    userAge: 45,
    userImage: 'https://placehold.co/25x25',
  };

  return (
    <div>
      <div className="flex justify-between items-center sm:px-60">
        <button onClick={() => router.push('/')}>
          <img className="w-32" src="/logo_header.png" alt="로고" />
        </button>
        <HeaderTab />
        {loginStatus ? (
          <div className="flex gap-2">
            <AlarmDropdown
              alarmTitle={items}
              lectureTitle="주식 투자 성공기"
              lectureTime="2024-01-10 15:00"
            />
            <ProfileDropdown userInfo={userInfo} />
          </div>
        ) : (
          <NavigateButton
            label="로그인"
            route="/login"
            className="bg-hanaGreen80 rounded-2xl text-white text-sm"
          />
        )}
      </div>
      <HeaderPageMenu />
    </div>
  );
}
