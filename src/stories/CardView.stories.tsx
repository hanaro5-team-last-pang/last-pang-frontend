import CardView from '@/components/organisms/CardView';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Organisms/CardView',
  component: CardView,
} as Meta;

export const Default: StoryObj = {
  render: () => (
    <CardView
      title="금융뉴스 제목"
      date="2025-01-20"
      description="금융 뉴스 요약 설명 들어가는 곳"
    />
  ),
};
