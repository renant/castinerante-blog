import styled from 'styled-components';
import { shade } from 'polished';
import Link from 'next/link';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90px;
  background: #5e239d;

  @media only screen and (max-width: 768px) {
  }
`;

export const LogoContainer = styled.div`
  width: 50%;
  justify-content: center;
  display: flex;
  margin-top: -15px;
  height: 90px;
  overflow: hidden;
`;

export const Logo = styled.img`
  height: 100px;
  position: relative;

  @media only screen and (max-width: 768px) {
    height: 100px;
  }
`;

export const LinksContainer = styled.div`
  width: 50%;
  display: flex;
  margin-bottom: 10px;
  justify-content: center;

  > a {
    margin: 0 10px 0 10px;
    cursor: pointer;
    color: #00f0b5;
    font-size: 16px;
    text-decoration: none;
    font-family: 'Roboto Slab', serif;

    &:hover {
      color: ${shade(0.2, '#00f0b5')};
    }

    @media only screen and (max-width: 768px) {
      font-size: 30px;
    }
  }
`;
