import React from 'react';
import { Container, Logo, LogoContainer } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo
          alt="castinerante-logo"
          src="https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/staging/podcast_uploaded_nologo400/5265676/54218dabcf4b609f.png"
        />
      </LogoContainer>

      <h1>Header HEader</h1>
    </Container>
  );
};

export default Header;
