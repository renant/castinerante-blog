import styled from 'styled-components';

export const EpisodeImage = styled.div`
  img {
    max-width: 120px;
    display: block;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  background: greenyellow;
  margin: 10px;
`;

export const EpisodeInfo = styled.div`
  flex: 1 1;
  margin-left: 20px;
  overflow: hidden;
  h1 {
    font-size: 20px;
  }

  P {
    margin-top: 10px;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: pre-line;
    word-wrap: break-word;
  }
`;

export const PubDate = styled.label``;
