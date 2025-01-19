'use client';

import { changeProfileForm } from '@/app/action';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import { AiFillEye } from 'react-icons/ai';
import Image from 'next/image';
import { useActionState, useState } from 'react';

export default function Page() {
  const userImage = 'https://placehold.co/25x25';
  const userName = '정중일';
  const birthDate = '1998년 1월 1일';
  const [hide, setHide] = useState(false);
  const [showNewImage, setShowNewImage] = useState<string | null>(null);
  const [newImage, setNewImage] = useState<File | null>(null);
  const [state, formAction] = useActionState(changeProfileForm, {
    value: {
      newImage: newImage,
      newBirthDate: '',
      currentPassword: '',
      newPassword: '',
      newConfirmedPassword: '',
      newUserName: '',
    },
    message: '프로필 폼 변경 이전',
    isError: false,
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setShowNewImage(reader.result as string);
        setNewImage(file);
      };
      reader.readAsDataURL(file);
    }
  };

  const onToggleHide = () => {
    setHide((prev) => {
      let newHide = prev;
      newHide = !newHide;
      return newHide;
    });
  };

  return (
    <form
      className="flex flex-col justify-center items-center"
      action={formAction}
    >
      <div className="font-bold mb-4">프로필 변경</div>
      <div className="relative w-64 h-64 my-4">
        <label htmlFor="profile-image-upload" className="cursor-pointer">
          <Image
            className="rounded-full object-cover"
            src={showNewImage || userImage}
            alt="Profile Image"
            fill
          />
        </label>
        <input
          id="profile-image-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>
      <div>{userName}</div>
      <div>{birthDate}</div>
      <hr className="border-t border-gray-300" />
      <div className="my-6 grid grid-rows-3 gap-3 w-96">
        <Input
          name="currentPassword"
          label="현재 비밀번호"
          placeholder="현재 비밀번호를 입력하세요."
          defaultValue={state.value.currentPassword}
          type={hide ? 'text' : 'password'}
          className="my-2 text-gray-400 bg-white"
        >
          <AiFillEye className="cursor-pointer" onClick={onToggleHide} />
        </Input>
        <Input
          name="newPassword"
          label="새 비밀번호"
          placeholder="새 비밀번호를 입력하세요."
          defaultValue={state.value.newPassword}
          type={hide ? 'text' : 'password'}
          className="my-2 text-gray-400 bg-white"
        >
          <AiFillEye className="cursor-pointer" onClick={onToggleHide} />
        </Input>
        <Input
          name="password"
          label="새 비밀번호 확인"
          placeholder="새 비밀번호를 다시 한 번 입력하세요."
          defaultValue={state.value.newConfirmedPassword}
          type={hide ? 'text' : 'password'}
          className="my-2 text-gray-400 bg-white"
        >
          <AiFillEye className="cursor-pointer" onClick={onToggleHide} />
        </Input>
        <Button
          type="submit"
          text="제출"
          className="w-full h-full bg-hanaGreen80 px-4 py-2 rounded-xl flex justify-center items-center gap-2 transition text-white"
        />
      </div>
    </form>
  );
}
