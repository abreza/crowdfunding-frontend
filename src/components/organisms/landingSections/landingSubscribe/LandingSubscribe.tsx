import { Grid, Container, TextField, Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { FC } from 'react';

type LandingSubscribeProps = {};

const LandingSubscribe: FC<LandingSubscribeProps> = () => {
  return (
    <Box
      sx={{
        py: 4,
        bgcolor: 'background.secondary',
      }}>
      <Container maxWidth="md">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="column"
          spacing={3}>
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
            justifyContent="center">
            <Grid item>
              <TextField placeholder="آدرس ایمیل" size="small" />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                عضویت
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default LandingSubscribe;
