import { Grid, Link, TextField, Typography } from '@material-ui/core';
import { SignUpRequest, useSignUpMutation } from 'app/services/auth';
import { setCredentials } from 'app/slices/authSlice';
import { LoadingButton } from 'components/atoms/LoadingButton';
import {
  PageName,
  PageProps,
} from 'components/organisms/authDialog/AuthDialog';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

const SignUp: FC<PageProps> = ({ handleClose, changePage }) => {
  const [formState, setFormState] = useState<SignUpRequest>({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const dispatch = useDispatch();

  const [signUp, { isLoading }] = useSignUpMutation();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const submitSignUp = async () => {
    try {
      const user = await signUp(formState).unwrap();
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
      <Grid container item spacing={2}>
        <Grid item sm={6} xs={12}>
          <TextField
            size="small"
            label="نام"
            name="firstName"
            type="text"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
        <Grid item sm={6} xs={12}>
          <TextField
            size="small"
            label="نام‌خانوادگی"
            name="lastName"
            type="text"
            fullWidth
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <Grid item>
        <TextField
          size="small"
          label="ایمیل"
          name="email"
          type="email"
          fullWidth
          inputProps={{ className: 'ltr-input' }}
          variant="outlined"
          onChange={handleChange}
        />
      </Grid>
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
          onClick={submitSignUp}
          loading={isLoading}>
          ثبت‌نام
        </LoadingButton>
      </Grid>
      <Grid item>
        <Typography align="left">
          {'حساب کاربری دارید؟ '}
          <Link href="#" onClick={() => changePage(PageName.LOGIN)}>
            {'ورود'}
          </Link>
        </Typography>
      </Grid>
    </>
  );
};

export default SignUp;
