import React from 'react';

import { Container, EpisodeImage, EpisodeInfo, PubDate } from './style';
import { SimpleEpisode } from '../../services/feed';

interface Props {
  episode: SimpleEpisode;
}

const EpisodeCard: React.FC<Props> = ({ episode }: Props) => {
  return (
    <Container>
      <EpisodeImage>
        <img alt={`episode-${episode.title}`} src={episode.image} />
      </EpisodeImage>
      <EpisodeInfo>
        <PubDate>{episode.pubDate}</PubDate>
        <h1>{episode.title}</h1>
        <p>{episode.content}</p>
      </EpisodeInfo>
    </Container>
  );
};

export default EpisodeCard;
