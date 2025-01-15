import MentoringList from '@/components/organisms/MentoringList';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Organisms/MentoringList',
  component: MentoringList,
} as Meta;

export const Default: StoryObj = {
  render: () => (
    <MentoringList
      title="멘토링 세션 제목"
      mentor_name="홍길동"
      start_time="2025-01-20 10:00"
      duration={2}
      participants={5}
      max_participants={10}
      category="개발"
    />
  ),
};
