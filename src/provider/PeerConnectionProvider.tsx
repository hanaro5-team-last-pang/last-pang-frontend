import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function PeerConnectionProvider(props: Props) {
  const { children } = props;

  return <>{children}</>;
}
