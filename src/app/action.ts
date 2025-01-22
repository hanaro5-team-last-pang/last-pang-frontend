'use server';

import {
  ActionResType,
  ChangeProfileFormType,
  LoginType,
  MenteeSignUpType,
  MentorSignUpType,
  SubmitReviewFormType,
  openMentoringFormType,
} from '@/hanaHakdang';

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
  const message = '멘티 회원가입 액션';

  return {
    value: value,
    message: message,
    isError: false,
  };
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

//검색 서버액션 예시
export async function handleSearchAction(formData: FormData) {
  const searchTerm = formData.get('search')?.toString() || '';
  console.log('Searching for:', searchTerm);
}

export async function changeProfileForm(
  prevState: ActionResType<ChangeProfileFormType, string>,
  formData: FormData
): Promise<ActionResType<ChangeProfileFormType, string>> {
  const value = Object.fromEntries(formData) as ChangeProfileFormType;
  const message = '프로필 폼 데이터 변경 액션';

  return {
    value: value,
    message: message,
    isError: false,
  };
}

export async function submitReview(
  prevState: ActionResType<SubmitReviewFormType, string>,
  formData: FormData
): Promise<ActionResType<SubmitReviewFormType, string>> {
  const value = Object.fromEntries(formData) as SubmitReviewFormType;
  const message = '후기 제출 액션';

  return {
    value: value,
    message: message,
    isError: false,
  };
}

export async function openMentoring(
  prevState: ActionResType<openMentoringFormType, string>,
  formData: FormData
): Promise<ActionResType<openMentoringFormType, string>> {
  const value: openMentoringFormType = {
    classTitle: formData.get('classTitle') as string,
    classDescription: formData.get('classDescription') as string,
    date: formData.get('date') as string,
    startTime: formData.get('startTime') as string,
    endTime: formData.get('endTime') as string,
    maxMentee: Number(formData.get('maxMentee')),
    category: formData.get('category') as string,
    tags: JSON.parse(formData.get('tags') as string),
    image: formData.get('image') as File | null,
  };
  const message = '멘토링 등록 액션';
  return {
    value: value,
    message: message,
    isError: false,
  };
}
