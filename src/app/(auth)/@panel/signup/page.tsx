import Image from 'next/image';

export default function Page() {
  return (
    <div className="relative justify-center h-[350px]">
      <Image src="/signup.png" fill={true} alt="회원가입 이미지" />
    </div>
  );
}
