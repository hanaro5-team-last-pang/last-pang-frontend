import { useCallback, useEffect, useState } from 'react';

/**
 * 사용 가능한 미디어 장치(카메라, 오디오)에 대한 훅. 현재 연결된 카메라 장치들, 오디오 장치들에 대한 정보를 가져옵니다.
 * @author magae1
 */
export default function useMediaDevices() {
  const [videoDevices, setVideoDevices] = useState<MediaDeviceInfo[]>([]);
  const [audioDevices, setAudioDevices] = useState<MediaDeviceInfo[]>([]);

  const refreshMediaDeviceInfos = useCallback(() => {
    navigator.mediaDevices
      .enumerateDevices()
      .then((devices) => {
        console.log(devices);
        setVideoDevices(devices.filter((d) => d.kind === 'videoinput'));
        setAudioDevices(devices.filter((d) => d.kind === 'audioinput'));
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    navigator.mediaDevices.addEventListener(
      'devicechange',
      refreshMediaDeviceInfos
    );
    refreshMediaDeviceInfos();
  }, []);

  return {
    videoDevices,
    audioDevices,
    refreshMediaDeviceInfos,
  };
}
