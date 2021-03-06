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
import Homepage from 'src/templates/Homepages';
import GoogleMapReact from 'google-map-react';

import styles from 'src/assets/styles/map.module.css';
import { Box, BoxProps, useTheme } from '@mui/system';
import { SocialNetwork } from 'src/components/molecules/socialNetworks/socialNetworks';
import { LocationOn } from '@mui/icons-material';

const Marker: FC<{ lat: number; lng: number } & BoxProps> = (props) => (
  <Box {...props} />
);

const ContactUs: FC = () => {
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
          }}
        >
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
            defaultZoom={18}
          >
            <Marker
              lat={35.7025623}
              lng={51.3510847}
              sx={{ transform: 'translate(-20px, -110%)' }}
            >
              <Box className={styles.pin}></Box>
            </Marker>
          </GoogleMapReact>
          <Button
            sx={{
              m: 1,
              position: 'absolute',
              top: 0,
              right: 0,
            }}
            variant="contained"
            endIcon={<LocationOn />}
            component="a"
            href="https://goo.gl/maps/xecM1MpCkEb9687Q8"
            target="_blank"
          >
            مشاهده در نقشه
          </Button>
          <Box
            sx={{
              mt: 18,
              px: { sm: 5, xs: 2 },
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Paper color="primary" sx={{ overflow: 'hidden' }}>
              <Grid
                container
                alignItems="scratch"
                justifyContent="center"
                spacing={2}
              >
                <Grid
                  item
                  xs={12}
                  sm={4}
                  sx={{ bgcolor: 'primary.main', color: 'white' }}
                >
                  <Grid
                    container
                    direction="column"
                    spacing={2}
                    sx={{ p: 2 }}
                    justifyContent="space-around"
                  >
                    <Grid item xs={12}>
                      <Typography variant="h5">شماره تلفن:</Typography>
                      <Typography
                        variant="body1"
                        sx={{ direction: 'rtl' }}
                        align="left"
                      >
                        +۹۸-۲۱۶۶۱۶۶۶۰۱
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
