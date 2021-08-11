import { Button, Grid } from '@material-ui/core';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import LandingBannerItem from 'components/molecules/landingBannerItem/LandingBannerItem';
import { HomepageContext } from 'templates/Homepages';
import { FC, useContext } from 'react';
import Carousel from 'react-material-ui-carousel';
import { useSelector } from 'react-redux';
import { RootState } from 'configs/redux/store';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(4),
    position: 'absolute',
    right: 0,
    top: '20%',
    minHeight: '50%',
    width: '40%',
    borderRadius: '5px 0 0 5px',
    zIndex: 2,
    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      width: '100%',
      borderRadius: '0',
    },
  },
  activeIndicatorIconButton: {
    margin: theme.spacing(0, 1, 0.2),
    '& svg.MuiSvgIcon-root': {
      transform: 'scale(1.5)',
    },
  },
  indicatorContainer: {
    height: 25,
    marginTop: -30,
  },
}));

const LandingBanner: FC<{}> = () => {
  const classes = useStyles();

  const projects = useSelector((state: RootState) => state.projects.projects);

  const { openAuthDialog } = useContext(HomepageContext);

  return (
    <div style={{ position: 'relative' }}>
      <Paper className={classes.paper}>
        <Grid
          container
          direction="column"
          justify="space-around"
          style={{ height: '100%' }}
          spacing={3}>
          <Grid item>
            <Typography variant="h1" gutterBottom>
              تامین‌مالی جمعی شریف
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              اینجا بهترین موقعیت برای معرفی و حمایت از دانش و تکنولوژیست.
            </Typography>
          </Grid>
          <Grid container item spacing={3}>
            <Grid item>
              <Button
                variant="outlined"
                color="primary"
                component={Link}
                to="/?sc=what-is-crowdfunding">
                مطالعه بیشتر
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={openAuthDialog}>
                ثبت‌نام
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Carousel
        fullHeightHover={true}
        autoPlay={false}
        indicatorIconButtonProps={{
          className: '',
          style: {},
        }}
        activeIndicatorIconButtonProps={
          {
            className: classes.activeIndicatorIconButton,
          } as any
        }
        indicatorContainerProps={
          {
            className: classes.indicatorContainer,
          } as any
        }>
        {projects.map((item, i) => (
          <LandingBannerItem key={i} item={item} />
        ))}
      </Carousel>
    </div>
  );
};

export default LandingBanner;
