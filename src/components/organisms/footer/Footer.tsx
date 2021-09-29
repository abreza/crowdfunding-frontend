import {
  Grid,
  Divider,
  Typography,
  Button,
  TextField,
  MenuItem,
} from '@mui/material';
import Link from 'next/link';
import logo2 from 'assets/images/logo2.png';
import Image from 'next/image';
import { Box } from '@mui/system';
import { SocialNetwork } from 'components/molecules/socialNetworks/socialNetworks';
import ThemeModeToggle from './ThemeModeToggle';

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
                  <Button
                    sx={{
                      width: { sm: 90, xs: 130 },
                      position: 'relative',
                      display: 'block',
                    }}>
                    <Image
                      src={logo2}
                      alt="logo"
                      layout="responsive"
                      width="100%"
                      height="100%"
                    />
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
              {/* <Grid item xs={12}>
                <ThemeModeToggle />
              </Grid> */}
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
            <SocialNetwork />
          </Grid>
        </Grid>
      </Box>
    </footer>
  );
}
