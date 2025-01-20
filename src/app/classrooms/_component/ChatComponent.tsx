'use client';

import { CHAT_PUBLISH_URL, CHAT_SUBSCRIBE_URL } from '@/constant';
import {
  StompIsConnectedContext,
  StompPublishContext,
  StompSubscribeContext,
} from '@/context/StompConnectionContext';
import { ChatRequestType, ChatResponseType } from '@/hanaHakdang';
import { IMessage } from '@stomp/stompjs';
import {
  FormEvent,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';

interface Props {
  classroomId: bigint;
}

export default function ChatComponent({ classroomId }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const isConnected = useContext(StompIsConnectedContext);
  const publish = useContext(StompPublishContext);
  const subscribe = useContext(StompSubscribeContext);
  const formButtonRef = useRef<HTMLButtonElement | null>(null);

  const [chats, setChats] = useState<ChatResponseType[]>([]);

  const onSubmitChat = (e: FormEvent) => {
    e.preventDefault();
    if (!inputRef.current || !inputRef.current.value) return;
    const chatBody = inputRef.current.value;
    const chatRequest: ChatRequestType = {
      userId: 1,
      username: 'magae1',
      body: chatBody,
      lectureId: 1,
    };
    publish<ChatRequestType>(CHAT_PUBLISH_URL(classroomId), chatRequest);
    inputRef.current.value = '';
  };

  const subscribeChat = useCallback(() => {
    subscribe(CHAT_SUBSCRIBE_URL(classroomId), (message: IMessage) => {
      const chatResponse = JSON.parse(message.body) as ChatResponseType;
      setChats((prev) => [...prev, chatResponse]);
    });
  }, []);

  useEffect(() => {
    console.log('connection:', isConnected);
    if (isConnected) {
      subscribeChat();
    }
  }, [isConnected]);

  useEffect(() => {
    const onKeyboardEnter = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        formButtonRef.current?.click();
      }
    };

    inputRef.current?.addEventListener('keydown', onKeyboardEnter);
  }, []);

  return (
    <div>
      <div>
        <div className="flex flex-col gap-y-2 overflow-y-auto h-96">
          {chats.map((chat, i) => {
            return (
              <div key={i} className="bg-blue-300">
                <p>사용자 ID: {chat.userId}</p>
                <p>사용자명: {chat.username}</p>
                <p>내용: {chat.body}</p>
              </div>
            );
          })}
        </div>
      </div>
      <form onSubmit={onSubmitChat}>
        <input ref={inputRef} name="chat" />
        <button className="px-5 py-1" type="submit" ref={formButtonRef}>
          전송!
        </button>
      </form>
    </div>
  );
}
