'use client';

import { login } from '@/app/action';
import Button from '@/components/atoms/Button';
import Checkbox from '@/components/atoms/Checkbox';
import IconBadge from '@/components/atoms/IconBadge';
import Input from '@/components/atoms/Input';
import { AiFillEye } from 'react-icons/ai';
import { MdArrowOutward } from 'react-icons/md';
import Link from 'next/link';
import { useActionState, useState } from 'react';

export default function Page() {
  const [hide, setHide] = useState(false);
  const [rememberId, setRememberId] = useState(false);
  const [state, formAction] = useActionState(login, {
    value: { email: '', password: '' },
    message: '로그인 안됨',
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
    <form action={formAction}>
      <div className="mt-14 px-12">
        <div>
          <div className="text-center font-bold text-3xl">로그인</div>
          <div className="text-center text-sm my-2 text-gray-400">
            하나학당의 다양한 서비스를 이용하기 위해서는 로그인이 필요합니다.
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-3">
          <Input
            name="email"
            label="이메일"
            placeholder="이메일 주소를 입력하세요."
            defaultValue={state.value.email}
            className="my-2 text-gray-400"
          />
          <Input
            name="password"
            label="비밀번호"
            placeholder="비밀번호를 입력하세요."
            defaultValue={state.value.password}
            type={hide ? 'text' : 'password'}
            className="my-2 text-gray-400"
          >
            <AiFillEye className="cursor-pointer" onClick={onToggleHide} />
          </Input>
          <Link
            href="/"
            className="text-sm text-right font-light text-gray-500"
          >
            <div>비밀번호가 기억나지 않으신가요?</div>
          </Link>
          <Checkbox
            checked={rememberId}
            setChecked={setRememberId}
            text="이메일 기억"
            className="data-[checked]:bg-gray-400"
            textClassName="text-xs text-gray-500"
          />
        </div>
        <div className="my-6 grid grid-cols-1 gap-3">
          <Button
            type="submit"
            text="로그인"
            className="w-full h-full bg-hanaGreen80 px-4 py-2 rounded-xl flex justify-center items-center gap-2 transition text-white"
          />
          <div className="flex justify-center gap-2">
            <div className="text-xs text-gray-600">
              하나학당이 처음이신가요?
            </div>
            <Link href="/signup">
              <IconBadge
                reverse={true}
                icon={<MdArrowOutward />}
                text="지금 가입하러 가기"
                gapLength="1"
                textClassName="text-xs text-ourGreen"
                iconClassName="text-sm text-ourGreen"
              />
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
}
