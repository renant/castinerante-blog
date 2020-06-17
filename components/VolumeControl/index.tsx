import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';
import { FiVolume2, FiVolumeX } from 'react-icons/fi';

import { Container, InputRange, MuteBtn } from './style';

const VolumeControl: React.FC = () => {
  const { volume, mute } = useAudioPlayer();
  const [muted, setMuted] = useState(false);
  useEffect(() => {
    mute(muted);
  }, [muted, mute]);

  const handleChange = useCallback(
    (slider: ChangeEvent<HTMLInputElement>) => {
      const volValue = parseFloat(
        (Number(slider.target.value) / 100).toFixed(2),
      );
      setMuted(false);
      return volume(volValue);
    },
    [volume],
  );

  return (
    <Container>
      <MuteBtn
        type="button"
        onClick={() => setMuted((lastState) => !lastState)}
      >
        {muted ? <FiVolumeX /> : <FiVolume2 />}
      </MuteBtn>
      <InputRange
        type="range"
        min={0}
        max={100}
        onChange={handleChange}
        defaultValue={100}
      />
    </Container>
  );
};

export default VolumeControl;
