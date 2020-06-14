import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 90px;
  background: #5e239d;
`;

export const LogoContainer = styled.div`
  margin-top: -15px;
  height: 90px;
  overflow: hidden;
`;

export const Logo = styled.img`
  height: 100px;
  position: relative;
`;

export const LinksContainer = styled.div`
  width: 150px;
  display: flex;
  height: 30px;
  justify-content: space-between;
`;

export const ALink = styled.a`
  cursor: pointer;
  color: #00f0b5;
  font-size: 16px;
  font-family: 'Roboto Slab', serif;

  &:hover {
    color: ${shade(0.2, '#00f0b5')};
  }
`;
