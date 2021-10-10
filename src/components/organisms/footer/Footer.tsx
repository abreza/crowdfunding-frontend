import {
  Grid,
  Divider,
  Typography,
  Button,
  TextField,
  MenuItem,
} from '@mui/material';
import Link from 'next/link';
import logo2 from 'src/assets/images/logo2.png';
import Image from 'next/image';
import { Box } from '@mui/system';
import { SocialNetwork } from 'src/components/molecules/socialNetworks/socialNetworks';
import ThemeModeToggle from './ThemeModeToggle';
import { localLabels } from 'src/constants/locals';
import useTranslation from 'next-translate/useTranslation';
import setLanguage from 'next-translate/setLanguage';

export default function Footer() {
  const { lang: translationLang } = useTranslation();

  return (
    <footer>
      <Box
        sx={{
          borderTop: '1px solid black',
          bgcolor: 'background.footer',
          pt: 3,
          px: 5,
          pb: 1,
          color: 'white',
        }}
      >
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              spacing={2}
            >
              <Grid item xs={4} sm={5}>
                <Link href="/" passHref>
                  <Button
                    sx={{
                      width: { sm: 90, xs: 130 },
                      position: 'relative',
                      display: 'block',
                    }}
                  >
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
                  size="small"
                  value={translationLang}
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
                  }}
                >
                  {localLabels.map((lang) => (
                    <MenuItem
                      key={lang.code}
                      selected={translationLang === lang.code}
                      value={lang.code}
                      onClick={() =>
                        translationLang !== lang.code && setLanguage(lang.code)
                      }
                    >
                      {lang.text}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <ThemeModeToggle />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item sx={{ pb: 3 }}>
                <Typography
                  sx={{ color: 'grey.400' }}
                  variant="h4"
                  component="label"
                >
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
              justifyContent="space-between"
            >
              <Grid item sx={{ pb: 3 }}>
                <Typography
                  sx={{ color: 'grey.400' }}
                  variant="h4"
                  component="label"
                >
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
                <Link href="/faq" passHref>
                  <Button color="inherit">سوالات متداول</Button>
                </Link>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Grid
              container
              direction="column"
              alignItems="center"
              justifyContent="space-between"
            >
              <Grid item sx={{ pb: 3 }}>
                <Typography
                  sx={{ color: 'grey.400' }}
                  variant="h4"
                  component="label"
                >
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
          direction="row"
        >
          <Grid item xs={12} sm={6}>
            <Grid
              container
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <div dir="ltr">
                  <Typography sx={{ color: 'inherit' }}>
                    © 2021-{new Date().getFullYear()} SharifCrowdfunding
                  </Typography>
                </div>
              </Grid>
              <Grid item>
                <Link href="/privacy" passHref>
                  <Button color="inherit">حریم خصوصی</Button>
                </Link>
                <Link href="/terms" passHref>
                  <Button color="inherit">قوانین</Button>
                </Link>
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
