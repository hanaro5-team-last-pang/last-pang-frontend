import Tab from '@/components/atoms/Tab';
import { Meta, StoryObj } from '@storybook/react';

// 메타 데이터 설정
const meta: Meta<typeof Tab> = {
  title: 'Components/Atoms/Tab',
  component: Tab,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Tab>;

// 기본 탭 스토리
export const Default: Story = {
  render: (args) => <Tab {...args} />,
  args: {
    tabList: [
      {
        tabTitle: 'Tab 1',
        tabComponent: <div>1</div>,
        tabListClassName: 'bg-gray-200',
        tabOnClickEvent: () => console.log('Tab 1 clicked'),
      },
      {
        tabTitle: 'Tab 2',
        tabComponent: <div>2</div>,
        tabListClassName: 'bg-gray-200',
        tabOnClickEvent: () => console.log('Tab 2 clicked'),
      },
      {
        tabTitle: 'Tab 3',
        tabComponent: <div>3</div>,
        tabListClassName: 'bg-gray-200',
        tabOnClickEvent: () => console.log('Tab 3 clicked'),
      },
    ],
    tabPanelList: [
      <div>Content for Tab 1</div>,
      <div>Content for Tab 2</div>,
      <div>Content for Tab 3</div>,
    ],
    tabPanelClassName: 'p-4',
  },
};

// 커스텀 탭
export const WithCustomClassNames: Story = {
  render: (args) => <Tab {...args} />,
  args: {
    tabList: [
      {
        tabTitle: 'Custom Tab 1',
        tabComponent: <div>1</div>,
        tabListClassName: 'bg-blue-200 rounded m-1',
        tabOnClickEvent: () => console.log('Custom Tab 1 clicked'),
      },
      {
        tabTitle: 'Custom Tab 2',
        tabComponent: <div>2</div>,
        tabListClassName: 'bg-green-200 rounded m-1',
        tabOnClickEvent: () => console.log('Custom Tab 2 clicked'),
      },
    ],
    tabPanelList: [
      <div>Custom Content for Tab 1</div>,
      <div>Custom Content for Tab 2</div>,
    ],
    tabPanelClassName: 'p-4',
  },
};
