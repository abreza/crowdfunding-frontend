import {
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { useSetMailSettingsMutation } from 'app/services/auth';
import { RootStateType } from 'app/store';
import { LoadingButton } from 'components/atoms/LoadingButton';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { Account, MailSettingsDto } from 'types/auth';

export const MailSettings = () => {
  const { mailConfig, email, username } = useSelector<RootStateType, Account>(
    (state) => state.auth.user
  );

  const [setMailSettings, { isLoading }] = useSetMailSettingsMutation();

  const [form, setForm] = useState<MailSettingsDto>({
    mailConfig,
    email,
    username,
  });

  useEffect(() => {
    setForm({ mailConfig, email, username });
  }, [mailConfig, email, username]);

  const onChange: (e: React.ChangeEvent<{ name: string; value: any }>) => void =
    ({ target: { name, value } }) =>
      setForm((pf: MailSettingsDto) => ({
        ...pf,
        [name]: value,
      }));

  const onChangeMailConfig: (
    e: React.ChangeEvent<{ name: string; value: any }>,
    checked: boolean
  ) => void = ({ target: { name } }, checked) =>
    setForm((pf: MailSettingsDto) => ({
      ...pf,
      mailConfig: {
        ...pf.mailConfig,
        [name]: checked,
      },
    }));

  const onSubmit = () => {
    setMailSettings(form)
      .unwrap()
      .then(() => toast.success('تغییرات ثبت شد!'))
      .catch((err) => err && toast.error(JSON.stringify(err)));
  };

  return (
    <Grid container sx={{ pt: 2 }} spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          size="small"
          label="ایمیل"
          name="email"
          value={form.email}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>
          گهگاه برای شما ایمیل هایی در رابطه با پروژه هایی که مورد حمایت شما
          بوده اند و اخبار دیگر ارسال می کنیم.
          <br /> شما در حال حاضر مشترک موارد زیر هستید:
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <FormGroup>
          <FormControlLabel
            disabled
            control={
              <Checkbox name="profile" checked={form.mailConfig.profile} />
            }
            label="ایمیل‌های مدیریت حساب کاربری"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="supportedProjects"
                checked={form.mailConfig.supportedProjects}
                onChange={onChangeMailConfig}
              />
            }
            label="پروژه‌هایی که پشتیبان آنها بودید"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="createdProjects"
                checked={form.mailConfig.createdProjects}
                onChange={onChangeMailConfig}
              />
            }
            label="پروژه‌هایی که ایجاد کردید"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="crowdfundingUpdates"
                checked={form.mailConfig.crowdfundingUpdates}
                onChange={onChangeMailConfig}
              />
            }
            label="بروزرسانی‌های تامین‌مالی جمعی"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="projectReviews"
                checked={form.mailConfig.projectReviews}
                onChange={onChangeMailConfig}
              />
            }
            label="بازخورد‌های دریافتی"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="magazine"
                checked={form.mailConfig.magazine}
                onChange={onChangeMailConfig}
              />
            }
            label="ماه‌نامه تامین‌مالی جمعی"
          />
        </FormGroup>
      </Grid>
      <Grid item xs={12}>
        <LoadingButton
          fullWidth
          variant="contained"
          onClick={onSubmit}
          loading={isLoading}>
          ثبت تنظیمات
        </LoadingButton>
      </Grid>
    </Grid>
  );
};
