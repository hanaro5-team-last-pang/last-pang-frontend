import { ChatResponseType, ReducerAction } from '@/hanaHakdang';

export default function chatsReducer(
  chats: ChatResponseType[],
  action: ReducerAction<ChatResponseType>
) {
  switch (action.type) {
    case 'add': {
      return [...chats, action.data];
    }
    default: {
      return chats;
    }
  }
}
