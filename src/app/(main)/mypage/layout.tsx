import MyPageNavbar from '@/components/organisms/MyPageNavbar';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="wrapper grid grid-cols-1 lg:grid-cols-[1fr_4fr] bg-inherit">
        <div className="hidden lg:block">
          <MyPageNavbar />
        </div>
        <div className="my-4">{children}</div>
      </div>
    </>
  );
}
