import {
  Container,
  Button,
  Typography,
  makeStyles,
  Grid,
} from '@material-ui/core';
import { FC } from 'react';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4, 0),
  },
  img: {
    width: '100%',
  },
}));

type WhatIsCrowdfundingProps = {};

const WhatIsCrowdfunding: FC<WhatIsCrowdfundingProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Container maxWidth="md">
        <Typography variant="h2" gutterBottom align="center">
          تامین‌مالی جمعی چیست؟
        </Typography>
        <Grid container spacing={2} alignItems="center" justify="center">
          <Grid item sm={6} xs={12}>
            <img
              src={process.env.PUBLIC_URL + 'pic2.png'}
              alt="crowdfunding"
              className={classes.img}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="body1" gutterBottom>
              یکی از چالش‌های اساسی شرکت‌ها یا گروه‌های مختلف، تامین سرمایه است.
              عموما این گروه‌ها نمی‌توانند از شیوه‌های رایج تامین مالی نظیر
              گرفتن وام از بانک‌ها استفاده کنند؛ چرا که امکان تامین مدارک رسمی
              مدنظر نهادهای مالی را ندارند. با توجه به این موضوع می‌بایست به
              دنبال راه‌های دیگری برای جذب سرمایه باشند. همچنین عدم وجود اطلاعات
              تاریخی برای بررسی عملکرد گروه نیز دلیل دیگری است که تصمیم برای
              سرمایه‌گذاری را سخت می‌کند. انتظار می‌رود در این شرایط،
              سرمایه‌گذاران خطرپذیر که عموما روی کسب و کارهای نوپا Startup
              سرمایه‌گذاری می‌کنند، تامین سرمایه را تسهیل کنند، اما شاهد این
              هستیم که به سبب ریسک کمتر و امکان ارزش‌گذاری دقیق‌تر،
              استراتژی‌هایشان را بر سرمایه‌گذاری روی گروه‌هایی که مراحل اولیه را
              پشت سر گذاشته‌ اند، متمرکز کرده‌ اند.
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="body1" gutterBottom>
              با گسترش روز افزون استفاده از فناوری‌های نوین، تامین مالی جمعی
              Crowd Funding به عنوان راه حلی برای اینگونه مسائل پولی و مالی مورد
              توجه قرار گرفته است. منظور از تامین مالی جمعی، جمع آوری مبالغ خرد
              از تعداد زیادی از افراد حقیقی و حقوقی جامعه برای یک مقصود خاص
              می‌باشد. بنابراین، شاهد استفاده روزافزون افراد و سازمان‌ها از
              سکوهای تامین مالی جمعی برای مرتفع سازی نیازهای مالی آنها و
              درآمدزایی می باشیم.
            </Typography>
          </Grid>
          <Grid item sm={6} xs={12}>
            <img
              src={process.env.PUBLIC_URL + 'pic6.png'}
              alt="crowdfunding"
              className={classes.img}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <img
              src={process.env.PUBLIC_URL + 'pic7.png'}
              alt="crowdfunding"
              className={classes.img}
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Typography variant="body1" gutterBottom>
              تامین مالی جمعی به عنوان یک پدیده‌ی در حال رشد شناخته شده و تاکنون
              توانسته حجم قابل توجهی از سرمایه را تجمیع کند، اما هنوز مرحله
              تکامل خود را پشت سر می‌گذارد. روز به روز مردم و کارآفرینان بیشتری
              از ظرفیت‌های تامین مالی جمعی آگاه می‌شوند؛ لذا انتظار می‌رود که به
              یکی از راه‌های اصلی تامین سرمایه برای کسب و کارهای نوپا تبدیل شود.
            </Typography>
          </Grid>
          <Grid item container justify="center" xs={12} sm={12}>
            <Button variant="contained" color="primary">
              مشاهده پروژه‌های موفق
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default WhatIsCrowdfunding;
