'use client';

import { STOMP_BROKER_URL } from '@/constant';
import {
  StompIsConnectedContext,
  StompPublishContext,
  StompSubscribeContext,
} from '@/context/StompConnectionContext';
import { Client, IMessage } from '@stomp/stompjs';
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';

interface Props {
  children: ReactNode;
}

/**
 * STOMP 연결 관련 provider. subscribe나 publish 전에 반드시 연결 여부(isConnected)를 확인해야 합니다.
 * @param props
 * @constructor
 */
export default function StompConnectionProvider(props: Props) {
  const { children } = props;
  const stompClientRef = useRef<Client>(
    new Client({ brokerURL: STOMP_BROKER_URL })
  );
  const [isConnected, setIsConnected] = useState(false);

  const publishMessage = <T,>(destination: string, data: T) => {
    const body = JSON.stringify(data);
    stompClientRef.current.publish({ destination, body });
  };

  const subscribeTopic = (
    destination: string,
    callback: (message: IMessage) => void
  ) => {
    stompClientRef.current.subscribe(destination, callback);
  };

  const onConnectEvent = useCallback(() => {
    console.log('stomp connected!');
    setIsConnected(true);
  }, []);

  const onDisconnectEvent = useCallback(() => {
    console.log('stomp disconnected!');
    setIsConnected(false);
  }, []);

  useEffect(() => {
    if (stompClientRef.current.connected) {
      stompClientRef.current.deactivate().then();
    }
    stompClientRef.current.onConnect = onConnectEvent;
    stompClientRef.current.onDisconnect = onDisconnectEvent;
    stompClientRef.current.activate();
  }, []);

  return (
    <StompIsConnectedContext.Provider value={isConnected}>
      <StompPublishContext.Provider value={publishMessage}>
        <StompSubscribeContext.Provider value={subscribeTopic}>
          {children}
        </StompSubscribeContext.Provider>
      </StompPublishContext.Provider>
    </StompIsConnectedContext.Provider>
  );
}
