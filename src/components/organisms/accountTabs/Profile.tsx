import {
  AssignmentInd,
  LinkedIn,
  PersonPinCircle,
  Web,
} from '@mui/icons-material';
import { Grid, InputAdornment, TextField } from '@mui/material';
import { RootStateType } from 'src/app/store';
import { ProfileAvatar } from 'src/components/molecules/profileAvatar/ProfileAvatar';
import { baseUrl } from 'src/config';
import { useSelector } from 'react-redux';
import { useState, useEffect, FC } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { toast } from 'react-toastify';
import {
  UserRo,
  UserUpdateDto,
  useUsersControllerUpdateUserProfileMutation,
} from 'src/app/services/api.generated';

export const Profile: FC = () => {
  const user = useSelector<RootStateType, UserRo>((state) => state.auth.user);

  const [updateProfile, { isLoading }] =
    useUsersControllerUpdateUserProfileMutation();

  const [profileForm, setProfileForm] = useState<UserUpdateDto>(user);

  useEffect(() => {
    const { roleNames, mailConfig, avatarAddress, email, ...newProfile } = user;
    setProfileForm(newProfile);
  }, [user]);

  const onChange: (e: React.ChangeEvent<{ name: string; value: any }>) => void =
    ({ target: { name, value } }) =>
      setProfileForm((pf) => ({ ...pf, [name]: value }));

  const onSubmit = () =>
    updateProfile({ userUpdateDto: profileForm })
      .unwrap()
      .then(() => toast.success('تغییرات ثبت شد!'))
      .catch((err) => err && toast.error(JSON.stringify(err)));
  return (
    <Grid container sx={{ pt: 2 }} spacing={2}>
      <Grid item xs={12}>
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
                disabled
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
          loading={isLoading}
        >
          ثبت اطلاعات
        </LoadingButton>
      </Grid>
    </Grid>
  );
};
