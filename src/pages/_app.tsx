import type { AppProps } from 'next/app';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { ThemeProvider, useMediaQuery } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';

import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { FC, useEffect, useState } from 'react';
import BaseHead from 'components/organisms/head/BaseHead';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import 'assets/styles/app.css';
import 'assets/styles/gallery.css';
import 'assets/fonts/fontiran.css';
import 'assets/styles/tiny.css';

import createEmotionCache from 'createEmotionCache';
import { sDarkTheme, sLightTheme } from 'constants/theme';
import { CheckToken } from 'components/hoc/CheckToken';
import { DispatchContext } from 'contexts/DispatchContext';
import { getCookie } from 'utils/getCookies';

let persistor = persistStore(store);
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BaseHead />
        <CacheProvider value={emotionCache}>
          <ThemeProvider
            theme={themeMode === 'dark' ? sDarkTheme : sLightTheme}>
            <ToastContainer limit={3} />
            <CheckToken />
            <DispatchContext.Provider
              value={{ setThemeMode: changeTheme, themeMode }}>
              <Component {...pageProps} />
            </DispatchContext.Provider>
          </ThemeProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
