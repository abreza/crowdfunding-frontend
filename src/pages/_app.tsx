import type { AppProps } from 'next/app';
import { store } from 'configs/redux/store';
import { Provider } from 'react-redux';
import { CssBaseline, StylesProvider, ThemeProvider } from '@material-ui/core';
import jss from 'utils/jssRTL';

import 'react-toastify/dist/ReactToastify.min.css';
import { useAppSelector } from 'configs/redux/reduxCustomHooks';
import { ToastContainer } from 'react-toastify';
import RTLMuiTheme from 'configs/theme/RTLMuiTheme';
import MuiTheme from 'configs/theme/MuiTheme';

import 'assets/styles/app.css';
import 'assets/styles/gallery.css';
import { FC } from 'react';
import BaseHead from 'components/organisms/BaseHead/BaseHead';

const ThemeWrapper: FC<any> = ({ children }) => {
  const {
    local: { language },
  } = useAppSelector((state) => state);

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
        <CssBaseline />
        <ThemeWrapper>
          <ToastContainer limit={3} />
          <Component {...pageProps} />
        </ThemeWrapper>
      </Provider>
    </>
  );
};

export default MyApp;
