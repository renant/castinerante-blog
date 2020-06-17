import styled from 'styled-components';

export const EpisodeImage = styled.div`
  img {
    max-width: 200px;
    display: block;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  /* background: greenyellow; */
  margin: 10px;

  padding-bottom: 15px;
  border-bottom: 1px solid black;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const EpisodeInfo = styled.div`
  flex: 1 1;
  margin-left: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  a {
    color: #5e239d;
    text-decoration: none;
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

  @media only screen and (max-width: 768px) {
    width: 100%;
    text-align: center;

    a {
      height: 100%;
      font-size: 28px;
    }

    p {
      display: none;
    }
  }
`;

export const PubDate = styled.label`
  text-align: right;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
    text-align: center;
    margin-top: 10px;
  }
`;
