export type SignalType = {
  peerId: string;
  description: RTCSessionDescriptionInit;
};

export type IceCandidateType = {
  peerId: string;
  candidate: RTCIceCandidateInit;
};
