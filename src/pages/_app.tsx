import type { AppProps } from 'next/app';
import { store } from 'app/store';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';

import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { FC, useReducer, useState } from 'react';
import BaseHead from 'components/organisms/head/BaseHead';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import 'assets/styles/app.css';
import 'assets/styles/gallery.css';
import 'assets/fonts/fontiran.css';
import createEmotionCache from 'createEmotionCache';
import { sDarkTheme, sLightTheme } from 'constants/theme';
import { CheckToken } from 'components/hoc/CheckToken';
import { DispatchContext } from 'contexts/DispatchContext';

let persistor = persistStore(store);
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: FC<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [theme, setTheme] = useState(sLightTheme);

  const changeTheme = (mode: string): void => {
    if (mode === 'dark') {
      setTheme(sDarkTheme);
    } else {
      setTheme(sLightTheme);
    }
  };

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BaseHead />
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <ToastContainer limit={3} />
            <CheckToken />
            <DispatchContext.Provider value={changeTheme}>
              <Component {...pageProps} />
            </DispatchContext.Provider>
          </ThemeProvider>
        </CacheProvider>
      </PersistGate>
    </Provider>
  );
};

export default MyApp;
