import { useCallback, useEffect, useRef, useState } from 'react';

export default function useLocalVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [curConstraints, setConstraints] = useState<MediaStreamConstraints>({
    video: true,
    audio: true,
  });
  const streamRef = useRef<MediaStream | null>(null);

  const changeStream = async () => {
    streamRef.current =
      await navigator.mediaDevices.getUserMedia(curConstraints);
  };

  const changeDevice = useCallback((device: MediaDeviceInfo) => {
    if (device.kind === 'audioinput') {
      setConstraints((prevState) => ({
        ...prevState,
        audio: {
          deviceId: device.deviceId,
        },
      }));
    } else if (device.kind === 'videoinput') {
      setConstraints((prevState) => ({
        ...prevState,
        video: {
          deviceId: device.deviceId,
        },
      }));
    }
  }, []);

  const playVideo = () => {
    if (!videoRef.current) {
      throw new Error('비디오를 찾을 수 없습니다.');
    }
    videoRef.current.muted = true;
    videoRef.current.srcObject = streamRef.current;
  };

  useEffect(() => {
    changeStream().then(playVideo);
  }, [curConstraints]);

  return {
    videoRef,
    stream: streamRef.current,
    constraints: curConstraints,
    setConstraints,
    changeDevice,
  };
}
