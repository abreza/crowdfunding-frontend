import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { RootStateType } from 'src/app/store';
import { ProfileAvatar } from 'src/components/molecules/profileAvatar/ProfileAvatar';
import { baseUrl } from 'src/config';

import Link from 'next/link';
import { useSelector } from 'react-redux';
import { UserRo } from 'src/app/services/api.generated';
import { FC } from 'react';

export const UserCard: FC = () => {
  const user = useSelector<RootStateType, UserRo>((state) => state.auth.user);

  return (
    <Card sx={{ maxWidth: 345, mx: 'auto' }}>
      <CardContent>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12} sm={4}>
            <Grid container alignItems="center" justifyContent="center">
              <ProfileAvatar
                editable={false}
                src={user.avatarAddress && baseUrl + user.avatarAddress}
              />
            </Grid>
          </Grid>
          <Grid
            item
            xs={12}
            sm={8}
            container
            direction="column"
            justifyContent="center"
            spacing={1}
          >
            <Grid item xs={12}>
              <Typography variant="h5" component="div">
                {user.firstName + ' ' + user.lastName}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body2" color="text.secondary">
                {user.headline}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="subtitle2"
              color="text.secondary"
              sx={{ textAlign: { xs: 'center', sm: 'left' } }}
            >
              {user.description}
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <Link href="/account" passHref>
          <Button size="small">ویرایش</Button>
        </Link>
      </CardActions>
    </Card>
  );
};
