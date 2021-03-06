import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  cursor: pointer;
  width: 100%;
  height: 75px;
  background-color: #5e239d;
  height: 10px;
  border-radius: 12px;
  margin-bottom: 35px;

  @media only screen and (max-width: 768px) {
    height: 20px;
  }
`;

export const Tick = styled.div`
  background-color: #00f0b5;
  height: 100%;
  border-radius: 12px;
`;
