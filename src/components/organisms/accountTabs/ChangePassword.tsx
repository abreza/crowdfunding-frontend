import { Grid, TextField } from '@mui/material';
import { useChangePasswordMutation } from 'app/services/auth';
import { LoadingButton } from 'components/atoms/LoadingButton';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { ChangePasswordDto } from 'types/auth';

export const ChangePassword = () => {
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const [confirmPassword, setConfirmPassword] = useState('');

  const [form, setForm] = useState<{
    currentPassword: string;
    newPassword: string;
  }>({
    currentPassword: '',
    newPassword: '',
  });

  const onChange: (e: React.ChangeEvent<{ name: string; value: any }>) => void =
    ({ target: { name, value } }) =>
      setForm((f: ChangePasswordDto) => ({ ...f, [name]: value }));

  const onSubmit = () => {
    if (confirmPassword !== form.newPassword) {
      toast.error('تکرار رمز نادرست است!');
      return;
    }
    changePassword(form)
      .unwrap()
      .then(() => toast.success('تغییرات ثبت شد!'))
      .catch((err) => err && toast.error(JSON.stringify(err)));
  };

  return (
    <Grid container sx={{ pt: 2 }} spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          type="password"
          fullWidth
          size="small"
          label="گذرواژه قبلی"
          name="currentPassword"
          value={form.currentPassword}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              type="password"
              fullWidth
              size="small"
              label="گذرواژه جدید"
              name="newPassword"
              value={form.newPassword}
              onChange={onChange}
              inputProps={{
                autocomplete: 'new-password',
                form: {
                  autocomplete: 'off',
                },
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              type="password"
              fullWidth
              size="small"
              label="تکرار گذرواژه جدید"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              inputProps={{
                autocomplete: 'new-password',
                form: {
                  autocomplete: 'off',
                },
              }}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <LoadingButton
          fullWidth
          variant="contained"
          onClick={onSubmit}
          loading={isLoading}>
          ثبت
        </LoadingButton>
      </Grid>
    </Grid>
  );
};
