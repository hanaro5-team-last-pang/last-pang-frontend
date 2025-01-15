import LinkButton from '@/components/atoms/LinkButton';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/atoms/LinkButton',
  component: LinkButton,
} as Meta;

export const Default: StoryObj = {
  render: () => (
    <LinkButton
      label="마이페이지"
      route="/mypage"
      className="bg-blue-500 text-white rounded-full"
    />
  ),
};

export const Disabled: StoryObj = {
  render: () => (
    <LinkButton
      label="비활성화"
      route="#"
      className="bg-gray-400 text-white rounded cursor-not-allowed opacity-50"
    />
  ),
};
