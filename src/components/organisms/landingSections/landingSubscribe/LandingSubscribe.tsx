import { LoadingButton } from '@mui/lab';
import { Grid, Container, TextField, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC, useState } from 'react';
import { toast } from 'react-toastify';

function validateEmail(email: string) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

const LandingSubscribe: FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = () => {
    if (!validateEmail(email)) {
      toast.error('لطفا ایمیل صحیح وارد کنید.');
      return;
    }
    setLoading(true);

    setTimeout(() => {
      toast.success('ممنون که همراه ما هستید.\nایمیل شما با موفقیت ثبت شد.');
      setLoading(false);
    }, 500);
  };
  return (
    <Box
      sx={{
        py: 4,
        bgcolor: 'background.secondary',
      }}
    >
      <Container maxWidth="md">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          spacing={3}
        >
          <Grid item>
            <Typography>
              با عضویت در خبرنامه، از بهترین پروژه‌های ما مطلع شوید.
            </Typography>
          </Grid>
          <Grid
            item
            container
            spacing={1}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <TextField
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                size="small"
                label="آدرس ایمیل"
                InputProps={{
                  className: 'ltr-input',
                }}
              />
            </Grid>
            <Grid item>
              <LoadingButton
                loading={loading}
                variant="contained"
                color="primary"
                onClick={submit}
              >
                عضویت
              </LoadingButton>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingSubscribe;
