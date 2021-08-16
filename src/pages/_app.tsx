import type { AppProps } from 'next/app';
import Head from 'next/head';
import GlobalStyles from 'styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>NextJS Boilerplate</title>
        <link rel='manifest' href='/manifest.json' />
        {/* <link rel="shortcut icon" href="" />
        <link rel="apple-touch-icon" href="" />
        <meta property="og:image" content=""></meta>
        <meta property="og:title" content="NextJS Boilerplate" />
        <meta name="description" content="description of the page" /> */}
      </Head>

      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
