import { ChatRequestType, ChatResponseType } from '@/hanaHakdang';
import { createContext } from 'react';

export const ChatsContext = createContext<ChatResponseType[]>([]);
export const ChatsPublishContext = createContext<
  (message: ChatRequestType) => void
>(() => {});
