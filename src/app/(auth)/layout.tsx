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
      <div className="wrapper grid grid-cols-1 lg:grid-cols-2 mt-12">
        <div className="hidden lg:block">{panel}</div>
        <div>{children}</div>
      </div>
    </>
  );
}
