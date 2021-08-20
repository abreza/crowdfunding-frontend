import {
  Avatar,
  Box,
  Chip,
  Divider,
  Grid,
  Hidden,
  makeStyles,
  Theme,
  Typography,
} from '@material-ui/core';
import { FC } from 'react';
import { ResponsiveCirclePackingCanvas } from '@nivo/circle-packing';
import { fakeData } from 'constants/fakeData';

type ProjectFoundsProps = {};

const useStyles = makeStyles((theme: Theme) => ({
  packingCanvasContainer: {
    height: 250,
    width: '100%',
  },
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const ProjectFounds: FC<ProjectFoundsProps> = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item xs={12} sm={8}>
        <Typography variant="h2">سرمایه‌گذاران</Typography>
        <Box p={2} className={classes.root}>
          <Chip
            avatar={
              <Avatar
                alt="مرتضی ابوالقاسمی"
                src={process.env.PUBLIC_URL + '/sponsor.jpeg'}
              />
            }
            label="مرتضی ابوالقاسمی"
          />
          <Chip
            avatar={
              <Avatar
                alt="مرتضی ابوالقاسمی"
                src={process.env.PUBLIC_URL + '/sponsor.jpeg'}
              />
            }
            label="مرتضی ابوالقاسمی"
          />
          <Chip
            avatar={
              <Avatar
                alt="مرتضی ابوالقاسمی"
                src={process.env.PUBLIC_URL + '/sponsor.jpeg'}
              />
            }
            label="مرتضی ابوالقاسمی"
          />
          <Chip
            avatar={
              <Avatar
                alt="مرتضی ابوالقاسمی"
                src={process.env.PUBLIC_URL + '/sponsor.jpeg'}
              />
            }
            label="مرتضی ابوالقاسمی"
          />
          <Chip
            avatar={
              <Avatar
                alt="مرتضی ابوالقاسمی"
                src={process.env.PUBLIC_URL + '/sponsor.jpeg'}
              />
            }
            label="مرتضی ابوالقاسمی"
          />
          <Chip
            avatar={
              <Avatar
                alt="علی احتشامی"
                src={process.env.PUBLIC_URL + '/sponsor.jpeg'}
              />
            }
            label="علی احتشامی"
          />
          <Chip
            avatar={
              <Avatar
                alt="علی احتشامی"
                src={process.env.PUBLIC_URL + '/sponsor.jpeg'}
              />
            }
            label="علی احتشامی"
          />
          <Chip avatar={<Avatar alt="علی احتشامی" />} label="علی احتشامی" />
        </Box>
      </Grid>
      <Grid item xs={12} sm={4} container spacing={2} justifyContent="center">
        <Hidden xsDown>
          <Grid item>
            <Divider orientation="vertical" />
          </Grid>
        </Hidden>
        <Grid item xs>
          <Typography variant="h2">نمودار مشارکت</Typography>
          <div className={classes.packingCanvasContainer}>
            <ResponsiveCirclePackingCanvas
              data={fakeData}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
              id="name"
              colors={{ scheme: 'spectral' }}
              colorBy="id"
              childColor={{ from: 'color', modifiers: [['brighter', 0.4]] }}
              padding={1}
              leavesOnly={true}
              enableLabels={true}
              label="value"
              labelTextColor={{ from: 'color', modifiers: [['darker', 2.4]] }}
              borderColor={{ from: 'color', modifiers: [['darker', 0.3]] }}
              animate={true}
              valueFormat={(v) => `${v} میلیون تومان`}
            />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ProjectFounds;
