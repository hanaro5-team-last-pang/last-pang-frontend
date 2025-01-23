'use server';

import * as process from 'node:process';
import { MenteeSignUpType, MentorSignUpType, ActionResType } from './type';

const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function sendEmail(email: string) {
  try {
    const res = await fetch(`${baseURL}/send-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(email),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || '이메일 전송 실패');
    }

    console.log('Email sent successfully:', data);

    return {
      success: true,
      message: '인증 이메일이 전송되었습니다.',
      data: data,
    };
  } catch (error: any) {
    console.error('Error sending email:', error);
    return {
      success: false,
      message: error.message || '이메일 전송 실패',
    };
  }
}

export async function verifyEmail(
  email: string,
  authToken: string
): Promise<{ message: string; isError: boolean }> {
  const url = `${baseURL}/verify-email?email=${encodeURIComponent(email)}&authToken=${encodeURIComponent(authToken)}`;
  console.log('Verifying email with URL:', url);

  try {
    const res = await fetch(url, {
      method: 'POST',
    });

    const data = await res.json();

    if (!res.ok) {
      console.error('서버 오류 메시지:', data.message);
      throw new Error(data.message || '이메일 인증 실패');
    }

    return {
      message: '이메일 인증 성공',
      isError: false,
    };
  } catch (error: unknown) {
    console.error('이메일 인증 요청 중 오류 발생:', error);

    let errorMessage = '이메일 인증 중 오류가 발생했습니다. 다시 시도해주세요.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }

    return {
      message: `이메일 인증 실패: ${errorMessage}`,
      isError: true,
    };
  }
}

export async function menteeSignUp(
  prevState: ActionResType<MenteeSignUpType, string>,
  formData: FormData
): Promise<ActionResType<MenteeSignUpType, string>> {
  const validKeys = ['email', 'name', 'password', 'confirmedPassword', 'birth'];

  // 유효한 키만 필터링하여 객체 생성
  const filteredEntries = Array.from(formData.entries()).filter(([key]) =>
    validKeys.includes(key)
  );

  const value = Object.fromEntries(filteredEntries) as MenteeSignUpType;

  console.log(`Sending data for mentee sign up:`, value);

  try {
    const res = await fetch(`${baseURL}/signup/mentee`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(value),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || '회원가입 실패');
    }
    return {
      value: data,
      message: '회원가입 성공',
      isError: false,
    };
  } catch (error: unknown) {
    console.error('회원가입 요청 중 오류 발생:', error);

    let errorMessage = '회원가입 중 오류가 발생했습니다. 다시 시도해주세요.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return {
      value,
      message: `회원가입 실패: ${errorMessage}`,
      isError: true,
    };
  }
}

export async function mentorSignUp(
  prevState: ActionResType<MentorSignUpType, string>,
  formData: FormData
): Promise<ActionResType<MentorSignUpType, string>> {
  const value = Object.fromEntries(formData) as MentorSignUpType;
  const message = '멘토 회원가입 액션';

  return {
    value: value,
    message: message,
    isError: false,
  };
}
