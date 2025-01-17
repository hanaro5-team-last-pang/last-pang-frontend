import MyPageNavbar from '@/components/organisms/MyPageNavbar';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="wrapper grid grid-cols-1 lg:grid-cols-[1fr_4fr] items-center">
        <div className="hidden lg:block">
          <MyPageNavbar />
        </div>
        <div>{children}</div>
      </div>
    </>
  );
}
