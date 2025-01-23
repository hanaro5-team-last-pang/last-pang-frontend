// TODO: zod 활용한 유효성 검사 및 타입 정의 용이화 필요*/
export type ActionResType<V, E> = {
  value: V;
  message: E;
  isError: boolean;
};

export type MenteeSignUpType = {
  email: string;
  name: string;
  password: string;
  confirmedPassword: string;
  birth: string;
};

export type MentorSignUpType = {
  code: string;
  email: string;
  name: string;
  password: string;
  confirmedPassword: string;
  birth: string;
};
