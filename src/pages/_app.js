import "@/styles/globals.css";

// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />;
// }

// pages/_app.js
import Header from '../pages/layout/header'
import Footer from '../pages/layout/footer';

// import '../styles/globals.css'; // Make sure you include global styles

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
