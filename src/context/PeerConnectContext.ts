import { createContext } from 'react';

export const PeerConnectionContext = createContext<RTCPeerConnection | null>(
  null
);
