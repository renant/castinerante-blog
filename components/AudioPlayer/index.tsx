import React, { useEffect, useState } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';
import DurationLabel from '../DurationLabel';
import AudioSeekBar from '../AudioSeekBar';

interface Props {
  file: string;
}

const AudioPlayer: React.FC<Props> = ({ file }: Props) => {
  const { togglePlayPause, ready, loading, playing } = useAudioPlayer({
    src: file,
    format: 'mp3',
    autoplay: false,
  });

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading) return <div>Loading audio</div>;

  return (
    <div>
      <button type="button" onClick={togglePlayPause}>
        {playing ? 'Pause' : 'Play'}
      </button>
      <DurationLabel />
      <AudioSeekBar />
    </div>
  );
};

export default AudioPlayer;
