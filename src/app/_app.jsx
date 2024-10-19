import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    const handleRouteChange = (url) => {
      window.gtag('config', 'G-PZYXXRSEFQ', {
        page_path: url,
      });
    };

    Router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      Router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, []);

  return <Component {...pageProps} />;
};

export default MyApp;