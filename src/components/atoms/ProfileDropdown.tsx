import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { HiOutlineUserCircle } from 'react-icons/hi2';
import { PiShoppingBagOpen, PiUser, PiArrowSquareOut } from 'react-icons/pi';

interface ProfileDropdownProps {
  userInfo: {
    username: string;
    userAge: number;
    userImage: string;
  };
}

export default function ProfileDropdown({ userInfo }: ProfileDropdownProps) {
  return (
    <Menu>
      <MenuButton>
        <img
          className="w-full h-full rounded-full"
          src={userInfo.userImage}
          alt="Profile Image"
        />
      </MenuButton>
      <MenuItems
        anchor="bottom start"
        className="my-2 rounded-lg scrollbar-hide border border-gray-200 p-2 shadow-lg"
      >
        <div>
          <div className="flex items-center mr-10 mb-1">
            <img
              className="w-12 h-12 rounded-full my-1"
              src={userInfo.userImage}
              alt="Profile Image"
            />
            <div className="mx-1 text-xs font-bold">{userInfo.username}</div>
            <HiOutlineUserCircle />
            <div className="text-[9px] mx-1">{userInfo.userAge}세</div>
          </div>
          <hr className="border-t border-gray-300 mb-3" />
        </div>
        <MenuItem>
          <a className="flex my-2 items-center" href="/settings">
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <PiShoppingBagOpen />
            </div>
            <div className="text-xs px-2">새 강의 만들기</div>
          </a>
        </MenuItem>
        <MenuItem>
          <a className="flex my-2 items-center" href="/support">
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <PiUser />
            </div>
            <div className="text-xs px-2">마이 페이지</div>
          </a>
        </MenuItem>
        <MenuItem>
          <a className="flex my-2 items-center" href="/support">
            <div className="flex items-center justify-center bg-gray-100 rounded-lg p-2">
              <PiArrowSquareOut />
            </div>
            <div className="text-xs px-2">로그아웃</div>
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
