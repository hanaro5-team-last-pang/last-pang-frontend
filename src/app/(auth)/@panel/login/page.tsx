import Image from 'next/image';

export default function Page() {
  return (
    <div className="relative justify-center h-[500px]">
      <Image src="/login.png" fill={true} alt="로그인 이미지" />
    </div>
  );
}
