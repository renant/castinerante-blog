import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  MouseEvent,
} from 'react';
import { useAudioPlayer, useAudioPosition } from 'react-use-audio-player';

import { Container, Tick } from './style';

const AudioSeekBar: React.FC = () => {
  const { position, duration, seek } = useAudioPosition({
    highRefreshRate: true,
  });
  const { playing } = useAudioPlayer();
  const [barWidth, setBarWidth] = useState('0%');

  const seekBarElem = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const width = `${(position / duration) * 100 || 0}%`;
    setBarWidth(width);
  }, [position, duration]);

  const goTo = useCallback(
    (event: MouseEvent) => {
      const { pageX: eventOffsetX } = event;

      // TODO duration is 0 until the audio starts playing
      if (seekBarElem.current && playing) {
        const elementOffsetX = seekBarElem.current.offsetLeft;
        const elementWidth = seekBarElem.current.clientWidth;
        const percent = (eventOffsetX - elementOffsetX) / elementWidth;
        seek(percent * duration);
      }
    },
    [duration, playing, seek],
  );

  return (
    <Container ref={seekBarElem} onClick={goTo}>
      <Tick style={{ width: barWidth }} />
    </Container>
  );
};

export default AudioSeekBar;
