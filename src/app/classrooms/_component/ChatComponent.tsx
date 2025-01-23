'use client';

import { CHAT_PUBLISH_URL, CHAT_SUBSCRIBE_URL } from '@/constant';
import {
  StompIsConnectedContext,
  StompPublishContext,
  StompSubscribeContext,
} from '@/context/StompConnectionContext';
import { ChatRequestType, ChatResponseType } from '@/types/hanaHakdang';
import { IMessage } from '@stomp/stompjs';
import dayjs from 'dayjs';
import { IoSend } from 'react-icons/io5';
import { MdOutlineMessage } from 'react-icons/md';
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
      username: '정중일',
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

  const formatDate = (isoString: string) => {
    const date = dayjs(isoString);
    const hour =
      date.hour() > 12 ? `오후 ${date.hour() - 12}` : `오전 ${date.hour()}`;
    const minute = date.minute();

    return `${hour}:${minute}`;
  };

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
    <div className="bg-ourLightBlue rounded-lg drop-shadow-md h-full">
      <div className="h-1/6 flex items-center">
        <div className="px-4 w-full">
          <div className="bg-hanaNavy rounded-md flex justify-center text-center text-white items-center py-2">
            <MdOutlineMessage className="text-lg mx-2" />
            채팅
          </div>
        </div>
      </div>
      <div className="flex px-4 flex-col gap-y-2 overflow-y-auto scrollbar-hide h-4/6">
        {chats.map((chat, index) => {
          return (
            <div key={index}>
              <p className="text-gray-500 my-2">{chat.username}</p>
              <div className="inline-flex items-end bg-ourGreen text-white rounded-md p-2">
                <p className="mr-2">{chat.body}</p>
                <p className="text-2xs">{formatDate(chat.timestamp)}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="px-4 flex items-center justify-center h-1/6">
        <form
          onSubmit={onSubmitChat}
          className="bg-ourGreen flex justify-center items-center w-full rounded-md py-2"
        >
          <div className="w-full px-2">
            <input
              ref={inputRef}
              name="chat"
              className="m-2 pl-1 bg-inherit text-white font placeholder-white w-full focus:outline-none"
              placeholder="메시지를 입력하세요"
            />
          </div>
          <div>
            <button className="px-4 py-2 rounded-lg bg-white mx-2">
              <IoSend />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
