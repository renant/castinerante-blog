import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyle from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <div>
        <h1>Header</h1>
      </div>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
