import { Container, Button, Typography, Grid, Box } from '@mui/material';
import { FC } from 'react';
import Link from 'next/link';

import pic2 from 'assets/images/pic2.png';
import pic6 from 'assets/images/pic6.png';
import pic7 from 'assets/images/pic7.png';
import Image from 'next/image';

type WhatIsCrowdfundingProps = {};

const WhatIsCrowdfunding: FC<WhatIsCrowdfundingProps> = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Typography variant="h2" sx={{ pb: 3 }} align="center">
        تامین‌مالی جمعی چیست؟
      </Typography>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <Grid
          item
          sm={6}
          xs={12}
          sx={{ order: { xs: 0, sm: 1 }, position: 'relative' }}>
          <Image
            src={pic2}
            alt="crowdfunding"
            layout="responsive"
            width="100%"
            height="100%"
          />
        </Grid>
        <Grid item sm={6} xs={12} sx={{ order: { xs: 1, sm: 0 } }}>
          <Typography variant="body1" gutterBottom align="justify">
            یکی از چالش‌های اساسی شرکت‌ها یا گروه‌های مختلف، تامین سرمایه است.
            عموما این گروه‌ها نمی‌توانند از شیوه‌های رایج تامین مالی نظیر گرفتن
            وام از بانک‌ها استفاده کنند؛ چرا که امکان تامین مدارک رسمی مدنظر
            نهادهای مالی را ندارند. با توجه به این موضوع می‌بایست به دنبال
            راه‌های دیگری برای جذب سرمایه باشند. همچنین عدم وجود اطلاعات تاریخی
            برای بررسی عملکرد گروه نیز دلیل دیگری است که تصمیم برای سرمایه‌گذاری
            را سخت می‌کند.
            <br />
            انتظار می‌رود در این شرایط، سرمایه‌گذاران خطرپذیر که عموما روی کسب و
            کارهای نوپا Startup سرمایه‌گذاری می‌کنند، تامین سرمایه را تسهیل
            کنند، اما شاهد این هستیم که به سبب ریسک کمتر و امکان ارزش‌گذاری
            دقیق‌تر، استراتژی‌هایشان را بر سرمایه‌گذاری روی گروه‌هایی که مراحل
            اولیه را پشت سر گذاشته‌ اند، متمرکز کرده‌ اند.
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12} sx={{ order: 2, position: 'relative' }}>
          <Image
            src={pic6}
            alt="crowdfunding"
            layout="responsive"
            width="100%"
            height="70%"
          />
        </Grid>
        <Grid item sm={6} xs={12} sx={{ order: 3 }}>
          <Typography variant="body1" gutterBottom align="justify">
            با گسترش روز افزون استفاده از فناوری‌های نوین، تامین مالی جمعی Crowd
            Funding به عنوان راه حلی برای اینگونه مسائل پولی و مالی مورد توجه
            قرار گرفته است. منظور از تامین مالی جمعی، جمع آوری مبالغ خرد از
            تعداد زیادی از افراد حقیقی و حقوقی جامعه برای یک مقصود خاص می‌باشد.
            بنابراین، شاهد استفاده روزافزون افراد و سازمان‌ها از سکوهای تامین
            مالی جمعی برای مرتفع سازی نیازهای مالی آنها و درآمدزایی می باشیم.
          </Typography>
        </Grid>
        <Grid
          item
          sm={6}
          xs={12}
          sx={{ order: { xs: 4, sm: 5 }, position: 'relative' }}>
          <Image
            src={pic7}
            alt="crowdfunding"
            layout="responsive"
            width="100%"
            height="70%"
          />
        </Grid>

        <Grid item sm={6} xs={12} sx={{ order: { xs: 5, sm: 4 } }}>
          <Typography variant="body1" gutterBottom align="justify">
            تامین مالی جمعی به عنوان یک پدیده‌ی در حال رشد شناخته شده و تاکنون
            توانسته حجم قابل توجهی از سرمایه را تجمیع کند، اما هنوز مرحله تکامل
            خود را پشت سر می‌گذارد. روز به روز مردم و کارآفرینان بیشتری از
            ظرفیت‌های تامین مالی جمعی آگاه می‌شوند؛ لذا انتظار می‌رود که به یکی
            از راه‌های اصلی تامین سرمایه برای کسب و کارهای نوپا تبدیل شود.
          </Typography>
        </Grid>

        <Grid
          item
          container
          justifyContent="center"
          xs={12}
          sm={12}
          sx={{ order: 6 }}>
          <Link href="/project" passHref>
            <Button variant="contained" color="primary">
              مشاهده پروژه‌های موفق
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhatIsCrowdfunding;
