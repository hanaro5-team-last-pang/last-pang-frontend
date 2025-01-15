'use client';

import { useRouter } from 'next/navigation';

export default function Footer() {
  const router = useRouter();

  return (
    <div className="absolute bottom-0 w-full bg-gray-200">
      <div className="sm:px-60 ">
        <div className="flex justify-between items-center grid-cols-2 gap-2 my-10">
          <div>
            <button onClick={() => router.push('/')}>
              <img className="w-32" src="/logo_header.png" alt="로고" />
            </button>
            <div className="my-2 text-xs text-gray-600">
              <p className="mb-2">
                저희 하나 학당은 배움에 나이가 없다고 생각합니다.
              </p>
              <p className="mb-2">
                누구나 배움의 뜻이 있는 분들에게 비대면 화상 강의라는 새로운
                비전을 제시하여
              </p>
              <p>배움의 장을 열어드리려 합니다.</p>
            </div>
          </div>
          <div className="mt-14 text-sm grid grid-rows-3 grid-flow-col gap-4">
            <div className="flex">
              <div className="font-semibold">찾아 오시는 길</div>
              <div>: 서울특별시 성동구 아차산로 111 2층</div>
            </div>
            <div className="flex">
              <div className="font-semibold">대표 전화번호</div>
              <div>: 02-6224-5730</div>
            </div>
            <div className="font-semibold">서비스 둘러보기</div>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 mb-3" />
      <div className="text-center mb-3 text-gray-400">
        Copyright © 2024 Hana Academy - LAST PANG
      </div>
    </div>
  );
}
