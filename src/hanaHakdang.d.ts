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
