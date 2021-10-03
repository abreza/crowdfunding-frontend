import { Divider, Skeleton } from '@mui/material';
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

const ProjectCard: FC<{ item?: ProjectRo }> = ({ item }) => {
  const totalBudget =
    item?.budgets?.reduce(
      (partial_sum, budget) => partial_sum + budget.value,
      0
    ) || 0;

  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: 270,
      }}>
      <Link href={item ? `/project/${item.id}` : '#'} passHref>
        <CardActionArea disableRipple>
          {item ? (
            !!item?.imageUrls?.length && (
              <CardMedia
                component="img"
                alt={item.subject}
                height="140"
                image={item.imageUrls[0]}
                title={item.subject}
              />
            )
          ) : (
            <Skeleton
              sx={{ height: 140 }}
              animation="wave"
              variant="rectangular"
            />
          )}

          <CardContent>
            {item ? (
              <>
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
              </>
            ) : (
              <>
                <Skeleton
                  animation="wave"
                  height={10}
                  style={{ marginBottom: 6 }}
                />
                <Skeleton animation="wave" height={10} width="80%" />
              </>
            )}

            <Grid
              container
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ mb: 1 }}>
              <Grid item>
                {item ? (
                  <Avatar
                    alt={item.owner.firstName + ' ' + item.owner.lastName}
                  />
                ) : (
                  <Skeleton
                    animation="wave"
                    variant="circular"
                    width={40}
                    height={40}
                  />
                )}
              </Grid>
              <Grid item>
                <Grid container direction="column">
                  <Grid item>
                    {item ? (
                      <Typography variant="body2" component="p">
                        {item.owner.firstName + ' ' + item.owner.lastName}
                      </Typography>
                    ) : (
                      <Skeleton animation="wave" height={10} width={60} />
                    )}
                  </Grid>
                  <Grid item>
                    {item ? (
                      <Typography
                        variant="caption"
                        color="textSecondary"
                        component="p">
                        {item.owner.headline}
                      </Typography>
                    ) : (
                      <Skeleton animation="wave" height={10} width={90} />
                    )}
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
                {item ? (
                  <Typography
                    align="center"
                    sx={{
                      fontWeight: 600,
                    }}>
                    {`${totalBudget} تومان`}
                  </Typography>
                ) : (
                  <Skeleton animation="wave" height={10} width={40} />
                )}
              </Grid>
              <Grid item>
                {item ? (
                  <Typography
                    align="center"
                    sx={{
                      fontWeight: 600,
                    }}>
                    ۳۲٪
                  </Typography>
                ) : (
                  <Skeleton animation="wave" height={10} width={40} />
                )}
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
              {item ? '۱۰ روز' : <Skeleton animation="wave" width={40} />}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ProjectCard;
