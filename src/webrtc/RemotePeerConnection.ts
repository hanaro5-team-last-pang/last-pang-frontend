import { SignalType } from '@/webrtc/type';

/**
 * 원격 피어 연결 클래스
 * @author magae1
 */
export default class RemotePeerConnection {
  private readonly _remotePeerId: string;
  private _pConn: RTCPeerConnection | null = null;

  constructor(remotePeerId: string) {
    this._remotePeerId = remotePeerId;
  }

  public initPeerConnection(config?: RTCConfiguration) {
    this._pConn = new RTCPeerConnection(config);
  }

  private async sendAnswer(sendFn: (text: string) => void) {
    if (!this._pConn) {
      throw new Error('원격 연결을 찾을 수 없습니다.');
    }
    const answer = await this._pConn.createAnswer();
    await this._pConn.setLocalDescription(answer);
    const answerSignal: SignalType = {
      peerId: this._remotePeerId,
      description: answer,
    };
    sendFn(JSON.stringify(answerSignal));
  }

  public async receiveOfferCallback(
    offer: RTCSessionDescriptionInit,
    sendFn: (text: string) => void
  ) {
    if (!this._pConn) {
      throw new Error('원격 연결을 찾을 수 없습니다.');
    }
    await this._pConn.setRemoteDescription(new RTCSessionDescription(offer));
    await this.sendAnswer(sendFn);
  }

  public async receiveIceCandidateCallback(candidate: RTCIceCandidate) {
    if (!this._pConn) {
      throw new Error('원격 연결을 찾을 수 없습니다.');
    }
    await this._pConn.addIceCandidate(candidate);
  }

  public addRemoteTrack(videoElement: HTMLVideoElement) {
    if (!this._pConn) {
      throw new Error('원격 연결을 찾을 수 없습니다');
    }
    this._pConn.addEventListener('track', async (e) => {
      const [remoteStream] = e.streams;
      videoElement.srcObject = remoteStream;
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
