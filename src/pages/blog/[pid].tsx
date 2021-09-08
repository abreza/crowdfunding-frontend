import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import { ArrowForward as ArrowForwardIcon } from '@material-ui/icons';
import { FC } from 'react';
import Link from 'next/link';
import Homepage from 'templates/Homepages';
import SImage from 'components/atoms/sImage/SImage';

const useStyles = makeStyles(() => ({
  postHead: {
    borderRadius: '5px 5px 0 0',
  },
}));

type PostProps = {};

const Post: FC<PostProps> = () => {
  const classes = useStyles();

  return (
    <Homepage>
      <Box p={2}>
        <Grid container alignItems="center" justifyContent="center">
          <Grid item xs={12} sm={10} md={8}>
            <Grid item container justifyContent="flex-end">
              <Box mb={1}>
                <Link href="/blog" passHref>
                  <Button endIcon={<ArrowForwardIcon />}>بازگشت به بلاگ</Button>
                </Link>
              </Box>
            </Grid>
            <SImage
              src="https://bankautomationnews.com/wp-content/uploads/2019/08/crowdfunding-3576868_1920.jpg"
              alt="crowdfunding"
              layout="fill"
              maxWidth="500px"
              className={classes.postHead}
            />
            <Chip avatar={<Avatar />} label="علی محمدی" color="primary" />
            <Box my={1}>
              <Typography variant="h2" gutterBottom>
                چرا باید در تامین مالی جمعی شرکت کنیم؟
              </Typography>
              <Typography variant="body1">
                برای خیلی از سرمایه‌گذاران ممکن است این سوال پیش بیاید که با
                وجود بازدهی بالای خرید و فروش سهام، چرا باید بخشی از سرمایه خود
                را به سرمایه‌گذاری در تامین مالی جمعی اختصاص دهیم؟ در این مطلب
                سعی کرده‌ایم به چهار مزیت رقابتی تامین مالی جمعی در بازار سرمایه
                اشاره کنیم.
                <br />
                ۱) یکی از مهم‌ترین دلایل لزوم تنوع‌بخشی به سبد سرمایه‌گذاری‌
                برای کاهش ریسک است. تامین مالی جمعی یک گزینه بسیار مناسب برای
                این تنوع‌بخشی است، چرا که هم بازدهی آن از بسیاری از ابزارهای
                دیگر بالاتر بوده و هم گزینه‌ای با عملکرد متفاوت از سایر
                ابزارهاست.
                <br />
                ۲) دومین دلیل این است که این ابزار حتی برای سرمایه‌گذاران غیر
                حرفه‌ای هم بسیار راحت و قابل درک است. برای ورود به آن یا بررسی
                فرصت‌های سرمایه‌گذاری نیازی به دانش تخصصی مالی ندارد. اثر شانس،
                رانت و سفته‌بازی در بازدهی سرمایه‌گذاری بسیار کم‌رنگ است.
                گزارش‌های عملکرد را به راحتی می‌توان بررسی کرد و اطلاع دقیقی از
                شیوه هزینه‌کرد سرمایه‌گذاری به دست آورد.
                <br />
                ۳) کرادفاندینگ کاملا بر اصول شرعی و فقهی منطبق است و دغدغه‌های
                مخاطبین این موضوع را به خوبی پوشش می‌دهد. چرا که در تامین مالی
                جمعی،‌ سرمایه‌گذار در سود و زیان توسعه کسب‌وکار، طبق برنامه و
                شرایط مشخص شریک بوده و اثر سرمایه‌گذاری به راحتی قابل مشاهده و
                پیگیری است.
                <br />
                ۴) اخلاقی[تر] است. چرا که سرمایه‌گذاری صرف مشارکت در توسعه و رشد
                کسب‌وکارهای کوچک و متوسط می‌شود که در زندگی روزمره با آنها
                سروکار داریم. به همین دلیل هم‌زمان با سودآوری سرمایه‌گذاری برای
                ما، اثر ملموسی نیز بر اقتصاد و اشتغال و زندگی عامه جامعه گذاشته
                می‌شود.
              </Typography>
            </Box>
            <Grid container spacing={1}>
              <Grid item>
                <Chip label="سرمایه‌گذاری" style={{ background: '#ddd' }} />
              </Grid>
              <Grid item>
                <Chip label="تامین مالی جمعی" style={{ background: '#ddd' }} />
              </Grid>
              <Grid item>
                <Chip label="اشتغال" style={{ background: '#ddd' }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </Homepage>
  );
};

export default Post;
