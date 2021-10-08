import type { AppProps } from 'next/app';
import { store } from 'src/app/store';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import Script from 'next/script';
import * as gtag from 'src/config/gtag';

import { DefaultSeo } from 'next-seo';
import { seoConfig } from 'src/config/next-seo.config';

import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { FC, useEffect, useState } from 'react';
import BaseHead from 'src/components/organisms/head/BaseHead';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import 'src/assets/styles/app.css';
import 'src/assets/styles/gallery.css';
import 'src/assets/fonts/fontiran.css';
import 'src/assets/styles/tiny.css';
import 'src/assets/styles/nprogress.css';

import createEmotionCache from 'src/createEmotionCache';
import { sDarkTheme, sLightTheme } from 'src/config/theme';
import { CheckToken } from 'src/components/hoc/CheckToken';
import { DispatchContext } from 'src/contexts/DispatchContext';
import { getCookie } from 'src/utils/getCookies';

import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { usePersistLocaleCookie } from 'src/components/hoc/UsePersistLocaleCookie';

let persistor = persistStore(store);
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const router = useRouter();
  usePersistLocaleCookie();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };

    const handleStart = (url: string) => {
      console.log(`Loading: ${url}`);
      NProgress.start();
    };
    const handleStop = () => {
      console.log(`Loaded`);
      NProgress.done();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const preferredMode = prefersDarkMode ? 'dark' : 'light';
  const [themeMode, setThemeMode] = useState(preferredMode);

  useEffect(() => {
    setThemeMode(getCookie('paletteMode') || preferredMode);
  }, [preferredMode]);

  const changeTheme = (mode: string): void => {
    document.cookie = `paletteMode=${mode};path=/;max-age=31536000`;
    setThemeMode(mode);
  };

  return (
    <>
      <DefaultSeo {...seoConfig} />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BaseHead />
          <CacheProvider value={emotionCache}>
            <ThemeProvider
              theme={themeMode === 'dark' ? sDarkTheme : sLightTheme}>
              <CssBaseline />
              <CheckToken />
              <ToastContainer limit={3} />
              <DispatchContext.Provider
                value={{ setThemeMode: changeTheme, themeMode }}>
                <Component {...pageProps} />
              </DispatchContext.Provider>
            </ThemeProvider>
          </CacheProvider>
        </PersistGate>
      </Provider>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  );
};

export default MyApp;
