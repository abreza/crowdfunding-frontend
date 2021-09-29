import {
  AssignmentInd,
  LinkedIn,
  PersonPinCircle,
  Web,
} from '@mui/icons-material';
import { Grid, InputAdornment, TextField } from '@mui/material';
import { RootStateType } from 'app/store';
import { ProfileAvatar } from 'components/molecules/profileAvatar/ProfileAvatar';
import { baseUrl } from 'config';
import { useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useSetProfileMutation } from 'app/services/auth';
import { UserRo } from 'types/auth';
import { LoadingButton } from 'components/atoms/LoadingButton';
import { toast } from 'react-toastify';

export const Profile = () => {
  const { user } = useSelector((state: RootStateType) => state.auth);

  useGetProfileQuery();

  const [setProfile, { isLoading }] = useSetProfileMutation();

  const [profileForm, setProfileForm] = useState<UserRo>(user);

  useEffect(() => {
    const { roles, mailConfig, avatar, ...newProfile } = user;
    setProfileForm(newProfile);
  }, [user]);

  const onChange: (e: React.ChangeEvent<{ name: string; value: any }>) => void =
    ({ target: { name, value } }) =>
      setProfileForm((pf: UserRo) => ({ ...pf, [name]: value }));

  const onSubmit = () => {
    setProfile(profileForm).then(() => toast.success('تغییرات ثبت شد!'));
  };

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
              <ProfileAvatar
                src={user.avatarAddress && baseUrl + user.avatarAddress}
              />
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
                  onChange={onChange}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  size="small"
                  label="نام‌خانوادگی"
                  name="lastName"
                  value={profileForm.lastName}
                  onChange={onChange}
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
                onChange={onChange}
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
          name="description"
          value={profileForm.description}
          onChange={onChange}
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
          name="headline"
          value={profileForm.headline}
          onChange={onChange}
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
          name="address"
          value={profileForm.address}
          onChange={onChange}
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
          name="website"
          value={profileForm.website}
          onChange={onChange}
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
          name="linkedinAddress"
          value={profileForm.linkedinAddress}
          onChange={onChange}
        />
      </Grid>
      <Grid item xs={12}>
        <LoadingButton
          fullWidth
          variant="contained"
          onClick={onSubmit}
          loading={isLoading}>
          ثبت اطلاعات
        </LoadingButton>
      </Grid>
    </Grid>
  );
};
