import React from 'react';
import { GetStaticProps, GetStaticPaths } from 'next';
import { getEpisodesIds, getEpisodeById, Episode } from '../../services/feed';

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

  return <p>Post</p>;
};

export default EpisodePost;
