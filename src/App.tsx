import { ThemeProvider } from '@material-ui/styles';
import MuiTheme from 'configs/theme/MuiTheme';
import RTLMuiTheme from 'configs/theme/RTLMuiTheme';
import RootDev from 'routes/Root.dev';
import RootProd from 'routes/Root.prod';
import jss from 'utils/jssRTL';
import { StylesProvider } from '@material-ui/core/styles';
import { ToastContainer } from 'react-toastify';
import { axiosConfig } from 'configs/axios/axiosConfig';
import { useAppSelector } from 'configs/redux/reduxCustomHooks';

import 'react-toastify/dist/ReactToastify.min.css';
import 'styles/app.css';

const AppRoute = () => {
  return (
    <>
      {process.env.NODE_ENV === 'production' ? <RootProd /> : <RootDev />}{' '}
      <ToastContainer limit={3} />
    </>
  );
};

const App = () => {
  const {
    account: { token },
    local: { language },
  } = useAppSelector((state) => state);

  axiosConfig(token);

  if (language === 'fa') {
    document.body.dir = 'rtl';
    document.body.className = 'fa-font-family';
    return (
      <ThemeProvider theme={RTLMuiTheme}>
        <StylesProvider jss={jss}>
          <AppRoute />
        </StylesProvider>
      </ThemeProvider>
    );
  } else {
    document.body.dir = 'ltr';
    document.body.className = '';
    return (
      <ThemeProvider theme={MuiTheme}>
        <AppRoute />
      </ThemeProvider>
    );
  }
};

export default App;
