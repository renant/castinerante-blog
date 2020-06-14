import React from 'react';

import { GetStaticProps } from 'next';
import Link from 'next/link';
import { getSimpleFeed, SimpleFeed } from '../services/feed';

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
    <div>
      <ul>
        {feed.episodes.map((episode) => (
          <li key={episode.guid}>
            <Link href={`episode/${episode.id}`}>
              <a>{episode.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
