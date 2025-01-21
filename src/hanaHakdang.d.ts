// TODO: zod 활용한 유효성 검사 및 타입 정의 용이화 필요*/
export type ActionResType<V, E> = {
  value: V;
  message: E;
  isError: boolean;
};

export type LoginType = {
  email: string;
  password: string;
};

export type MenteeSignUpType = {
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
  birthDate: string;
};

export type MentorSignUpType = {
  identificationNumber: string;
  email: string;
  password: string;
  confirmPassword: string;
  userName: string;
  birthDate: string;
};

export type ChatResponseType = {
  readonly userId: number;
  readonly username: string;
  readonly body: string;
  readonly timestamp: string;
};

export type ChatRequestType = {
  userId: number;
  username: string;
  lectureId: number;
  body: string;
};

export type ReducerAction<T> = {
  type: string;
  data: T;
};

export type ChangeProfileFormType = {
  newImage: File | null;
  newUserName: string;
  newBirthDate: string;
  currentPassword: string;
  newPassword: string;
  newConfirmedPassword: string;
};

export type SubmitReviewFormType = {
  ratingScore: string;
  review: string;
};

export type CardType = {
  cardColor: string;
  cardTitle: string;
  cardDescription: string;
  cardImageUrl: string;
};

export type openMentoringFormType = {
  classTitle: string;
  classDescription: string;
  date: string;
  startTime: string;
  endTime: string;
  maxMentee: number;
  category: string;
  tags: string[];
  image: File | null;
};
