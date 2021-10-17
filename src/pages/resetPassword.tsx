import { LoadingButton } from '@mui/lab';
import { Container, Paper, Stack, TextField, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useUsersControllerResetPasswordMutation } from 'src/app/services/api.generated';
import Homepage from 'src/templates/Homepages';

export default function ResetPassword() {
  const { query, push } = useRouter();
  const { resetCode = 0, email = '' } = query;

  if (!email || !resetCode) {
    toast.error('آدرس اشتباه است!');
    push('/');
  }
  const [resetPassword, { isLoading }] =
    useUsersControllerResetPasswordMutation();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const submit = () => {
    if (password !== confirmPassword) {
      toast.error('تکرار گذرواژه اشتباه است!');
      return;
    }

    resetPassword({
      resetCode: +resetCode,
      email: email.toString(),
      changePasswordDto: { password },
    })
      .unwrap()
      .then(() => {
        toast.success('گذرواژه شما با موفقیت تغییر کرد.');
        push('/');
      })
      .catch((err) => err && toast.error(JSON.stringify(err)));
  };

  return (
    <Homepage>
      <Container maxWidth="sm" sx={{ py: 2 }}>
        <Paper sx={{ p: 3 }}>
          <Stack spacing={3}>
            <Typography align="center" variant="h2">
              تغییر گذرواژه
            </Typography>
            <TextField
              label="گذرواژه"
              fullWidth
              type="password"
              InputProps={{ className: 'ltr-input' }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
              label="گذرواژه"
              fullWidth
              type="password"
              InputProps={{ className: 'ltr-input' }}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <LoadingButton
              loading={isLoading}
              variant="contained"
              fullWidth
              onClick={submit}
            >
              ثبت
            </LoadingButton>
          </Stack>
        </Paper>
      </Container>
    </Homepage>
  );
}
