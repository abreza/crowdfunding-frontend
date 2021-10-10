import { Container, Paper, Grid, Typography } from '@mui/material';
import { FC } from 'react';
import Homepage from 'src/templates/Homepages';
import sharif from 'src/assets/images/sharif.jpg';
import our from 'src/assets/images/our.png';
import Image from 'next/image';
import { Box } from '@mui/system';

const About: FC = () => {
  return (
    <Homepage>
      <Container sx={{ py: 2 }}>
        <Paper
          sx={{
            overflow: 'hidden',
            position: 'relative',
            mb: 2,
          }}
        >
          <Box
            sx={{
              height: 450,
              position: 'relative',
              filter: 'blur(2px) grayscale(70%) brightness(0.70)',
            }}
          >
            <Image
              src={sharif}
              alt="about"
              layout="fill"
              quality={50}
              objectFit="cover"
            />
          </Box>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              top: 0,
              right: 0,
              width: '100%',
              height: '100%',
            }}
          >
            <Grid item xs={12}>
              <Typography
                variant="h1"
                align="center"
                color="white"
                sx={{ textShadow: '#ccc 1px 3px' }}
              >
                درباره ما
              </Typography>
            </Grid>
          </Grid>
        </Paper>
        <Paper sx={{ p: 1 }}>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={6}>
              <Image
                src={our}
                alt="our team"
                layout="responsive"
                width="100%"
                height="60%"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Typography align="justify">
                ما تیمی از دانشجویان مهندسی کامپیوتر دانشگاه صنعتی شریف هستیم که
                با هدف کمک در روند پروژه‌های علمی و کسب‌و‌کار‌های نو‌پا، دست به
                طراحی این سکوی تامین مالی جمعی زده‌ایم.
                <br />
                سکوی ما در سال ۱۴۰۰ طراحی و پیاده‌سازی شد و در اختیار دانشگاه
                صنعتی شریف قرار گرفت.
                <br />
                این سکو با همکاری برترین اساتید دانشگاه‌های ایران، ارزیابی دقیقی
                از پروژه‌های تعریف شده‌ انجام می‌دهد و با این اطلاعات فرایند
                سرمایه‌گذاری را آسان‌تر و هدفمندتر می‌کند.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Homepage>
  );
};

export default About;
