import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const PlayButton = styled.button`
  border: none;
  font-size: 35px;
  background: none;
  color: #5e239d;

  @media only screen and (max-width: 768px) {
    font-size: 50px;
  }
`;

export const PlayerContainer = styled.div`
  display: flex;
  height: 40px;
  align-items: center;

  @media only screen and (max-width: 768px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const PlayButtonContainer = styled.div``;

export const PlayBarContainer = styled.div`
  width: 100%;
  margin-left: 20px;
`;

export const LoadingContainer = styled.div`
  font-size: 35px;
  text-align: center;
  color: #5e239d;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
  }

  svg {
    animation: spin 2s linear infinite;
  }
`;
