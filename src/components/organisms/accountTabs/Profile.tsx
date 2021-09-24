import {
  AssignmentInd,
  LinkedIn,
  LocalLibrary,
  PersonPinCircle,
  Web,
} from '@mui/icons-material';
import { Button, Grid, InputAdornment, TextField } from '@mui/material';
import { RootState } from 'app/store';
import { ProfileAvatar } from 'components/molecules/profileAvatar/ProfileAvatar';
import { baseUrl } from 'config';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';

export const Profile = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const [profileForm, setProfileForm] = useState(user);

  useEffect(() => {
    setProfileForm(user);
  }, [user]);

  return (
    <Grid container sx={{ pt: 2 }} spacing={2}>
      <Grid item xs={12}>
        <Grid
          container
          spacing={2}
          direction="row"
          alignItems="center"
          justifyContent="center">
          <Grid item xs={12} sm={4}>
            <Grid container alignItems="center" justifyContent="center">
              <ProfileAvatar image={baseUrl + user.avatar} />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8} container direction="column" spacing={2}>
            <Grid item container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="نام"
                  name="firstName"
                  value={profileForm.firstName}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="نام‌خانوادگی"
                  name="lastName"
                  value={profileForm.lastName}
                />
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                size="small"
                label="نام کاربری"
                name="username"
                value={profileForm.username}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={4}
          size="small"
          label="توضیحاتی در رابطه با شما"
          name="bio"
          value={profileForm.bio}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          size="small"
          label="عنوان حرفه‌ای شما"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <AssignmentInd />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          size="small"
          label="موئسسه علمی"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <LocalLibrary />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          size="small"
          label="موقعیت مکانی"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <PersonPinCircle />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          size="small"
          label="آدرس وب‌سایت"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Web />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          size="small"
          label="آدرس لینک‌دین"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <LinkedIn />
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={12}>
        <Button fullWidth variant="contained">
          ثبت اطلاعات
        </Button>
      </Grid>
    </Grid>
  );
};
