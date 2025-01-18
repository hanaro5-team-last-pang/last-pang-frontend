'use client';

import Checkbox from '@/components/atoms/Checkbox';
import { useState } from 'react';

interface CheckboxItem {
  id: number;
  label: string;
}

interface CheckboxListProps {
  items: CheckboxItem[];
}

export default function CheckboxList({ items }: CheckboxListProps) {
  // 각 체크박스의 상태를 관리하는 useState 훅
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>(
    items.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  );

  const handleCheckboxChange = (id: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id], // 체크 상태
    }));
  };

  return (
    <div>
      {items.map((item) => (
        <div key={item.id} className="flex items-center justify-between mb-2">
          <Checkbox
            checked={checkedItems[item.id]} // 체크 상태
            setChecked={() => handleCheckboxChange(item.id)}
            text={item.label}
            className="data-[checked]:bg-ourGreen"
            textClassName="text-xs"
          />
        </div>
      ))}
    </div>
  );
}
