import React, { useEffect } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import GlobalStyle from '../styles/global';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';
import { Container, MainContainer } from '../styles/style';
import * as gtag from '../lib/gtag.js';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

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
