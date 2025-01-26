'use client';

import { getProfileCard } from '@/app/(main)/mentorings/actions';
import { CardType } from '@/app/(main)/mentorings/type';
import DefaultSpinner from '@/components/template/DefaultSpinner';
import Image from 'next/image';
import { useEffect, useState } from 'react';

interface Props {
  lectureId: number;
}

export default function MentoringIntroduceForm(props: Props) {
  const { lectureId } = props;
  const [card, setCard] = useState<CardType | null>(null);

  useEffect(() => {
    const loadCard = async () => {
      const profileCard = await getProfileCard(lectureId);
      setCard(profileCard);
    };
    loadCard().then();
  }, []);

  if (!card) {
    return <DefaultSpinner size={12} />;
  }
  return (
    <div className="p-10 max-w-lg mx-auto">
      <h1 className="text-center text-2xl font-bold mb-4">'name' 멘토</h1>
      <div>
        <h2 className="w-full text-center my-4">한 줄 소개</h2>
      </div>
      <div className="flex items-start justify-between p-4 rounded-lg border">
        <div className="flex flex-col items-center">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-gray-300">
            {card.mentorProfileImgUrl ? (
              <Image
                src={card.mentorProfileImgUrl}
                alt="멘토 명함"
                layout="fill"
                objectFit="cover"
              />
            ) : (
              <Image
                src={'/img_landing.png'} // 실제 이미지 URL로 교체
                alt={'멘토 명함'}
                layout="fill"
                objectFit="cover"
              />
            )}
          </div>
          <span className="text-gray-700 mt-2">나이</span>
        </div>
        <div className="flex-1 ml-4 p-4">
          <h2 className="text-lg font-semibold">소개</h2>
          <p className="text-gray-600">{'self'}</p>
        </div>
      </div>
      <div className="my-6 rounded-lg p-4 border">
        <h2 className="text-lg font-semibold">이력</h2>
        <p className="text-gray-600">{'skill'}</p>
      </div>
    </div>
  );
}
