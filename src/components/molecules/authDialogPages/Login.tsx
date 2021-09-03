import { Grid, Link, TextField, Typography } from '@material-ui/core';
import { LoginRequest } from 'types/auth';
import { useLoginMutation } from 'app/services/auth';
import { setCredentials } from 'app/slices/authSlice';
import { LoadingButton } from 'components/atoms/LoadingButton';
import {
  PageName,
  PageProps,
} from 'components/organisms/authDialog/AuthDialog';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const Login: FC<PageProps> = ({ handleClose, changePage }) => {
  const [formState, setFormState] = useState<LoginRequest>({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const submitLogin = async () => {
    try {
      const user = await login(formState).unwrap();
      dispatch(setCredentials(user));
      toast.success('خوش آمدید');
      handleClose();
    } catch (err) {
      // @ts-ignore
      toast.error(err?.data?.message?.toString());
    }
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
        <TextField
          size="small"
          label="گذرواژه"
          name="password"
          fullWidth
          type="password"
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
          onClick={submitLogin}
          loading={isLoading}>
          ورود
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
            {'فراموشی '}
            <Link href="#" onClick={() => changePage(PageName.FORGOT_PASSWORD)}>
              {'گذرواژه'}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
