import {
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
  useMediaQuery,
} from '@mui/material';
import { FC } from 'react';
import Homepage from 'templates/Homepages';
import GoogleMapReact from 'google-map-react';

import styles from 'assets/styles/map.module.css';
import { Box, useTheme } from '@mui/system';
import { SocialNetwork } from 'components/molecules/socialNetworks/socialNetworks';

type ContactUsProps = {};

const ContactUs: FC<ContactUsProps> = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Homepage>
      <Container sx={{ py: 2 }}>
        <Paper
          sx={{
            overflow: 'hidden',
            position: 'relative',
            height: { sm: 550, xs: 900 },
            mb: 2,
          }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyAwAOGAxY5PZ8MshDtaJFk2KgK7VYxArPA',
            }}
            defaultCenter={
              isXs
                ? {
                    lat: 35.7011623,
                    lng: 51.3510847,
                  }
                : {
                    lat: 35.7017623,
                    lng: 51.3510847,
                  }
            }
            defaultZoom={18}>
            {/* @ts-ignore */}
            <Box
              lat={35.7025623}
              lng={51.3510847}
              sx={{ transform: 'translate(-20px, -110%)' }}>
              <Box className={styles.pin}></Box>
            </Box>
          </GoogleMapReact>
          <Box
            sx={{
              mt: 18,
              px: { sm: 5, xs: 2 },
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}>
            <Paper color="primary" sx={{ overflow: 'hidden' }}>
              <Grid
                container
                alignItems="scratch"
                justifyContent="center"
                spacing={2}>
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{ bgcolor: 'primary.main', color: 'white' }}>
                  <Grid
                    container
                    direction="column"
                    spacing={2}
                    sx={{ p: 2 }}
                    justifyContent="space-around">
                    <Grid item xs={12}>
                      <Typography variant="h5">شماره تلفن:</Typography>
                      <Typography
                        variant="body1"
                        sx={{ direction: 'rtl' }}
                        align="left">
                        +۹۸-۲۱-۶۶۵۰۵۰۲۳
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Typography variant="h5">آدرس:</Typography>
                      <Typography variant="body1">
                        تهران، خیابان آزادی، دانشگاه صنعتی شریف
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <SocialNetwork />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12} sm={8}>
                  <Grid container spacing={3} sx={{ p: 2 }}>
                    <Grid item xs={12}>
                      <Typography variant="h2">ارتباط با ما</Typography>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        variant="standard"
                        label="نام و نام‌خانوادگی"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        variant="standard"
                        label="رایانامه"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        multiline
                        rows={2}
                        fullWidth
                        variant="standard"
                        label="متن پیام"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Button variant="contained">ارسال</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        </Paper>
      </Container>
    </Homepage>
  );
};

export default ContactUs;
