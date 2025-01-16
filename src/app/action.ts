'use server';

import { ActionResType, LoginType } from '@/hanaHakdang';

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
