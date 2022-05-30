import '../../styles/globals.css';
import Head from 'next/dist/shared/lib/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Social Media App</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Navbar />
      <Container>
        <Component {...pageProps} />
      </Container>
      <Footer />
    </>
  );
}

export default MyApp;
