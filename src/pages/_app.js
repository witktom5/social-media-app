import '../../styles/globals.css';
import Head from 'next/dist/shared/lib/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Social Media App</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
