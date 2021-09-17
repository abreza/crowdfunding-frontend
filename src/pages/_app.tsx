import type { AppProps } from 'next/app';
import { RootState, store } from 'app/store';
import { Provider, useSelector } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';

import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { FC, useCallback, useEffect } from 'react';
import BaseHead from 'components/organisms/head/BaseHead';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import 'assets/styles/app.css';
import 'assets/styles/gallery.css';
import 'assets/fonts/fontiran.css';
import { useVerifyTokenMutation } from 'app/services/auth';
import createEmotionCache from 'createEmotionCache';
import { theme } from 'constants/theme';

let persistor = persistStore(store);
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [verifyToken] = useVerifyTokenMutation();
  const token = useSelector((state: RootState) => state.auth.token);

  const checkToken = useCallback(async () => {
    if (token) {
      await verifyToken({ token }).unwrap();
    }
  }, []);

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BaseHead />
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <ToastContainer limit={3} />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
