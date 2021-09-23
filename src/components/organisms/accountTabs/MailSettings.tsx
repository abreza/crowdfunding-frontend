import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  TextField,
  Typography,
} from '@mui/material';

export const MailSettings = () => {
  return (
    <Grid container sx={{ pt: 2 }} spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth variant="standard" size="small" label="ایمیل" />
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
            control={<Checkbox defaultChecked />}
            label="ایمیل‌های مدیریت حساب کاربری"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="پروژه‌هایی که پشتیبان آنها بودید"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="پروژه‌هایی که ایجاد کردید"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="بروزرسانی‌های تامین‌مالی جمعی"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="بازخورد‌های دریافتی"
          />
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="ماه‌نامه تامین‌مالی جمعی"
          />
        </FormGroup>
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth variant="contained">
          ثبت اطلاعات
        </Button>
      </Grid>
    </Grid>
  );
};
