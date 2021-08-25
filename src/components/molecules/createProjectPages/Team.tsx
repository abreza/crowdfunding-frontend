import {
  Avatar,
  Badge,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from '@material-ui/core';
import { Create as CreateIcon } from '@material-ui/icons';
import { FC } from 'react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
    },
    edit: {
      'body[dir=rtl] & .MuiSvgIcon-root': { transform: 'scaleX(1)' },
    },
  })
);

const Team: FC<any> = () => {
  const classes = useStyles();

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
                overlap="circle"
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                className={classes.edit}
                badgeContent={
                  <IconButton>
                    <CreateIcon />
                  </IconButton>
                }>
                <Avatar className={classes.large} />
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
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label="عنوان (اختیاری)"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                label="مرکز علمی (اختیاری)"
                variant="outlined"
                size="small"
                fullWidth
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Team;
