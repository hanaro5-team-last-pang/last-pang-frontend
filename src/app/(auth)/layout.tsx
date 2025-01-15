import HeaderTab from '@/components/molecules/HeaderTab';
import Header from '@/components/organisms/Header';
import { ReactNode } from 'react';

interface Props {
  panel: ReactNode;
  children: ReactNode;
}

export default function Layout({ panel, children }: Props) {
  return (
    <>
      <Header loginStatus={false}>
        <HeaderTab />
      </Header>
      <div className="header-skeleton"></div>
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2">
        <div className="bg-red-500 hidden lg:block">{panel}</div>
        <div className="bg-blue-500">{children}</div>
      </div>
    </>
  );
}
