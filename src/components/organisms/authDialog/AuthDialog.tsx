import {
  Dialog,
  DialogContent,
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { Close as CloseIcon } from '@material-ui/icons';
import React, { FC, useState } from 'react';

import pic1 from 'assets/images/pic1.png';
import Login from 'components/molecules/authDialogPages/Login';
import SignUp from 'components/molecules/authDialogPages/SignUp';
import ForgotPassword from 'components/molecules/authDialogPages/ForgotPassword';

export enum PageName {
  LOGIN,
  SIGN_UP,
  FORGOT_PASSWORD,
}

export type PageProps = {
  handleClose: () => void;
  changePage: (pageName: PageName) => void;
};

type PagesData = {
  [pageName in PageName]: {
    title: string;
    component: React.FC<PageProps>;
  };
};

const pages: PagesData = {
  [PageName.LOGIN]: {
    title: 'ورود',
    component: Login,
  },
  [PageName.SIGN_UP]: {
    title: 'ثبت‌نام',
    component: SignUp,
  },
  [PageName.FORGOT_PASSWORD]: {
    title: 'فراموشی گذرواژه',
    component: ForgotPassword,
  },
};

const useStyles = makeStyles((theme) => ({
  image: {
    background: `url(${pic1})`,
    backgroundSize: '160% auto',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  leftContainer: {
    minHeight: 300,
    padding: theme.spacing(2),
  },
  leftGrid: {
    height: '100%',
  },
  buttonProgress: {
    color: green[500],
  },
  notStarted: {
    margin: theme.spacing(3),
  },
}));

const AuthDialog: FC<any> = ({ open, handleClose }) => {
  const classes = useStyles();

  const [pageName, setPageName] = useState(PageName.LOGIN);

  const { component: PageComponent, title } = pages[pageName];

  return (
    <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
      <DialogContent>
        <Grid container direction="row" justifyContent="center">
          <Grid
            item
            xs={12}
            sm={7}
            container
            direction="column"
            justifyContent="space-between"
            alignItems="stretch"
            className={classes.leftContainer}
            spacing={2}>
            <Grid container item direction="row">
              <Grid item xs={1}>
                <IconButton aria-label="close" onClick={handleClose}>
                  <CloseIcon />
                </IconButton>
              </Grid>
              <Grid
                item
                container
                xs={10}
                justifyContent="center"
                alignItems="center">
                <Typography component="h3" variant="h2" align="center">
                  {title}
                </Typography>
              </Grid>
              <Grid item xs={3} />
            </Grid>
            <PageComponent handleClose={handleClose} changePage={setPageName} />
          </Grid>
          <Hidden xsDown>
            <Grid item sm={5} className={classes.image}></Grid>
          </Hidden>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
