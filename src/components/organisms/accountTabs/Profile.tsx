import {
  AccountCircle,
  AssignmentInd,
  LinkedIn,
  LocalLibrary,
  PersonPinCircle,
  Web,
} from '@mui/icons-material';
import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  useMediaQuery,
} from '@mui/material';
import { useTheme } from '@mui/system';
import { ProfileAvatar } from 'components/molecules/profileAvatar/ProfileAvatar';

export const Profile = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down('sm'));

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
              <ProfileAvatar />
            </Grid>
          </Grid>
          <Grid item xs={12} sm={8} container direction="column" spacing={2}>
            <Grid item container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  variant={isXs ? 'outlined' : 'standard'}
                  size="small"
                  label="نام"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  fullWidth
                  variant={isXs ? 'outlined' : 'standard'}
                  size="small"
                  label="نام‌خانوادگی"
                />
              </Grid>
            </Grid>
            <Grid item>
              <TextField
                fullWidth
                variant={isXs ? 'outlined' : 'standard'}
                size="small"
                label="نام کاربری"
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
