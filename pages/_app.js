// pages/_app.js
import '../app/styles/globals.css';
import '../app/styles/fonts.css';
import '../app/styles/CircularButton.css';
import '../app/styles/Trailer.css';
import Head from 'next/head';


import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

function R3fApp({ Component, pageProps }) {

  return <Component {...pageProps} />;
}

export default R3fApp;