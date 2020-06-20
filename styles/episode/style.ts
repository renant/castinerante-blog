import styled from 'styled-components';
import { DiscussionEmbed } from 'disqus-react';

export const Container = styled.div`
  flex: 1 1 700px;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid black;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  img {
    height: 150px;
  }
`;

export const EpisodeContainer = styled.div`
  flex: 1;
  margin-left: 20px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0px;
  }
`;

export const InfoContainer = styled.div`
  margin: 20px 0 0 0;

  p {
    margin-top: 20px;
    white-space: pre-line;
    line-height: 1.5;
    text-align: justify;
  }

  @media only screen and (max-width: 768px) {
    p {
      margin-left: 20px;
      margin-right: 20px;
      font-size: 26px;
    }
  }
`;

export const EpisodeTitle = styled.h1`
  color: #5e239d;
  font-size: 26px;

  @media only screen and (max-width: 768px) {
    margin-top: 20px;
    font-size: 32px;
    text-align: center;
  }
`;

export const ShareContainer = styled.div`
  width: 100%;
  padding-bottom: 20px;
  margin-bottom: 50px;

  div {
    text-align: center;

    svg {
      margin: 10px 10px 0 10px;
      border-radius: 50%;
      height: 40px;
      width: 40px;
    }
  }

  @media only screen and (max-width: 768px) {
    div {
      svg {
        height: 50px;
        width: 50px;
      }
    }
  }
`;

export const ShareTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 10px;
  h4 {
    font-size: 20px;
  }

  @media only screen and (max-width: 768px) {
    h4 {
      font-size: 30px;
    }
  }
`;

export const DisqusContainer = styled(DiscussionEmbed)`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
`;
