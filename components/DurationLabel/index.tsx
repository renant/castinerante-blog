import { useAudioPlayer } from 'react-use-audio-player';
import React, { useMemo } from 'react';

import { Container } from './style';

const DurationLabel: React.FC = () => {
  const { duration } = useAudioPlayer();

  const durationLabel = useMemo(() => {
    const display = (time: any) => `${time ? `${time}:` : ''}`;
    const hours = Math.floor(duration / 60 / 60);
    const minutes = Math.floor(duration / 60) % 60;
    const seconds = Math.floor(duration - minutes * 60);
    return `${display(hours)}${display(minutes)}${seconds}`;
  }, [duration]);

  return <Container>{durationLabel}</Container>;
};

export default DurationLabel;
