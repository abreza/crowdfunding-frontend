import { Avatar, Box, Button, Chip, Grid, Typography } from '@mui/material';
import { ArrowBack as ArrowBackIcon } from '@mui/icons-material';
import { FC } from 'react';
import Link from 'next/link';
import Homepage from 'templates/Homepages';
import Image from 'next/image';

type PostProps = {};

const Post: FC<PostProps> = () => {
  return (
    <Homepage>
      <Grid container alignItems="center" justifyContent="center" sx={{ p: 2 }}>
        <Grid item xs={12} sm={10} md={8}>
          <Grid item container justifyContent="flex-end">
            <Box sx={{ mb: 1 }}>
              <Link href="/blog" passHref>
                <Button endIcon={<ArrowBackIcon />}>بازگشت به بلاگ</Button>
              </Link>
            </Box>
          </Grid>
          <Box
            sx={{
              mb: 1,
              borderRadius: '5px 5px 0 0',
              overflow: 'hidden',
              position: 'relative',
              height: 400,
            }}>
            <Image
              src="https://bankautomationnews.com/wp-content/uploads/2019/08/crowdfunding-3576868_1920.jpg"
              alt="crowdfunding"
              layout="fill"
              objectFit="cover"
            />
          </Box>
          <Chip avatar={<Avatar />} label="علی محمدی" color="primary" />
          <Typography variant="h2" gutterBottom sx={{ my: 1 }}>
            چرا باید در تامین مالی جمعی شرکت کنیم؟
          </Typography>
          <Typography variant="body1">
            برای خیلی از سرمایه‌گذاران ممکن است این سوال پیش بیاید که با وجود
            بازدهی بالای خرید و فروش سهام، چرا باید بخشی از سرمایه خود را به
            سرمایه‌گذاری در تامین مالی جمعی اختصاص دهیم؟ در این مطلب سعی
            کرده‌ایم به چهار مزیت رقابتی تامین مالی جمعی در بازار سرمایه اشاره
            کنیم.
            <br />
            ۱) یکی از مهم‌ترین دلایل لزوم تنوع‌بخشی به سبد سرمایه‌گذاری‌ برای
            کاهش ریسک است. تامین مالی جمعی یک گزینه بسیار مناسب برای این
            تنوع‌بخشی است، چرا که هم بازدهی آن از بسیاری از ابزارهای دیگر بالاتر
            بوده و هم گزینه‌ای با عملکرد متفاوت از سایر ابزارهاست.
            <br />
            ۲) دومین دلیل این است که این ابزار حتی برای سرمایه‌گذاران غیر
            حرفه‌ای هم بسیار راحت و قابل درک است. برای ورود به آن یا بررسی
            فرصت‌های سرمایه‌گذاری نیازی به دانش تخصصی مالی ندارد. اثر شانس، رانت
            و سفته‌بازی در بازدهی سرمایه‌گذاری بسیار کم‌رنگ است. گزارش‌های
            عملکرد را به راحتی می‌توان بررسی کرد و اطلاع دقیقی از شیوه هزینه‌کرد
            سرمایه‌گذاری به دست آورد.
            <br />
            ۳) کرادفاندینگ کاملا بر اصول شرعی و فقهی منطبق است و دغدغه‌های
            مخاطبین این موضوع را به خوبی پوشش می‌دهد. چرا که در تامین مالی
            جمعی،‌ سرمایه‌گذار در سود و زیان توسعه کسب‌وکار، طبق برنامه و شرایط
            مشخص شریک بوده و اثر سرمایه‌گذاری به راحتی قابل مشاهده و پیگیری است.
            <br />
            ۴) اخلاقی[تر] است. چرا که سرمایه‌گذاری صرف مشارکت در توسعه و رشد
            کسب‌وکارهای کوچک و متوسط می‌شود که در زندگی روزمره با آنها سروکار
            داریم. به همین دلیل هم‌زمان با سودآوری سرمایه‌گذاری برای ما، اثر
            ملموسی نیز بر اقتصاد و اشتغال و زندگی عامه جامعه گذاشته می‌شود.
          </Typography>
          <Grid container spacing={1}>
            <Grid item>
              <Chip label="سرمایه‌گذاری" sx={{ background: '#ddd' }} />
            </Grid>
            <Grid item>
              <Chip label="تامین مالی جمعی" sx={{ background: '#ddd' }} />
            </Grid>
            <Grid item>
              <Chip label="اشتغال" sx={{ background: '#ddd' }} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Homepage>
  );
};

export default Post;
