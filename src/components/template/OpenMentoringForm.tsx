'use client';

import { openMentoring } from '@/app/action';
import { Badge } from '@/components/atoms/Badge';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Image from 'next/image';
import { useActionState } from 'react';
import { useState } from 'react';

export default function OpenMentoringForm() {
  const [tag, setTag] = useState('');
  const [tagList, setTagList] = useState<string[]>([]);
  const [image, setImage] = useState<File | null>(null);

  const [state, formAction] = useActionState(openMentoring, {
    value: {
      classTitle: '',
      classDescription: '',
      date: '',
      startTime: '',
      endTime: '',
      maxMentee: 0,
      category: '',
      tags: [],
      image: null,
    },
    message: '멘토링 등록',
    isError: false,
  });

  const handleAddTag = () => {
    if (tag && !tagList.includes(tag)) {
      setTagList((prev) => [...prev, tag]);
      setTag('');
    }
  };

  const handleRemoveTag = (tagToRemove: string) => {
    setTagList(tagList.filter((t) => t !== tagToRemove));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <form action={formAction} className="w-full p-5 flex items-center">
      <div className="flex flex-col w-full items-center">
        <div className="w-3/4">
          <div className="flex w-full items-center justify-between mb-4 gap-4">
            <div className="w-1/3">
              <label className="block mb-1">카테고리 분류</label>
              <select className="border border-gray-300 rounded-md p-2 w-full">
                <option value="">디지털 교육</option>
                <option>투자</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block mb-1">최대 수강 인원</label>
              <select
                defaultValue={state.value.maxMentee}
                className="border border-gray-300 rounded-md p-2 w-full"
              >
                <option value="">선택하세요</option>
                {[1, 2, 3, 4, 5].map((num) => (
                  <option key={num} value={num}>
                    {num}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/3">{''}</div>
          </div>
          <div className="flex justify-between items-center mb-6 w-full gap-4">
            <div className="w-1/3">
              <Input
                label="날짜"
                type="date"
                placeholder={''}
                defaultValue={state.value.date}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="w-1/3">
              <Input
                label="시작 시간"
                type="time"
                placeholder={''}
                defaultValue={state.value.startTime}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
            <div className="w-1/3">
              <Input
                label="끝나는 시간"
                type="time"
                placeholder={''}
                defaultValue={state.value.endTime}
                className="border border-gray-300 rounded-md p-2 w-full"
              />
            </div>
          </div>
          <div className="w-full flex-col">
            <Input
              label="멘토링 정보"
              placeholder="멘토링 제목을 입력하세요"
              defaultValue={state.value.classTitle}
              className="border border-gray-300 rounded-md p-2 mb-4"
            />
            <textarea
              placeholder="멘토링 내용을 설명해주세요"
              defaultValue={state.value.classDescription}
              rows={6}
              className="border border-gray-300 w-full rounded-md p-2 mb-4"
            />
          </div>
          <div className="flex items-start gap-4 mb-2">
            <input
              placeholder="멘토링 태그를 추가하세요"
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              className="border border-gray-300 rounded-md h-10 p-2 mr-2"
            />
            <Button
              type="button"
              text="추가"
              onClick={handleAddTag}
              className="bg-ourOrange rounded-full text-white h-10 px-4"
            />
          </div>
          <div className="flex flex-wrap mt-1">
            {tagList.map((item, index) => (
              <div key={index} className="flex items-center">
                <Badge
                  text={`#${item}`}
                  className="border border-ourOrange text-sm rounded-full mb-1"
                />
                <Button
                  type="button"
                  text="x"
                  onClick={() => handleRemoveTag(item)}
                  className="mr-2 font-semibold"
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col items-start rounded-2xl border border-gray-400 w-full p-4 my-4">
            <div className="relative mb-2 w-full aspect-[3/2]">
              {image ? (
                <Image
                  src={URL.createObjectURL(image)}
                  alt="멘토 명함"
                  layout="fill"
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex justify-center items-center">
                  <span>멘토링 썸네일을 등록해주세요</span>
                </div>
              )}
            </div>
            <input type="file" accept="image/*" onChange={handleImageChange} />
          </div>
          <div className="w-full wrapper p-2">
            <Button
              type="submit"
              text="멘토링 등록"
              className="bg-ourOrange text-white rounded-full py-2 px-4 mr-3 mb-1 hover:bg-orange-600 transition"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
