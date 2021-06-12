import { Divider } from '@material-ui/core';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  makeStyles,
  Typography,
  withStyles,
} from '@material-ui/core';
import { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  description: {
    display: '-webkit-box',
    maxWidth: '100%',
    WebkitLineClamp: '2' as any,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: theme.spacing(3),
  },
  linearProgress: {
    margin: theme.spacing(2, 0, 0),
  },
  grid: {
    margin: theme.spacing(0, 0, 1),
  },
  bold: {
    fontWeight: 600,
  },
}));

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const ProjectCard: FC<any> = ({ item }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={item.name}
          height="140"
          image={item.image}
          title={item.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.name}
          </Typography>
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}>
            {item.description}
          </Typography>
          <Grid
            container
            direction="row"
            alignItems="center"
            spacing={2}
            className={classes.grid}>
            <Grid item>
              <Avatar
                alt="Robert Jervis"
                src="https://media.tehrantimes.com/d/t/2020/05/17/4/3454683.jpg"
              />
            </Grid>
            <Grid item>
              <Grid container direction="column">
                <Grid item>
                  <Typography variant="body2" component="p">
                    Robert Jervis
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    component="p">
                    Professor of Columbia University
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Divider />
          <div className={classes.linearProgress}>
            <Grid
              container
              justify="space-between"
              alignItems="center"
              direction="row">
              <Grid item>
                <Typography align="center" className={classes.bold}>
                  ۵۰ میلیون تومان
                </Typography>
              </Grid>
              <Grid item>
                <Typography align="center" className={classes.bold}>
                  ۳۲٪
                </Typography>
              </Grid>
            </Grid>
            <div style={{ margin: '5px 0' }}>
              <BorderLinearProgress variant="determinate" value={50} />
            </div>
            <Typography className={classes.bold}>۱۰ روز</Typography>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
