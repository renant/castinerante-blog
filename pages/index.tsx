import React from 'react';

import { GetStaticProps } from 'next';

import { getSimpleFeed, SimpleFeed } from '../services/feed';
import EpisodeCard from '../components/EpisodeCard';
import { Main } from '../styles/style';

import processImage from '../lib/processImage.js';

export const getStaticProps: GetStaticProps = async () => {
  const feed = await getSimpleFeed();

  feed.episodes.forEach(async (episode) => {
    await processImage(episode.image, episode.id);
  });

  return {
    props: {
      feed,
    },
  };
};

interface Props {
  feed: SimpleFeed;
}

const Home: React.FC<Props> = (props: Props) => {
  const { feed } = props;
  return (
    <Main>
      {feed.episodes.map((episode) => (
        <EpisodeCard episode={episode} />
      ))}
    </Main>
  );
};

export default Home;
