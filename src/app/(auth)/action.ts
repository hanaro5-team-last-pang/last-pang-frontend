'use server';

import { BASE_URL } from '@/constant';
import { redirect } from 'next/navigation';
import {
  MenteeSignUpType,
  MentorSignUpType,
  ActionResType,
  LoginType,
} from './type';

export async function sendEmail(email: string) {
  const res = await fetch(`${BASE_URL}/send-email`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(email),
  });

  const data = await res.json();
  if (!res.ok) {
    return {
      value: email,
      message: data || '이메일 전송 실패',
      isError: true,
    };
  }

  return { value: email, message: '이메일 전송 성공', isError: false };
}

export async function verifyEmail(
  email: string,
  authToken: string
): Promise<{ message: string; isError: boolean }> {
  const url = `${BASE_URL}/verify-email?email=${encodeURIComponent(email)}&authToken=${encodeURIComponent(authToken)}`;
  const res = await fetch(url, {
    method: 'POST',
  });

  const data = await res.json();
  if (!res.ok) {
    console.error('서버 오류 메시지:', data.message);
    throw new Error(data.message || '이메일 인증 실패');
  }
  return { message: '이메일 인증 성공', isError: false };
}

export async function menteeSignUp(
  prevState: ActionResType<MenteeSignUpType, string>,
  formData: FormData
): Promise<ActionResType<MenteeSignUpType, string>> {
  const value = Object.fromEntries(formData) as MenteeSignUpType;
  console.log(value);

  const res = await fetch(`${BASE_URL}/signup/mentee`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  });

  const data = await res.json();
  if (!res.ok) return { value: value, message: data, isError: true };

  redirect('/login');
}

export async function mentorSignUp(
  prevState: ActionResType<MentorSignUpType, string>,
  formData: FormData
): Promise<ActionResType<MentorSignUpType, string>> {
  const value = Object.fromEntries(formData) as MentorSignUpType;

  const res = await fetch(`${BASE_URL}/signup/mentor`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  });

  const data = await res.json();
  if (!res.ok) return { value: value, message: data, isError: true };

  redirect('/login');
}

export async function login(
  prevState: ActionResType<LoginType, string>,
  formData: FormData
): Promise<ActionResType<LoginType, string>> {
  const value = Object.fromEntries(formData) as LoginType;

  const res = await fetch(`${BASE_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(value),
  });

  if (!res.ok) {
    const data = await res.json();
    return { value: value, message: data, isError: true };
  }
  redirect('/');
}
