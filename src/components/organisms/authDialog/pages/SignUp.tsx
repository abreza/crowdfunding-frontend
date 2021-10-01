import { Grid, Link, TextField, Typography } from '@mui/material';
import { SignUpDto } from 'types/auth';
import { useSignUpMutation } from 'app/services/auth';
import { LoadingButton } from 'components/atoms/LoadingButton';
import {
  AuthPageName,
  PageProps,
} from 'components/organisms/authDialog/AuthDialog';
import React, { FC, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const SignUp: FC<PageProps> = ({ handleClose, changePage, afterAuth }) => {
  const { push } = useRouter();
  const [formState, setFormState] = useState<SignUpDto>({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');

  const [signUp, { isLoading }] = useSignUpMutation();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setFormState((prev) => ({ ...prev, [name]: value }));

  const submitSignUp = async () => {
    if (formState.password !== confirmPassword) {
      toast.error('تکرار رمز نادرست است!');
      return;
    }
    try {
      await signUp(formState).unwrap();
      toast.success('خوش آمدید');
      if (afterAuth) {
        push(afterAuth);
      }
      handleClose();
    } catch (err: any) {
      toast.error(err?.data?.message?.toString() || err?.error?.toString());
    }
  };

  return (
    <>
      <Grid container item spacing={1}>
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
          InputProps={{ className: 'ltr-input' }}
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
          InputProps={{ className: 'ltr-input' }}
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
          InputProps={{ className: 'ltr-input' }}
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <TextField
          size="small"
          label="تکرار گذرواژه"
          name="password"
          fullWidth
          type="password"
          InputProps={{ className: 'ltr-input' }}
          onChange={(e) => setConfirmPassword(e.target.value)}
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
        <Typography sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
          {'حساب کاربری دارید؟ '}
          <Link href="#" onClick={() => changePage(AuthPageName.LOGIN)}>
            {'ورود'}
          </Link>
        </Typography>
      </Grid>
    </>
  );
};

export default SignUp;
