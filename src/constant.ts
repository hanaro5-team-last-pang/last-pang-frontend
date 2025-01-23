export const STOMP_BROKER_URL =
  'ws://ec2-54-180-227-251.ap-northeast-2.compute.amazonaws.com/classroom';

export const CHAT_SUBSCRIBE_URL = (classroomId: bigint) =>
  `/topic/chat/${classroomId}`;
export const CHAT_PUBLISH_URL = (classroomId: bigint) =>
  `/app/chat/${classroomId}`;

export const SIGNALING_SUBSCRIBE_URL = (classroomId: bigint) =>
  `/topic/signaling/${classroomId}`;
export const SIGNALING_PUBLISH_URL = (classroomId: bigint) =>
  `/app/signaling/${classroomId}`;
