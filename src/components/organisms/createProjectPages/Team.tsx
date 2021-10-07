import {
  Avatar,
  Badge,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import { Create as CreateIcon } from '@mui/icons-material';
import { FC } from 'react';
import { ProjectCreateDto } from 'src/app/services/api.generated';

const Team: FC<{ handleChange: any; project: ProjectCreateDto }> = ({
  handleChange,
  project,
}) => {
  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Typography variant="h2">تیم</Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom>
          این برای حامیان مهم است که بدانند چه کسی این تحقیق را انجام می دهد. در
          مورد چگونگی ورود به رشته تحصیلی و دلیل علاقه شما صحبت کنید. فراموش
          نکنید که یک عکس پروفایل خوب بارگذاری کنید!
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
          اطلاعات محقق
        </Typography>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid
            item
            container
            direction="column"
            spacing={2}
            xs={3}
            alignItems="center"
            justifyContent="center">
            <Grid item>
              <Badge
                overlap="circular"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                badgeContent={
                  <IconButton size="large">
                    <CreateIcon />
                  </IconButton>
                }>
                <Avatar
                  sx={{
                    width: 56,
                    height: 56,
                  }}
                />
              </Badge>
            </Grid>
            <Grid item>
              <Typography variant="h6" component="label" gutterBottom>
                علی محمدی
              </Typography>
            </Grid>
          </Grid>
          <Grid item container xs={9} direction="column" spacing={2}>
            <Grid item>
              <TextField
                label="زندگی‌نامه"
                placeholder="توضیحی مختصر در رابطه با خودتان!"
                multiline
                minRows={4}
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField label="عنوان (اختیاری)" size="small" fullWidth />
            </Grid>
            <Grid item>
              <TextField label="مرکز علمی (اختیاری)" size="small" fullWidth />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Team;
