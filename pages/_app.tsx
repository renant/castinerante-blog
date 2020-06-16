import React from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { Main, Container, MainContainer } from '../styles/style';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <MainContainer>
      <GlobalStyle />
      <Head>
        <title>Castinerante - Podcast Castinerante</title>
      </Head>
      <Header />
      <Container>
        <Component {...pageProps} />
        <SideMenu />
      </Container>
    </MainContainer>
  );
};

export default MyApp;
