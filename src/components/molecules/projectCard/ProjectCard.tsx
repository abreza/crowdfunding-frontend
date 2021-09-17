import { Divider } from '@mui/material';
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  LinearProgress,
  Typography,
} from '@mui/material';
import { FC } from 'react';
import Link from 'next/link';
import { ProjectRo } from 'types/project';

const ProjectCard: FC<{ item: ProjectRo }> = ({ item }) => {
  const totalBudget = item.budgets.reduce(
    (partial_sum, budget) => partial_sum + budget.value,
    0
  );

  return (
    <Card
      sx={{
        maxWidth: 345,
      }}>
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
              sx={{
                display: '-webkit-box',
                maxWidth: '100%',
                WebkitLineClamp: '2' as any,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                marginBottom: 3,
              }}>
              {item.summary}
            </Typography>
            <Grid
              container
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ mb: 1 }}>
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
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              direction="row"
              sx={{ mt: 2 }}>
              <Grid item>
                <Typography
                  align="center"
                  sx={{
                    fontWeight: 600,
                  }}>
                  {`${totalBudget} تومان`}
                </Typography>
              </Grid>
              <Grid item>
                <Typography
                  align="center"
                  sx={{
                    fontWeight: 600,
                  }}>
                  ۳۲٪
                </Typography>
              </Grid>
            </Grid>
            <LinearProgress
              sx={{ my: 3 }}
              variant="determinate"
              value={50}
              color="secondary"
            />
            <Typography
              sx={{
                fontWeight: 600,
              }}>
              ۱۰ روز
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ProjectCard;
