import NavigateButton from '@/components/atoms/NavigateButton';
import AlarmDropdown from '@/components/molecules/AlarmDropdown';
import ProfileDropdown from '@/components/molecules/ProfileDropdown';
import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  loginStatus: boolean;
}

export default function Header({ children, loginStatus }: Props) {
  const items = ['start', 'modify', 'start'];
  const userInfo = {
    username: '정중일',
    userAge: 45,
    userImage: 'https://placehold.co/25x25',
  };

  return (
    <div className="wrapper fixed bg-inherit">
      <div className="header-skeleton flex items-center">
        <div className="flex-1">
          <Link href="/">
            <Image
              src="/logo_header.png"
              width={128}
              height={26}
              alt="하나학당 로고"
            />
          </Link>
        </div>
        <div>{children}</div>
        <div className="flex-none">
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
      </div>
    </div>
  );
}
