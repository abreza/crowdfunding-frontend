import {
  Button,
  Dialog,
  Grid,
  Hidden,
  IconButton,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { Close as CloseIcon } from '@material-ui/icons';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  image: {
    background: `url(${process.env.PUBLIC_URL + 'pic1.png'})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
  },
  leftContainer: {
    height: 300,
    padding: theme.spacing(2),
  },
  leftGrid: {
    height: '100%',
  },
  buttonProgress: {
    color: green[500],
  },
  notStarted: {
    margin: theme.spacing(3),
  },
}));

const AuthDialog: FC<any> = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
      <Grid container direction="row" justify="center">
        <Grid
          item
          xs={12}
          sm={7}
          container
          direction="column"
          justify="space-between"
          alignItems="stretch"
          className={classes.leftContainer}>
          <Grid container item direction="row">
            <Grid item xs={3}>
              <IconButton aria-label="close" onClick={handleClose}>
                <CloseIcon />
              </IconButton>
            </Grid>
            <Grid item container xs={6} justify="center" alignItems="center">
              <Typography component="h3" variant="h2" align="center">
                ورود
              </Typography>
            </Grid>
            <Grid item xs={3} />
          </Grid>
          <Grid item>
            <TextField
              label="نام‌کاربری"
              type="text"
              fullWidth
              inputProps={{ className: 'ltr-input' }}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <TextField
              label="گذرواژه"
              fullWidth
              type="password"
              inputProps={{ className: 'ltr-input' }}
              variant="outlined"
            />
          </Grid>
          <Grid item>
            <Typography align="center">
              {'اگر رمزتون رو فراموش کردین، به '}
              <Link to="/change-password">{'این‌جا'}</Link>
              {' مراجعه کنید.'}
            </Typography>
          </Grid>
          <Grid item>
            <Button fullWidth variant="contained" color="primary">
              ورود
            </Button>
          </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid item sm={5} className={classes.image}></Grid>
        </Hidden>
      </Grid>
    </Dialog>
  );
};

export default AuthDialog;
