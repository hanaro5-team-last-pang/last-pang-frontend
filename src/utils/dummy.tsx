// 더미 데이터
import { FaChalkboardTeacher } from 'react-icons/fa';
import {
  FaBook,
  FaClipboardList,
  FaGraduationCap,
  FaUsers,
} from 'react-icons/fa6';

export const iconButtonData = [
  {
    icon: <FaBook />,
    label: '디지털 교육',
    count: 38,
    route: '/digital-education',
  },
  {
    icon: <FaGraduationCap />,
    label: '은퇴 설계',
    count: 28,
    route: '/exercise-design',
  },
  {
    icon: <FaChalkboardTeacher />,
    label: '주식 · 투자',
    count: 42,
    route: '/stock-investment',
  },
  {
    icon: <FaClipboardList />,
    label: '대출',
    count: 22,
    route: '/performance-management',
  },
  {
    icon: <FaUsers />,
    label: '상속',
    count: 15,
    route: '/mentoring',
  },
];

export const cardData = [
  {
    title: '멘토링 프로그램 1',
    imageSrc: '/img_landing.png',
    mentor_name: '멘토 1',
    start_time: '2023-01-20',
    duration: 2,
    participants: 5,
    max_participants: 10,
    category: '디지털 교육',
    route: '/mentoring1',
  },
  {
    title: '멘토링 프로그램 2',
    imageSrc: '/img_landing.png',
    mentor_name: '멘토 2',
    start_time: '2023-01-21',
    duration: 3,
    participants: 2,
    max_participants: 8,
    category: '은퇴 설계',
    route: '/mentoring2',
  },
  {
    title: '멘토링 프로그램 3',
    imageSrc: '/img_landing.png',
    mentor_name: '멘토 3',
    start_time: '2023-01-22',
    duration: 1,
    participants: 4,
    max_participants: 6,
    category: '주식 투자',
    badgeClassName: 'bg-blue-300',
    route: '/mentoring3',
  },
  {
    title: '멘토링 프로그램 4',
    imageSrc: '/img_landing.png',
    mentor_name: '멘토 4',
    start_time: '2023-01-23',
    duration: 2,
    participants: 3,
    max_participants: 10,
    category: '상속',
    route: '/mentoring4',
  },
  {
    title: '멘토링 프로그램 5',
    imageSrc: '/img_landing.png',
    mentor_name: '멘토 5',
    start_time: '2023-01-24',
    duration: 4,
    participants: 1,
    max_participants: 5,
    category: '멘토링',
    route: '/mentoring5',
  },
  {
    title: '멘토링 프로그램 6',
    imageSrc: '/img_landing.png',
    mentor_name: '멘토 6',
    start_time: '2023-01-25',
    duration: 3,
    participants: 2,
    max_participants: 8,
    category: '기타',
    route: '/mentoring6',
  },
];

export const newsData = [
  {
    title: '뉴스 1',
    description: '1번 설명입니다.',
    imageSrc: '/img_landing.png',
    date: '2023-01-20',
    route: '/mentoring1',
  },
  {
    title: '뉴스 2',
    description: '2번 설명입니다.',
    imageSrc: '/img_landing.png',
    date: '2023-01-20',
    route: '/mentoring1',
  },
  {
    title: '뉴스 3',
    description: '3번 설명입니다.',
    imageSrc: '/img_landing.png',
    date: '2023-01-20',
    route: '/mentoring1',
  },
];
