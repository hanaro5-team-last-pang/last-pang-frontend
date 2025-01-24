export type LectureType = {
  lectureId: number;
  mentorName: string;
  category: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  duration: number;
  currParticipants: number;
  maxParticipants: number;
  isFull: boolean;
  thumbnailImgUrl: string;
  tagTitle: string;
  tagList: string[];
};

export type CardInfoType = {
  key: string;
  value: string;
};

export type CardType = {
  mentorName: string;
  shortIntroduction: string;
  mentorProfileImgUrl: string | null;
  simpleInfo: CardInfoType[];
  detailInfo: CardInfoType[];
};

export type SubScoreType = {
  score: number;
  count: number;
};

export type ReviewType = {
  id: number;
  lectureId: number;
  userId: number;
  userName: string;
  lectureTitle: string;
  content: string;
  score: number;
  createdAt: Date;
  updatedAt?: Date;
  profileImageUrl?: string;
};

export type ReviewPageResponseType = {
  averageScore: number;
  count: number;
  subScores: SubScoreType[];
  reviews: ReviewType[];
};

export type AnswerType = {
  id: number;
  userName: string;
  content: string;
  profileImageUrl?: string;
  createdAt: Date;
};

export type FaqResponseType = {
  id: number;
  userName: string;
  content: string;
  profileImageUrl?: string;
  createdAt: Date;
  answers: AnswerType[];
};

export type FaqFormType = {
  question: string;
};
