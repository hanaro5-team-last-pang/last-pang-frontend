import Input from '@/components/atoms/Input';
import { Meta, StoryObj } from '@storybook/react';

// 메타 데이터 설정
const meta: Meta<typeof Input> = {
  title: 'Components/Atoms/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    type: { control: 'select', options: ['text', 'email', 'password', 'date'] },
    placeholder: { control: 'text' },
    invalid: { control: 'boolean' },
    autoFocus: { control: 'boolean' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const TextInput: Story = {
  render: (args) => <Input {...args} />,
  args: {
    label: '텍스트 입력',
    type: 'text',
    placeholder: '텍스트를 입력하세요',
    invalid: false,
    autoFocus: false,
    className: '',
  },
};

export const EmailInput: Story = {
  render: (args) => <Input {...args} />,
  args: {
    label: '이메일',
    type: 'email',
    placeholder: 'example@example.com',
    invalid: false,
    autoFocus: true,
    className: 'bg-gray-100',
  },
};

export const DateInput: Story = {
  render: (args) => <Input {...args} />,
  args: {
    label: '생년월일',
    type: 'date',
    placeholder: 'yyyy-MM-DD',
    invalid: false,
    autoFocus: false,
    className: 'bg-gray-100',
  },
};
