import { Grid, Link, TextField, Typography } from '@mui/material';
import { useForgotPasswordMutation } from 'app/services/auth';
import { LoadingButton } from 'components/atoms/LoadingButton';
import {
  AuthPageName,
  PageProps,
} from 'components/organisms/authDialog/AuthDialog';
import React, { FC, useState } from 'react';
import { toast } from 'react-toastify';
import { UsernameDto } from 'types/auth';

const ForgotPassword: FC<PageProps> = ({ handleClose, changePage }) => {
  const [form, setForm] = useState<UsernameDto>({
    username: '',
  });

  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  const handleChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    setForm((prev) => ({ ...prev, [name]: value }));

  const submitForgot = async () => {
    try {
      await forgotPassword(form).unwrap();
      toast.success('ایمیل تغییر رمزعبور برایتان ارسال شد!');
      handleClose();
    } catch (err: any) {
      toast.error(err?.data?.message?.toString() || err?.error?.toString());
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
          value={form.username}
          InputProps={{ className: 'ltr-input' }}
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <LoadingButton
          fullWidth
          variant="contained"
          color="primary"
          onClick={submitForgot}
          loading={isLoading}>
          بازیابی
        </LoadingButton>
      </Grid>
      <Grid container item direction="row">
        <Grid item sm={6} xs={12}>
          <Typography sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
            {'کاربر جدید؟ '}
            <Link href="#" onClick={() => changePage(AuthPageName.SIGN_UP)}>
              {'ثبت‌نام'}
            </Link>
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography sx={{ textAlign: { xs: 'center', sm: 'right' } }}>
            {'حساب کاربری دارید؟ '}
            <Link href="#" onClick={() => changePage(AuthPageName.LOGIN)}>
              {'ورود'}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ForgotPassword;
