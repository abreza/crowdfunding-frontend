import { Button, Grid, TextField } from '@mui/material';

export const ChangePassword = () => {
  return (
    <Grid container sx={{ pt: 2 }} spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextField fullWidth size="small" label="گذرواژه قبلی" />
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth size="small" label="گذرواژه جدید" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth size="small" label="تکرار گذرواژه جدید" />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth variant="contained">
          ثبت
        </Button>
      </Grid>
    </Grid>
  );
};
