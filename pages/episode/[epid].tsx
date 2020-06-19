import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { AudioPlayerProvider } from 'react-use-audio-player';
import { getEpisodesIds, getEpisodeById, Episode } from '../../services/feed';
import AudioPlayer from '../../components/AudioPlayer';

import {
  Container,
  ImageContainer,
  EpisodeContainer,
  InfoContainer,
  EpisodeTitle,
} from '../../styles/episode/style';

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { epid } = params;

  const episode = await getEpisodeById(epid);

  return {
    props: {
      episode,
      episodeId: epid,
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
  episodeId: string;
}

const EpisodePost: React.FC<Props> = (props: Props) => {
  const { episode, episodeId } = props;

  return (
    <>
      <Container>
        <ImageContainer>
          <img
            alt={`episode-${episode.title}`}
            src={`/images/${episodeId}.webp`}
          />
        </ImageContainer>
        <EpisodeContainer>
          <EpisodeTitle>{episode.title}</EpisodeTitle>
          <AudioPlayerProvider>
            <AudioPlayer file={episode.audioUrl} />
          </AudioPlayerProvider>
        </EpisodeContainer>
        <InfoContainer>
          <p>{episode.content}</p>
        </InfoContainer>
      </Container>
    </>
  );
};

export default EpisodePost;
