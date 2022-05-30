import '../../styles/globals.css';
import Head from 'next/dist/shared/lib/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Container from '../components/Container';
import { Provider } from 'react-redux';
import { store } from '../app/store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Social Media App</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
        <Navbar />
        <Container>
          <Component {...pageProps} />
          <ToastContainer
            position='top-right'
            autoClose={3500}
            hideProgressBar={true}
            newestOnTop={false}
            theme='colored'
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </Container>
        <Footer />
      </Provider>
    </>
  );
}

export default MyApp;
