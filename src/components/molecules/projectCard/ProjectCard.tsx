import { Box, Divider } from '@material-ui/core';
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
import Link from 'next/link';
import prof from 'assets/images/prof.jpg';
import { ProjectRo } from 'types/project';

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

export const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  bar: {
    borderRadius: 5,
  },
}))(LinearProgress);

const ProjectCard: FC<{ item: ProjectRo }> = ({ item }) => {
  const classes = useStyles();

  const totalBudget = item.budgets.reduce(
    (partial_sum, budget) => partial_sum + budget.value,
    0
  );

  return (
    <Card className={classes.root}>
      <Link href={`/project/${item.id}`} passHref>
        <CardActionArea disableRipple>
          <CardMedia
            component="img"
            alt={item.subject}
            height="140"
            image={item.imageUrls?.[0]}
            title={item.subject}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {item.subject}
            </Typography>
            <Typography
              gutterBottom
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.description}>
              {item.summary}
            </Typography>
            <Grid
              container
              direction="row"
              alignItems="center"
              spacing={2}
              className={classes.grid}>
              <Grid item>
                <Avatar
                  alt={item.owner.firstName + ' ' + item.owner.lastName}
                />
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    <Typography variant="body2" component="p">
                      {item.owner.firstName + ' ' + item.owner.lastName}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography
                      variant="caption"
                      color="textSecondary"
                      component="p">
                      دانشجوی دانشگاه صنعتی شریف
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Divider />
            <div className={classes.linearProgress}>
              <Grid
                container
                justifyContent="space-between"
                alignItems="center"
                direction="row">
                <Grid item>
                  <Typography align="center" className={classes.bold}>
                    {`${totalBudget} تومان`}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography align="center" className={classes.bold}>
                    ۳۲٪
                  </Typography>
                </Grid>
              </Grid>
              <Box my={3}>
                <BorderLinearProgress
                  variant="determinate"
                  value={50}
                  color="secondary"
                />
              </Box>
              <Typography className={classes.bold}>۱۰ روز</Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ProjectCard;
