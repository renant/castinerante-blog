import React, { useEffect } from 'react';

import Parser from 'rss-parser';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async (context) => {
  const parser = new Parser();

  const feed = await parser.parseURL(
    'https://anchor.fm/s/1ffb5f30/podcast/rss',
  );

  return {
    props: {
      feed,
    },
  };
};

const Home: React.FC = (props: any) => {
  const { feed } = props;

  useEffect(() => {
    console.log(feed);
  }, []);

  return (
    <div>
      <h1>{`${feed.title} = deploy`}</h1>
      <ul>
        {feed.items.map((item: any) => (
          <li key={item.guid}>
            <Link href={`episode/${item.title.trim()}`}>
              <a>{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
