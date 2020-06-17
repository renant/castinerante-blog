import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { AudioPlayerProvider } from 'react-use-audio-player';
import { getEpisodesIds, getEpisodeById, Episode } from '../../services/feed';
import AudioPlayer from '../../components/AudioPlayer';

import { Container } from '../../styles/episode/style';

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { epid } = params;

  const episode = await getEpisodeById(epid);

  return {
    props: {
      episode,
    },
  };
};

const getPaths: any = async () => {
  const episodesIds = await getEpisodesIds();

  const paths = episodesIds.map((id) => {
    return {
      params: {
        epid: id,
      },
    };
  });
  return paths;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPaths();
  return {
    fallback: false,
    paths,
  };
};

interface Props {
  episode: Episode;
}

const EpisodePost: React.FC<Props> = (props: Props) => {
  const { episode } = props;

  return (
    <Container>
      {console.log(episode)}
      <img alt={`episode-${episode.title}`} src={episode.image} />
      <p>{episode.title}</p>
      <AudioPlayerProvider>
        <AudioPlayer file={episode.audioUrl} />
      </AudioPlayerProvider>
      <p>{episode.content}</p>
    </Container>
  );
};

export default EpisodePost;
