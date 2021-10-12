import { Chip, Divider, Skeleton } from '@mui/material';
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
import { ManageProjectCard } from './ManageProjectCard';
import { ProjectRo } from 'src/app/services/api.generated';
import { Box } from '@mui/system';
import translateNumber from 'src/utils/translateNumberUtils';

export enum ProjectPermission {
  VISITOR = 'VISITOR',
  OWNER = 'OWNER',
  ADMIN = 'ADMIN',
}

const ProjectCard: FC<{
  item?: ProjectRo;
  permissionMode?: ProjectPermission;
}> = ({ item, permissionMode = ProjectPermission.VISITOR }) => {
  const totalBudget =
    item?.budgets?.reduce(
      (partial_sum, budget) => partial_sum + budget.value,
      0
    ) || 0;

  const image = item?.imageUrls?.find((url) => !url.includes('.mp4'));

  return (
    <Card
      sx={{
        width: 270,
      }}
    >
      <Link href={item ? `/project/${item.id}` : '#'} passHref>
        <CardActionArea disableRipple>
          {item ? (
            !!item?.imageUrls?.length && (
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  alt={item.subject}
                  height="140"
                  image={image}
                  title={item.subject}
                />
                {permissionMode !== ProjectPermission.VISITOR && (
                  <Chip
                    color="primary"
                    label={item.state}
                    sx={{ position: 'absolute', left: 10, top: 10 }}
                  />
                )}
              </Box>
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
                  }}
                >
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
              sx={{ mb: 1 }}
            >
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
                        component="p"
                      >
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
              sx={{ mt: 2 }}
            >
              <Grid item>
                {item ? (
                  <Typography
                    align="center"
                    sx={{
                      fontWeight: 600,
                    }}
                  >
                    {`${translateNumber({ num: totalBudget })} تومان`}
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
                    }}
                  >
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
              }}
            >
              {item ? '۱۰ روز' : <Skeleton animation="wave" width={40} />}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      {permissionMode !== ProjectPermission.VISITOR && (
        <ManageProjectCard project={item as ProjectRo} />
      )}
    </Card>
  );
};

export default ProjectCard;
