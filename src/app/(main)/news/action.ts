'use server';

import { NewsType } from '@/app/(main)/news/type';

export async function getNewsData(pageNum: number): Promise<NewsType[]> {
  console.log(pageNum);
  return [
    {
      id: 1,
      title: '뉴스 1',
      content: '1번 설명입니다.',
      newsThumbnailUrl: '/img_landing.png',
      newsUrl: '',
      createdAt: new Date(),
    },
    {
      id: 2,
      title: '뉴스 2',
      content: '2번 설명입니다.',
      newsThumbnailUrl: '/img_landing.png',
      newsUrl: '',
      createdAt: new Date(),
    },
    {
      id: 3,
      title: '뉴스 3',
      content: '3번 설명입니다.',
      newsUrl: '',
      newsThumbnailUrl: '/img_landing.png',
      createdAt: new Date(),
    },
    {
      id: 4,
      title: '뉴스 4',
      content: '4번 설명입니다.',
      newsUrl: '',
      newsThumbnailUrl: '/img_landing.png',
      createdAt: new Date(),
    },
    {
      id: 5,
      title: '뉴스 5',
      content: '5번 설명입니다.',
      newsUrl: '',
      newsThumbnailUrl: '/img_landing.png',
      createdAt: new Date(),
    },
    {
      id: 6,
      title: '뉴스 6',
      content: '6번 설명입니다.',
      newsUrl: '',
      newsThumbnailUrl: '/img_landing.png',
      createdAt: new Date(),
    },
  ];
}
