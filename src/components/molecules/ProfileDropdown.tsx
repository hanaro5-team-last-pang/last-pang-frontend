import Dropdown from '@/components/atoms/Dropdown';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { PiShoppingBagOpen, PiUser, PiArrowSquareOut } from 'react-icons/pi';
import Link from 'next/link';

interface ProfileDropdownProps {
  userInfo: {
    username: string;
    userAge: number;
    userImage: string;
  };
}

export default function ProfileDropdown({ userInfo }: ProfileDropdownProps) {
  const menuItems = [
    <div>
      <div className="flex items-center mr-10 mb-1">
        <img
          className="rounded-full"
          src={userInfo.userImage}
          alt="Profile Image"
        />
        <div className="mx-1 text-xs font-bold">{userInfo.username}</div>
        <HiOutlineUserCircle />
        <div className="text-[9px] mx-1">{userInfo.userAge}세</div>
      </div>
      <hr className="border-t border-gray-300 mb-3" />
    </div>,
    <Link className="flex my-2 items-center" href="/">
      <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
        <PiShoppingBagOpen />
      </div>
      <div className="text-xs px-2">새 강의 만들기</div>
    </Link>,
    <Link className="flex my-2 items-center" href="/">
      <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
        <PiUser />
      </div>
      <div className="text-xs px-2">마이 페이지</div>
    </Link>,
    <Link className="flex my-2 items-center" href="/">
      <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
        <PiArrowSquareOut />
      </div>
      <div className="text-xs px-2">로그아웃</div>
    </Link>,
  ];

  return (
    <Dropdown
      menuButton={
        <img
          className="w-full h-full rounded-full"
          src={userInfo.userImage}
          alt="Profile Image"
        />
      }
      menuItems={menuItems}
      anchor={'bottom start'}
      menuItemsClassName={
        'my-2 rounded-lg scrollbar-hide border border-gray-200 p-2 shadow-lg'
      }
    />
  );
}
