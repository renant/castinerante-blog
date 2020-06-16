import React from 'react';

import { GetStaticProps } from 'next';
import Link from 'next/link';

import { getSimpleFeed, SimpleFeed } from '../services/feed';
import EpisodeCard from '../components/EpisodeCard';
import { Main } from '../styles/style';

export const getStaticProps: GetStaticProps = async () => {
  const feed = await getSimpleFeed();

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
      {/* <Link href={`episode/${episode.id}`}>
              <a>{episode.title}</a>
            </Link> */}
    </Main>
  );
};

export default Home;
