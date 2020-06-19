import styled from 'styled-components';

export const Container = styled.div`
  flex: 1 1 100px;
  /* background: hotpink; */
  margin-bottom: 20px;
`;

export const Title = styled.h4`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 25px;
  color: #494949;
  text-align: center;

  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const SocialLink = styled.a`
  cursor: pointer;
  color: #494949;
  transition: color 0.2s;

  &:hover {
    color: #5e239d;
  }

  @media only screen and (max-width: 768px) {
    svg {
      height: 50px;
      width: 50px;
    }
  }
`;

export const Social = styled.div`
  display: flex;
  justify-content: space-around;
  margin-left: 20px;
  margin-right: 20px;
`;
