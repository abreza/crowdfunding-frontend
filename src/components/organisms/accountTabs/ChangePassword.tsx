import { Grid, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';
import { useUsersControllerChangePasswordMutation } from 'src/app/services/api.generated';

export const ChangePassword: FC = () => {
  const [changePassword, { isLoading }] =
    useUsersControllerChangePasswordMutation();

  const [confirmPassword, setConfirmPassword] = useState('');

  const [form, setForm] = useState<{
    currentPassword: string;
    newPassword: string;
  }>({
    currentPassword: '',
    newPassword: '',
  });

  const onChange: (e: React.ChangeEvent<{ name: string; value: any }>) => void =
    ({ target: { name, value } }) => setForm((f) => ({ ...f, [name]: value }));

  const onSubmit = () => {
    if (confirmPassword !== form.newPassword) {
      toast.error('تکرار رمز نادرست است!');
      return;
    }
    changePassword({ changePasswordDto: { password: form.newPassword } })
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
          loading={isLoading}
        >
          ثبت
        </LoadingButton>
      </Grid>
    </Grid>
  );
};
