import {
  Grid,
  Divider,
  Typography,
  Button,
  SvgIcon,
  IconButton,
  TextField,
  MenuItem,
} from '@mui/material';
import {
  Telegram as TelegramIcon,
  Facebook as FacebookIcon,
  Instagram as InstagramIcon,
} from '@mui/icons-material';
import Link from 'next/link';
import logo2 from 'assets/images/logo2.png';
import SImage from 'components/atoms/sImage/SImage';
import { Box } from '@mui/system';

export default function Footer() {
  return (
    <footer>
      <Box
        sx={{
          borderTop: '1px solid black',
          background: (theme) => theme.palette.grey[700],
          pt: 3,
          px: 5,
          pb: 1,
          color: 'white',
        }}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}>
              <Grid item xs={4} sm={5}>
                <Link href="/" passHref>
                  <Button sx={{ maxWidth: { sm: 90, xs: 130 } }}>
                    <SImage src={logo2} alt="logo" layout="fill" />
                  </Button>
                </Link>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  value={'fa'}
                  size="small"
                  sx={{
                    color: 'white',
                    ' .MuiInputLabel-root': {
                      color: 'white',
                    },
                    ' .MuiSelect-root': {
                      color: 'white',
                    },
                    ' .MuiSelect-outlined': {
                      border: '1px solid white',
                    },
                    ' .MuiSelect-focused': {
                      border: '1px solid white',
                    },
                  }}>
                  <MenuItem value={'en'}>English (US)</MenuItem>
                  <MenuItem value={'fa'}>فارسی</MenuItem>
                </TextField>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="space-between">
              <Grid item sx={{ pb: 3 }}>
                <Typography color="primary" variant="h4" component="label">
                  تامین‌مالی برای
                </Typography>
              </Grid>
              <Grid item>
                <Link href="/project" passHref>
                  <Button color="inherit">مهندسی کامپیوتر</Button>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/project" passHref>
                  <Button color="inherit">علوم شیمی</Button>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/project" passHref>
                  <Button color="inherit">علوم فیزیک</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="space-between">
              <Grid item sx={{ pb: 3 }}>
                <Typography color="primary" variant="h4" component="label">
                  مطالعه بیشتر
                </Typography>
              </Grid>
              <Grid item>
                <Link href="/?sc=what-is-crowdfunding" passHref>
                  <Button color="inherit">تامین‌مالی جمعی چیست؟</Button>
                </Link>
              </Grid>
              <Grid item>
                <Button color="inherit">چرا تامین‌مالی جمعی شریف؟</Button>
              </Grid>
              <Grid item>
                <Button color="inherit">سرمایه‌گذاری‌های موفق</Button>
              </Grid>
              <Grid item>
                <Button color="inherit">سوالات متداول</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="space-between">
              <Grid item sx={{ pb: 3 }}>
                <Typography color="primary" variant="h4" component="label">
                  منابع
                </Typography>
              </Grid>
              <Grid item>
                <Link href="/blog" passHref>
                  <Button color="inherit">بلاگ</Button>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/contactUs" passHref>
                  <Button color="inherit">تماس با ما</Button>
                </Link>
              </Grid>
              <Grid item>
                <Link href="/about" passHref>
                  <Button color="inherit">درباره ما</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Divider />
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          direction="row">
          <Grid item xs={12} sm={6}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center">
              <Grid item>
                <div dir="ltr">
                  <Typography>
                    © 2021-{new Date().getFullYear()} SharifCrowdfunding
                  </Typography>
                </div>
              </Grid>
              <Grid item>
                <Button color="inherit">شرایط</Button>
                <Button color="inherit">حریم خصوصی</Button>
                <Button color="inherit">قوانین</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container justifyContent="center">
              <IconButton color="inherit" size="large">
                <TelegramIcon sx={{ transform: 'scaleX(1)' }} />
              </IconButton>
              <IconButton color="inherit" size="large">
                <FacebookIcon sx={{ transform: 'scaleX(1)' }} />
              </IconButton>
              <IconButton color="inherit" size="large">
                <InstagramIcon sx={{ transform: 'scaleX(1)' }} />
              </IconButton>
              <IconButton color="inherit" size="large">
                <SvgIcon sx={{ transform: 'scaleX(1)' }}>
                  <path d="M 10.941406 3.066406 L 8.78125 2.582031 C 7.023438 2.183594 5.273438 3.289062 4.878906 5.046875 L 4.386719 7.222656 C 5.800781 4.976562 8.179688 3.394531 10.941406 3.066406 Z M 3.066406 13.058594 L 2.582031 15.21875 C 2.183594 16.976562 3.289062 18.726562 5.046875 19.121094 L 7.222656 19.613281 C 4.976562 18.199219 3.394531 15.820312 3.066406 13.058594 Z M 18.953125 4.878906 L 16.777344 4.386719 C 19.023438 5.800781 20.605469 8.179688 20.933594 10.941406 L 21.417969 8.78125 C 21.816406 7.023438 20.710938 5.273438 18.953125 4.878906 Z M 13.058594 20.933594 L 15.21875 21.417969 C 16.976562 21.816406 18.726562 20.710938 19.121094 18.953125 L 19.613281 16.777344 C 18.199219 19.023438 15.820312 20.605469 13.058594 20.933594 Z M 13.058594 20.933594 " />
                  <path d="M 12 4 C 7.582031 4 4 7.582031 4 12 C 4 16.417969 7.582031 20 12 20 C 16.417969 20 20 16.417969 20 12 C 20 7.582031 16.417969 4 12 4 Z M 10 6.5 C 11.105469 6.5 12 7.394531 12 8.5 C 12 9.605469 11.105469 10.5 10 10.5 C 8.894531 10.5 8 9.605469 8 8.5 C 8 7.394531 8.894531 6.5 10 6.5 Z M 8.5 16 C 7.394531 16 6.5 15.105469 6.5 14 C 6.5 12.894531 7.394531 12 8.5 12 C 9.605469 12 10.5 12.894531 10.5 14 C 10.5 15.105469 9.605469 16 8.5 16 Z M 11 12 C 11 11.449219 11.449219 11 12 11 C 12.550781 11 13 11.449219 13 12 C 13 12.550781 12.550781 13 12 13 C 11.449219 13 11 12.550781 11 12 Z M 14 17.5 C 12.894531 17.5 12 16.605469 12 15.5 C 12 14.394531 12.894531 13.5 14 13.5 C 15.105469 13.5 16 14.394531 16 15.5 C 16 16.605469 15.105469 17.5 14 17.5 Z M 15.5 12 C 14.394531 12 13.5 11.105469 13.5 10 C 13.5 8.894531 14.394531 8 15.5 8 C 16.605469 8 17.5 8.894531 17.5 10 C 17.5 11.105469 16.605469 12 15.5 12 Z M 15.5 12 " />
                </SvgIcon>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}
