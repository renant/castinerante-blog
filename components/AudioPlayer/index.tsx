import React from 'react';
import { useAudioPlayer } from 'react-use-audio-player';
import { FiPause, FiPlay } from 'react-icons/fi';
import DurationLabel from '../DurationLabel';
import AudioSeekBar from '../AudioSeekBar';
import VolumeControl from '../VolumeControl';

import {
  Container,
  PlayButton,
  PlayerContainer,
  PlayButtonContainer,
  PlayBarContainer,
} from './style';

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
    <Container>
      <PlayerContainer>
        <PlayButtonContainer>
          <PlayButton type="button" onClick={togglePlayPause}>
            {playing ? <FiPause /> : <FiPlay />}
          </PlayButton>
        </PlayButtonContainer>
        <PlayBarContainer>
          <AudioSeekBar />
          <DurationLabel />
        </PlayBarContainer>
      </PlayerContainer>

      <VolumeControl />
    </Container>
  );
};

export default AudioPlayer;
