import { Grid, Link, TextField, Typography } from '@mui/material';
import { useForgotPasswordMutation } from 'app/services/auth';
import { LoadingButton } from 'components/atoms/LoadingButton';
import {
  PageName,
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
          inputProps={{ className: 'ltr-input' }}
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
