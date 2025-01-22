'use client';

import useLocalVideo from '@/hooks/useLocalVideo';
import useMediaDevices from '@/hooks/useMediaDevices';

export default function VideoComponent() {
  const { videoRef, changeDevice, stream } = useLocalVideo();
  const { videoDevices, audioDevices } = useMediaDevices();

  const toggleVideo = () => {
    if (videoRef.current!.srcObject) {
      videoRef.current!.srcObject = null;
    } else {
      videoRef.current!.srcObject = stream;
    }
  };

  return (
    <div className="overflow-y-auto flex flex-col scrollbar-hide">
      <div>
        <video ref={videoRef} autoPlay />
      </div>
      <div>
        <span>비디오</span>
        <div className="grid grid-cols-1 gap-3">
          {videoDevices?.map((device, i) => {
            return (
              <button
                key={i}
                onClick={() => changeDevice(device)}
                className="bg-emerald-500"
              >
                {device.label}
              </button>
            );
          })}
        </div>
        <button onClick={toggleVideo}>비디오 종료</button>
      </div>
      <div>
        <span>오디오</span>
        <div className="grid grid-cols-1 gap-y-3">
          {audioDevices?.map((device, i) => {
            return (
              <button
                key={i}
                onClick={() => changeDevice(device)}
                className="bg-emerald-500"
              >
                {device.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
