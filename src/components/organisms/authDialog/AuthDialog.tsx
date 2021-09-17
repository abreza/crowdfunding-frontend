import {
  Dialog,
  DialogContent,
  Grid,
  Hidden,
  IconButton,
  Typography,
} from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';
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
  afterAuth: string | undefined;
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

type AuthDialogProps = {
  open: boolean;
  handleClose: any;
  afterAuth: string | undefined;
};

const AuthDialog: FC<AuthDialogProps> = ({ open, handleClose, afterAuth }) => {
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
            sx={{
              minHeight: 300,
              padding: 2,
            }}
            spacing={2}>
            <Grid container item direction="row">
              <Grid item xs={1}>
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  size="large">
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
            <PageComponent
              handleClose={handleClose}
              changePage={setPageName}
              afterAuth={afterAuth}
            />
          </Grid>
          <Hidden mdDown>
            <Grid
              item
              sm={5}
              sx={{
                background: `url(${pic1})`,
                backgroundSize: '160% auto',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
              }}></Grid>
          </Hidden>
        </Grid>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
