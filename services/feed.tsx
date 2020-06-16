import Parser from 'rss-parser';
import { cleanStringToId } from '../utils';

export interface SimpleFeed {
  title: string;
  episodes: Array<SimpleEpisode>;
}

export interface SimpleEpisode {
  guid: string;
  id: string;
  title: string;
  pubDate: Date;
  image: string;
  content: string;
}

export interface Episode {
  title: string;
}

const getFeed = async (): Promise<any> => {
  const parser = new Parser();

  const feed = await parser.parseURL(
    'https://anchor.fm/s/1ffb5f30/podcast/rss',
  );

  return feed;
};

export const getSimpleFeed = async (): Promise<SimpleFeed> => {
  const feed = await getFeed();

  const simpleFeed = {
    title: feed.title,
    episodes: feed.items.map((item: any) => {
      console.log(item);
      return {
        guid: item.guid,
        id: cleanStringToId(item.title),
        title: item.title,
        pubDate: item.pubDate,
        image: item.itunes.image,
        content: item.contentSnippet.split('---')[0],
      } as SimpleEpisode;
    }),
  } as SimpleFeed;

  return simpleFeed;
};

export const getEpisodesIds = async (): Promise<Array<string>> => {
  const feed = await getFeed();

  return feed.items.map((item: any) => {
    return cleanStringToId(item.title);
  });
};

export const getEpisodeById = async (id: string): Promise<Episode> => {
  const feed = await getFeed();

  const episode = feed.items.find(
    (item: any) => cleanStringToId(item?.title ?? '') === id,
  );

  console.log(episode);

  return {
    title: episode.title,
  };
};
