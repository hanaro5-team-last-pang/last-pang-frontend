'use client';

import { handleSearchAction } from '@/app/action';
import Button from '@/components/atoms/Button';
import { FaSearch } from 'react-icons/fa';
import { useRef } from 'react';

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async () => {
    if (inputRef.current) {
      const formData = new FormData();
      formData.append('search', inputRef.current.value);
      await handleSearchAction(formData);
    }
  };

  return (
    <div className="flex items-center border-b border-gray-700">
      <div className="flex-1">
        <input
          type="text"
          name="search"
          placeholder="검색어를 입력하세요"
          ref={inputRef}
          className="w-full outline-none border-none text-sm placeholder-gray-600"
        />
      </div>
      <div>
        <Button
          type="button"
          onClick={handleSearch}
          className="flex items-center justify-center"
        >
          <FaSearch className="text-gray-700" />
        </Button>
      </div>
    </div>
  );
}
