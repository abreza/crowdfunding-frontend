import {
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from '@material-ui/core';
import { Close, Add } from '@material-ui/icons';
import { FC } from 'react';
import Link from "next/link";

const Budget: FC<any> = () => {
  return (
    <Grid container direction="column" spacing={3}>
      <Grid item>
        <Typography variant="h2">اهداف مالی</Typography>
      </Grid>
      <Grid item>
        <Typography gutterBottom>
          به طور متوسط پروژه با بودجه کمتر از ۲۰۰ میلیون تومان شروع می‌شود. ما
          به همه محققان توصیه می کنیم بودجه خود را کمترین میزان لازم برای انجام
          تحقیقات تعیین کنند.
        </Typography>
        <Typography gutterBottom>
          ما یک بستر بودجه
          <Link href="/"> همه یا هیچ</Link> هستیم.
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h3" gutterBottom>
          موارد بودجه
        </Typography>
        <Typography gutterBottom>
          سعی کنید هنگام برشمردن موارد بودجه خود تا حد ممکن شفاف باشید. هدف
          بودجه پروژه شما به طور خودکار به عنوان مجموع تمام هزینه های بودجه
          محاسبه می شود.
        </Typography>
        <Box py={2}>
          <Grid container>
            <Grid item container xs={12} spacing={1} alignItems="center">
              <Grid item xs={7}>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  label="مورد بودجه"
                  placeholder="تبلیغات"
                />
              </Grid>
              <Grid item xs={4}>
                <TextField
                  variant="outlined"
                  fullWidth
                  size="small"
                  label="مبلغ"
                  placeholder="۱۰۰٫۰۰۰٫۰۰۰"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">تومان</InputAdornment>
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
      <Grid item>
        <Typography variant="h6" component="label" gutterBottom>
          این موارد بودجه چگونه به شما در تکمیل پروژه، کمک خواهد کرد؟
        </Typography>
        <Box pt={1}>
          <TextField
            placeholder="تیم ما در نظر دارد با تکمیل زنجیره ..."
            fullWidth
            multiline
            rows={4}
            variant="outlined"
          />
        </Box>
      </Grid>
    </Grid>
  );
};

export default Budget;
