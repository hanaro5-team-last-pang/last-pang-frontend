'use server';

import { AccountType, MentoringType } from '@/hanaHakdang';

export async function getMentorings(): Promise<MentoringType[]> {
  return [
    {
      id: 1,
      mentoringName: '양지은의 주식 투자 성공기',
      mentoringDate: new Date(),
      mentorName: '양지은',
      status: '멘토링 예약',
    },
    {
      id: 2,
      mentoringName: '정중일의 주식 투자 성공기',
      mentoringDate: new Date(),
      mentorName: '정중일',
      status: '멘토링 완료',
    },
  ];
}

export async function getAccountData(): Promise<AccountType> {
  return {
    name: '중일',
    birth: '2024년 10월 10일',
    profileImage: 'https://placehold.co/25x25',
  };
}
