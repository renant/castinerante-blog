import React from 'react';
import Link from 'next/link';
import {
  Container,
  Logo,
  LogoContainer,
  LinksContainer,
  ALink,
} from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <Logo
          alt="castinerante-logo"
          src="https://s3-us-west-2.amazonaws.com/anchor-generated-image-bank/staging/podcast_uploaded_nologo400/5265676/54218dabcf4b609f.png"
        />
      </LogoContainer>
      <LinksContainer>
        <Link href="/">
          <ALink>Home</ALink>
        </Link>
        <Link href="/contact">
          <ALink>Contato</ALink>
        </Link>
      </LinksContainer>
    </Container>
  );
};

export default Header;
