import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { Main, Container } from '../styles/style';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Container>
        <Main>
          <Component {...pageProps} />
        </Main>
        <SideMenu />
      </Container>
    </>
  );
};

export default MyApp;
