import {
  Grid,
  Container,
  TextField,
  Button,
  Typography,
  makeStyles,
} from '@material-ui/core';
import { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4, 0),
    background: '#eee',
  },
}));

type LandingSubscribeProps = {};

const LandingSubscribe: FC<LandingSubscribeProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
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
              <TextField
                placeholder="آدرس ایمیل"
                variant="outlined"
                size="small"
              />
            </Grid>
            <Grid item>
              <Button variant="contained" color="primary">
                عضویت
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default LandingSubscribe;
