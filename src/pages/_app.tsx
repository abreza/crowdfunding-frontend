import type { AppProps } from 'next/app';
import { RootState, store } from 'app/store';
import { Provider, useSelector } from 'react-redux';
import { CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import jss from 'utils/jssRTL';

import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import RTLMuiTheme from 'app/theme/RTLMuiTheme';
import MuiTheme from 'app/theme/MuiTheme';
import { FC } from 'react';
import BaseHead from 'components/organisms/head/BaseHead';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import 'assets/styles/app.css';
import 'assets/styles/gallery.css';
import 'assets/fonts/fontiran.css';

let persistor = persistStore(store);

const ThemeWrapper: FC<any> = ({ children }) => {
  const language = useSelector((state: RootState) => state.local.language);

  return language === 'fa' ? (
    <ThemeProvider theme={RTLMuiTheme}>
      <StylesProvider jss={jss}>{children}</StylesProvider>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={MuiTheme}>{children}</ThemeProvider>
  );
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <BaseHead />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <CssBaseline />
          <ThemeWrapper>
            <ToastContainer limit={3} />
            <Component {...pageProps} />
          </ThemeWrapper>
        </PersistGate>
      </Provider>
    </>
  );
};

export default MyApp;
