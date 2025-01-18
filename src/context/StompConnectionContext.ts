import { IMessage } from '@stomp/stompjs';
import { createContext } from 'react';

export const StompPublishContext = createContext<
  <T>(destination: string, data: T) => void
>(() => {});

export const StompSubscribeContext = createContext<
  (destination: string, callback: (message: IMessage) => void) => void
>(() => {});

export const StompIsConnectedContext = createContext<boolean>(false);
