import HeaderTab from '@/components/molecules/HeaderTab';
import Footer from '@/components/organisms/Footer';
import Header from '@/components/organisms/Header';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header>
        <HeaderTab />
      </Header>
      <div className="header-skeleton" />
      <div className="header-menu-skeleton" />
      <div>{children}</div>
      <Footer />
    </>
  );
}
