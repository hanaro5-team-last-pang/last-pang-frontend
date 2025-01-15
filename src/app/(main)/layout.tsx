import HeaderTab from '@/components/molecules/HeaderTab';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header loginStatus={true}>
        <HeaderTab />
      </Header>
      <div className="header-skeleton"></div>
      <div className="wrapper">{children}</div>
      <Footer />
    </>
  );
}
