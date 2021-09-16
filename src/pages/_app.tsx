import type { AppProps } from 'next/app';
import { RootState, store } from 'app/store';
import { Provider, useDispatch, useSelector } from 'react-redux';
import { CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import jss from 'utils/jssRTL';

import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import RTLMuiTheme from 'app/theme/RTLMuiTheme';
import MuiTheme from 'app/theme/MuiTheme';
import { FC, useCallback, useEffect } from 'react';
import BaseHead from 'components/organisms/head/BaseHead';

import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';

import 'assets/styles/app.css';
import 'assets/styles/gallery.css';
import 'assets/fonts/fontiran.css';
import { useVerifyTokenMutation } from 'app/services/auth';
import { logout } from 'app/slices/authSlice';

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

const InnerApp = ({ Component, pageProps }: AppProps) => {
  const [verifyToken] = useVerifyTokenMutation();
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch();

  const checkToken = useCallback(async () => {
    try {
      await verifyToken({ token }).unwrap();
    } catch (err) {
      dispatch(logout());
    }
  }, []);

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <>
      <CssBaseline />
      <ThemeWrapper>
        <ToastContainer limit={3} />
        <Component {...pageProps} />
      </ThemeWrapper>
    </>
  );
};

const MyApp = (appProps: AppProps) => {
  return (
    <>
      <BaseHead />
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <InnerApp {...appProps} />
        </PersistGate>
      </Provider>
    </>
  );
};

export default MyApp;
