import {
  Box,
  Button,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@material-ui/core';
import { Add, Close } from '@material-ui/icons';
import { FC } from 'react';

const Research: FC<any> = () => {
  return (
    <Grid container spacing={3} direction="column">
      <Grid item>
        <Typography variant="h2">پژوهش</Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom>
          این بخش ها به حامیان کمک می کنند تا پیشینه پروژه شما را بفهمند و
          بدانند چرا این پروژه جالب است و ارزش بررسی دارد. سعی کنید طوری بنویسید
          که انگار پروژه خود را برای دوستی که در زمینه تحقیق شما نیست توضیح می
          دهید.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="label" gutterBottom>
          ایده اولیه شکل‌گیری این پروژه چیست؟
        </Typography>
        <Box pt={1}>
          <TextField
            placeholder="توضیحی مختصر در رابطه با ایده اصلی پشت این پروژه."
            fullWidth
            multiline
            rows={3}
            variant="outlined"
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="label" gutterBottom>
          اهمیت اصلی این پروژه چیست؟
        </Typography>
        <Box pt={1}>
          <TextField
            placeholder="توضیح دهید که با تکمیل این پروژه به چه ارزش‌هایی خواهیم رسید."
            fullWidth
            multiline
            rows={3}
            variant="outlined"
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="label" gutterBottom>
          هدف شما از انجام این پروژه چیست؟
        </Typography>
        <Box pt={1}>
          <TextField
            placeholder="دلایل و اهداف تیمتان برای انجام این پروژه چیست؟"
            fullWidth
            multiline
            rows={3}
            variant="outlined"
          />
        </Box>
      </Grid>
      <Grid item>
        <Typography variant="h3" gutterBottom>
          مشخصات فنی
        </Typography>
        <Box py={2}>
          <Grid container>
            <Grid item container xs={12} spacing={1} alignItems="center">
              <Grid item xs={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  label="مورد"
                  placeholder="ابعاد"
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  label="مقدار"
                  placeholder="۲۰ × ۳۰ × ۵۰"
                />
              </Grid>
              <Grid item xs={1}>
                <IconButton>
                  <Close fontSize="small" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Box>
        <Button variant="outlined" color="secondary" startIcon={<Add />}>
          اضافه کردن مورد جدید
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Typography variant="h6" component="label" gutterBottom>
          اطلاعات اضافی (اختیاری)
        </Typography>
        <Box pt={1}>
          <TextField
            placeholder="توضیحات تکمیلی مدنظرتان را شرح دهید."
            fullWidth
            multiline
            rows={3}
            variant="outlined"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Research;
