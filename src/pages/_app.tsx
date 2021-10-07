import type { AppProps } from 'next/app';
import { store } from 'src/app/store';
import { Provider } from 'react-redux';
import { CssBaseline, ThemeProvider, useMediaQuery } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';

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

import createEmotionCache from 'src/createEmotionCache';
import { sDarkTheme, sLightTheme } from 'src/constants/theme';
import { CheckToken } from 'src/components/hoc/CheckToken';
import { DispatchContext } from 'src/contexts/DispatchContext';
import { getCookie } from 'src/utils/getCookies';

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
            <CssBaseline />
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
