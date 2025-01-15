'use client';

import Checkbox from '@/components/atoms/Checkbox';
import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

// 메타 데이터
const meta: Meta<typeof Checkbox> = {
  title: 'Components/Atoms/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    setChecked: { control: 'boolean' },
    text: { control: 'text' },
    className: { control: 'text' },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

// 기본 스토리
export const Default: Story = {
  args: {
    checked: false,
    text: '기본 체크박스',
    className: 'border-gray-300',
  },
  render: (args) => {
    const CheckboxWithState = () => {
      const [checked, setChecked] = useState(args.checked);
      return (
        <Checkbox
          checked={checked}
          setChecked={setChecked}
          text={args.text}
          className={args.className}
        />
      );
    };
    return <CheckboxWithState />;
  },
};

// 체크된 상태 스토리
export const Checked: Story = {
  args: {
    checked: true,
    text: '체크된 체크박스',
    className: 'border-gray-300',
  },
  render: (args) => {
    const CheckboxWithState = () => {
      const [checked, setChecked] = useState(args.checked);
      return (
        <Checkbox
          checked={checked}
          setChecked={setChecked}
          text={args.text}
          className={args.className}
        />
      );
    };
    return <CheckboxWithState />;
  },
};
