import IconButton from '@/components/atoms/IconButton';
import { Meta, StoryObj } from '@storybook/react';
import {
  FaPaintBrush,
  FaChartPie,
  FaLaptopCode,
  FaUserFriends,
  FaDatabase,
} from 'react-icons/fa';

const buttonData = [
  {
    icon: <FaPaintBrush />,
    label: '디지털 교육',
    route: '/mypage',
  },
  {
    icon: <FaChartPie />,
    label: '디지털 마케팅',
    route: '/marketing',
  },
  {
    icon: <FaLaptopCode />,
    label: '웹 개발',
    route: '/webdev',
  },
  {
    icon: <FaUserFriends />,
    label: 'UX/UI 디자인',
    route: '/design',
  },
  {
    icon: <FaDatabase />,
    label: '데이터 분석',
    route: '/data-analysis',
  },
];

const meta: Meta<typeof IconButton> = {
  title: 'Components/atoms/IconButton',
  component: IconButton,
};

export default meta;

export const ButtonList: StoryObj = {
  render: () => (
    <div className="flex justify-between">
      {buttonData.map((button, index) => (
        <div className="w-1/6" key={index}>
          <IconButton
            icon={button.icon}
            label={button.label}
            route="/mypage"
            className="rounded-xl"
          />
        </div>
      ))}
    </div>
  ),
};
