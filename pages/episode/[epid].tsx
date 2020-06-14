import React, { useEffect } from 'react';
import Parser from 'rss-parser';
import { GetStaticProps, GetStaticPaths } from 'next';

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { epid } = params;

  const parser = new Parser();

  const feed = await parser.parseURL(
    'https://anchor.fm/s/1ffb5f30/podcast/rss',
  );

  if (!feed) {
    return {
      props: {},
    };
  }

  const episode = feed?.items?.find((item) => item?.title?.trim() === epid);

  return {
    props: {
      episode,
    },
  };
};

export const getPaths: any = async () => {
  const parser = new Parser();

  const feed = await parser.parseURL(
    'https://anchor.fm/s/1ffb5f30/podcast/rss',
  );

  const paths = feed?.items?.map((item: any) => {
    return {
      params: {
        epid: item.title.trim(),
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

const Episode: React.FC = (props: any) => {
  const { episode } = props;

  useEffect(() => {
    console.log(episode);
  }, []);

  return <p>Post</p>;
};

export default Episode;
