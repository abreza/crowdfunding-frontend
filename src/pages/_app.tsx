import type { AppProps } from "next/app";
import { store } from "configs/redux/store";
import { Provider } from "react-redux";
import { CssBaseline, StylesProvider, ThemeProvider } from "@material-ui/core";
import jss from "utils/jssRTL";

import "react-toastify/dist/ReactToastify.min.css";
import { useAppSelector } from "configs/redux/reduxCustomHooks";
import { ToastContainer } from "react-toastify";
import RTLMuiTheme from "configs/theme/RTLMuiTheme";
import MuiTheme from "configs/theme/MuiTheme";

import "assets/styles/app.css";
import "assets/styles/gallery.css";
import { FC, useEffect } from "react";

const ThemeWrapper: FC<any> = ({ children }) => {
  const {
    local: { language },
  } = useAppSelector((state) => state);

  useEffect(() => {
    if (language === "fa") {
      document.body.dir = "rtl";
      document.body.className = "fa-font-family";
    } else {
      document.body.dir = "ltr";
      document.body.className = "";
    }
  }, [language]);

  return language === "fa" ? (
    <ThemeProvider theme={RTLMuiTheme}>
      <StylesProvider jss={jss}>{children}</StylesProvider>
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={MuiTheme}>{children}</ThemeProvider>
  );
};

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <CssBaseline />
      <ThemeWrapper>
        <ToastContainer limit={3} />
        <Component {...pageProps} />
      </ThemeWrapper>
    </Provider>
  );
};

export default MyApp;
