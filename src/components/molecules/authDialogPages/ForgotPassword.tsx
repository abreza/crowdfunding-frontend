import { Grid, Link, TextField, Typography } from '@material-ui/core';
import { LoadingButton } from 'components/atoms/LoadingButton';
import {
  PageName,
  PageProps,
} from 'components/organisms/authDialog/AuthDialog';
import React, { FC, useState } from 'react';

const ForgotPassword: FC<PageProps> = ({ handleClose, changePage }) => {
  const [formState, setFormState] = useState({
    username: '',
  });

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const submitForgot = async () => {
    // try {
    //   const user = await login(formState).unwrap();
    //   dispatch(setCredentials(user));
    //   toast.success('خوش آمدید');
    //   handleClose();
    // } catch {
    //   toast.error('خطایی رخ‌داده است!');
    // }
  };

  return (
    <>
      <Grid item>
        <TextField
          size="small"
          label="نام‌کاربری"
          name="username"
          type="text"
          fullWidth
          inputProps={{ className: 'ltr-input' }}
          variant="outlined"
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <LoadingButton
          fullWidth
          variant="contained"
          color="primary"
          onClick={submitForgot}>
          بازیابی
        </LoadingButton>
      </Grid>
      <Grid container item direction="row">
        <Grid item xs={6}>
          <Typography align="left">
            {'کاربر جدید؟ '}
            <Link href="#" onClick={() => changePage(PageName.SIGN_UP)}>
              {'ثبت‌نام'}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography align="right">
            {'حساب کاربری دارید؟ '}
            <Link href="#" onClick={() => changePage(PageName.LOGIN)}>
              {'ورود'}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ForgotPassword;
