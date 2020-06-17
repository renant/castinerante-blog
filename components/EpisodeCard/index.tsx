import React from 'react';
import { parseISO, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';

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
        <PubDate>
          {format(parseISO(episode.pubDate), "'Dia' dd 'de' MMMM'", {
            locale: ptBR,
          })}
        </PubDate>
        <Link href={`episode/${episode.id}`}>
          <a>{episode.title}</a>
        </Link>
        <p>{episode.content}</p>
      </EpisodeInfo>
    </Container>
  );
};

export default EpisodeCard;
