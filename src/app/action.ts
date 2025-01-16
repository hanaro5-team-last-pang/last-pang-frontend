'use server';

import { ActionResType, LoginType, MenteeSignUpType } from '@/hanaHakdang';

export async function login(
  prevState: ActionResType<LoginType, string>,
  formData: FormData
): Promise<ActionResType<LoginType, string>> {
  const value = Object.fromEntries(formData) as LoginType;
  const message = '로그인 액션';

  return {
    value: value,
    message: message,
    isError: false,
  };
}

export async function menteeSignUp(
  prevState: ActionResType<MenteeSignUpType, string>,
  formData: FormData
): Promise<ActionResType<MenteeSignUpType, string>> {
  const value = Object.fromEntries(formData) as MenteeSignUpType;
  const message = '회원가입 액션';

  return {
    value: value,
    message: message,
    isError: false,
  };
}
