import { IceCandidateType, SignalType } from '@/webrtc/type';

/**
 * 로컬 피어 연결 클래스
 * @author magae1
 */
export default class LocalPeerConnection {
  private readonly _remotePeerId: string;
  private _pConn: RTCPeerConnection | null = null;

  constructor(remotePeerId: string) {
    this._remotePeerId = remotePeerId;
  }

  public initPeerConnection(config?: RTCConfiguration) {
    this._pConn = new RTCPeerConnection(config);
  }

  public async receiveAnswerCallback(answer: RTCSessionDescriptionInit) {
    if (!this._pConn) {
      throw new Error('로컬 연결을 찾을 수 없습니다.');
    }
    await this._pConn.setRemoteDescription(new RTCSessionDescription(answer));
  }

  public async sendOffer(sendFn: (text: string) => void) {
    if (!this._pConn) {
      throw new Error('로컬 연결을 찾을 수 없습니다.');
    }
    const offer = await this._pConn.createOffer();
    await this._pConn.setLocalDescription(offer);
    const offerSignal: SignalType = {
      peerId: this._remotePeerId,
      description: offer,
    };
    sendFn(JSON.stringify(offerSignal));
  }

  public addIceCandidateCallback(sendFn: (text: string) => void) {
    if (!this._pConn) {
      throw new Error('로컬 연결을 찾을 수 없습니다.');
    }
    this._pConn.addEventListener('icecandidate', (e) => {
      if (e.candidate) {
        const iceCandidate: IceCandidateType = {
          peerId: this._remotePeerId,
          candidate: {
            ...e.candidate,
          },
        };
        sendFn(JSON.stringify(iceCandidate));
      }
    });
  }

  public addLocalTrack(localStream: MediaStream) {
    localStream.getTracks().forEach((track) => {
      this._pConn?.addTrack(track, localStream);
    });
  }

  public close() {
    this._pConn?.close();
    this._pConn = null;
  }

  get remotePeerId() {
    return this._remotePeerId;
  }
}
