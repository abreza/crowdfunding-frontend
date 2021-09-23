import { Grid, Link, TextField, Typography } from '@mui/material';
import { SignUpRequest } from 'types/auth';
import { useSignUpMutation } from 'app/services/auth';
import { LoadingButton } from 'components/atoms/LoadingButton';
import {
  PageName,
  PageProps,
} from 'components/organisms/authDialog/AuthDialog';
import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const SignUp: FC<PageProps> = ({ handleClose, changePage, afterAuth }) => {
  const { push } = useRouter();
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
      await signUp(formState).unwrap();
      toast.success('خوش آمدید');
      if (afterAuth) {
        push(afterAuth);
      }
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
