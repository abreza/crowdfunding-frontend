import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import { Add, Close, DateRange } from '@material-ui/icons';
import { FC } from 'react';

const Timeline: FC<any> = () => {
  return (
    <Grid container spacing={3}>
      <Grid item>
        <Typography variant="h2">زمان‌بندی پروژه</Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom>
          مراحل تکمیل پروژه و آنچه را که می خواهید به حامیان پروژه بازگردانید،
          بیان کنید.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" component="label" gutterBottom>
          شرح زمانی
        </Typography>
        <Box pt={1}>
          <TextField
            placeholder="توضیحی در رابطه با زمان‌بندی مدنظر."
            fullWidth
            multiline
            rows={3}
            variant="outlined"
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h3" gutterBottom>
          مراحل تکمیل پروژه را تعیین کنید.
        </Typography>
        <Box py={2}>
          <Grid container>
            <Grid item container xs={12} spacing={1} alignItems="center">
              <Grid item xs={8}>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  label="مورد قابل تحویل و یا میزان پیشرفت پروژه"
                  placeholder="تکمیل وب‌سایت محصول"
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  label="تاریخ"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <DateRange />
                      </InputAdornment>
                    ),
                  }}
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
    </Grid>
  );
};

export default Timeline;
