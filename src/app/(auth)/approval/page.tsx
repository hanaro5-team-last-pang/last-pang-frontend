'use client';

import { verifyEmail } from '@/app/(auth)/action';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Page() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const email = searchParams.get('email');
  const authToken = searchParams.get('authToken');

  useEffect(() => {
    if (email && authToken) {
      setLoading(true);

      verifyEmail(String(email), String(authToken))
        .then((response) => {
          setLoading(false);
          setMessage(response.message);
          setIsError(response.isError);
        })
        .catch((error) => {
          setLoading(false);
          setMessage(error.message || '이메일 인증 실패');
          setIsError(true);
        });
    } else {
      setMessage('이메일 또는 인증 토큰이 없습니다.');
      setIsError(true);
    }
  }, [router]);

  return (
    <div className="wrapper p-10">
      <h1>{loading ? '이메일 인증 중...' : message}</h1>
      {loading && <div>로딩 중...</div>}
      {isError && <div style={{ color: 'red' }}>인증 실패: {message}</div>}
      {!isError && !loading && <div>인증 성공, 3초 후에 창이 닫힙니다. </div>}
    </div>
  );
}
