import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 1 700px;
  flex-direction: row;
  display: flex;
  flex-wrap: wrap;
  margin-left: 20px;
  margin-right: 20px;
`;

export const ImageContainer = styled.div`
  img {
    height: 150px;
  }
`;

export const EpisodeContainer = styled.div`
  flex: 1;
  margin-left: 20px;
`;

export const InfoContainer = styled.div`
  margin: 20px 0 0 0;

  p {
    white-space: pre-line;
    line-height: 1.5;
    text-align: justify;
  }
`;

export const EpisodeTitle = styled.h1`
  color: #5e239d;
  font-size: 26px;
`;
