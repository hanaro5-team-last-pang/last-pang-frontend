'use client';

import { menteeSignUp } from '@/app/action';
import Button from '@/components/atoms/Button';
import IconBadge from '@/components/atoms/IconBadge';
import Input from '@/components/atoms/Input';
import { AiFillEye } from 'react-icons/ai';
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';
import { useActionState, useState } from 'react';

export default function MenteeSignUpForm() {
  const [hide, setHide] = useState(false);
  const [state, formAction] = useActionState(menteeSignUp, {
    value: {
      email: '',
      password: '',
      confirmPassword: '',
      birthDate: '',
      userName: '',
    },
    message: '멘티 회원가입 이전',
    isError: false,
  });

  const onToggleHide = () => {
    setHide((prev) => {
      let newHide = prev;
      newHide = !newHide;
      return newHide;
    });
  };

  return (
    <form
      className="my-4 grid grid-cols-1 gap-3 h-[375px] overflow-y-auto scrollbar-hide"
      action={formAction}
    >
      <Input
        name="userName"
        label="이름"
        placeholder="이름을 입력해주세요."
        defaultValue={state.value.userName}
        className="my-2 text-gray-400"
      />
      <Input
        name="email"
        label="이메일"
        placeholder="이메일 주소를 입력하세요."
        defaultValue={state.value.email}
        className="my-2 text-gray-400 bg-white h-[42px]"
      >
        <Button
          type="button"
          text="인증"
          className="bg-ourGreen text-xs px-4 py-2 rounded-xl whitespace-nowrap text-white"
        />
      </Input>
      <Input
        name="password"
        label="비밀번호"
        placeholder="비밀번호를 입력하세요."
        defaultValue={state.value.password}
        type={hide ? 'text' : 'password'}
        className="my-2 text-gray-400 bg-white"
      >
        <AiFillEye className="cursor-pointer" onClick={onToggleHide} />
      </Input>
      <Input
        name="confirmPassword"
        label="비밀번호 확인"
        placeholder="비밀번호를 다시 한 번 입력하세요."
        defaultValue={state.value.confirmPassword}
        type={hide ? 'text' : 'password'}
        className="my-2 text-gray-400 bg-white"
      >
        <AiFillEye className="cursor-pointer" onClick={onToggleHide} />
      </Input>
      <Input
        name="birthDate"
        label="생년월일"
        placeholder=""
        defaultValue={state.value.birthDate}
        type="date"
        className="my-2 text-gray-400"
      />
      <Button
        type="submit"
        text="회원가입"
        className="w-full h-full bg-hanaGreen80 mt-2 px-4 py-2 rounded-xl flex justify-center items-center gap-2 transition text-white"
      />
      <div className="flex justify-center gap-2 my-2">
        <div className="text-xs text-gray-600">
          이미 하나학당의 회원이신가요?
        </div>
        <Link href="/signup">
          <IconBadge
            reverse={true}
            icon={<MdArrowOutward />}
            text="로그인"
            gapLength="1"
            textClassName="text-xs text-ourGreen"
            iconClassName="text-sm text-ourGreen"
          />
        </Link>
      </div>
    </form>
  );
}
