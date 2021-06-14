import {
  makeStyles,
  Container,
  Typography,
  Grid,
  Button,
  IconButton,
} from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons';
import ChunkedCarousel from 'components/molecules/chunkedCarousel/ChunkedCarousel';
import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  unaffected: {
    flip: false,
  },
}));

const BestProjects: FC<{}> = () => {
  const classes = useStyles();

  const items = [
    {
      image:
        'https://store.makerbot.com/media/catalog/product/cache/75b2125818f23adb3f72d90831c39808/r/e/replicator__1.png',
      name: 'پرینتر ۳ بعدی',
      description:
        'کیفیتی فوق‌العاده و طراحی بسیار دقیق جزئیات! سرعت بالای این محصول امکان استفاده صنعتی از آن را فراهم کرده است.',
    },
    {
      image:
        'https://yt3.ggpht.com/ytc/AAUvwnhUoqGzslL9NApxwxZ182t9zksg-G69pMlXHhYLAw=s900-c-k-c0x00ffffff-no-rj',
      name: 'رویداد WSS',
      description: `چهارمین دوره از سمینار زمستانه مباحث پیشرفته در علوم و مهندسی کامپیوتر (WSS) امسال در تاریخ ۵ و ۶ دی‌ماه مطابق با روال همیشه در دانشگاه صنعتی شریف برگزار می‌گردد.
        در این سمینار با ارائه‌ی سخنرانی‌های علمی-تخصصی توسط مدعوینی خبره از سراسر دنیا، آخرين دستاوردهای علمی در زمينه‌های مختلف علوم و مهندسی کامپیوتر در قالب یک سمینار دو روزه ارائه می‌گردد. اطلاعات تکمیلی من جمله برنامه‌ی زمانی رویداد و جزئیات سمینارها را می‌توانید از سایت سمینار زمستانه کسب کنید. هم‌چنین اطلاع‌رسانی رویداد از طریق کانال تلگرامی رویداد خواهد بود.
        از كليه دانشجویان، پژوهشگران و متخصصان دانشگاه‌ها و مؤسسات تحقيقاتی در رشته‌های مرتبط با محورهای سمینار، دعوت می‌شود تا از تاریخ ۱۷ آذرماه تا ۱ دی‌ماه از طریق صفحه‌ی سمینار نسبت به ثبت‌نام اقدام نمایند. با توجه به ظرفیت محدود سمینار، اولیت با افرادی است که زود‌تر ثبت‌نام کنند.`,
    },
    {
      image:
        'https://store.makerbot.com/media/catalog/product/cache/75b2125818f23adb3f72d90831c39808/r/e/replicator__1.png',
      name: '3',
      description:
        'کیفیتی فوق‌العاده و طراحی بسیار دقیق جزئیات! سرعت بالای این محصول امکان استفاده صنعتی از آن را فراهم کرده است.',
    },
    {
      image:
        'https://store.makerbot.com/media/catalog/product/cache/75b2125818f23adb3f72d90831c39808/r/e/replicator__1.png',
      name: '4',
      description:
        'کیفیتی فوق‌العاده و طراحی بسیار دقیق جزئیات! سرعت بالای این محصول امکان استفاده صنعتی از آن را فراهم کرده است.',
    },
    {
      image:
        'https://store.makerbot.com/media/catalog/product/cache/75b2125818f23adb3f72d90831c39808/r/e/replicator__1.png',
      name: '5',
      description:
        'کیفیتی فوق‌العاده و طراحی بسیار دقیق جزئیات! سرعت بالای این محصول امکان استفاده صنعتی از آن را فراهم کرده است.',
    },
    {
      image:
        'https://store.makerbot.com/media/catalog/product/cache/75b2125818f23adb3f72d90831c39808/r/e/replicator__1.png',
      name: '5',
      description:
        'کیفیتی فوق‌العاده و طراحی بسیار دقیق جزئیات! سرعت بالای این محصول امکان استفاده صنعتی از آن را فراهم کرده است.',
    },
    {
      image:
        'https://store.makerbot.com/media/catalog/product/cache/75b2125818f23adb3f72d90831c39808/r/e/replicator__1.png',
      name: '5',
      description:
        'کیفیتی فوق‌العاده و طراحی بسیار دقیق جزئیات! سرعت بالای این محصول امکان استفاده صنعتی از آن را فراهم کرده است.',
    },
    {
      image:
        'https://store.makerbot.com/media/catalog/product/cache/75b2125818f23adb3f72d90831c39808/r/e/replicator__1.png',
      name: '5',
      description:
        'کیفیتی فوق‌العاده و طراحی بسیار دقیق جزئیات! سرعت بالای این محصول امکان استفاده صنعتی از آن را فراهم کرده است.',
    },
  ];

  const [index, setIndex] = useState(0);

  const goNext = () => {
    setIndex(index + 1);
  };

  const goBack = () => {
    setIndex(index - 1);
  };

  return (
    <Container className={classes.container}>
      <Typography variant="h3" component="h3" gutterBottom>
        برترین پروژه‌ها
      </Typography>

      <Grid container justify="flex-end">
        <Grid item>
          <IconButton onClick={goBack}>
            <ArrowBack />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton onClick={goNext}>
            <ArrowForward />
          </IconButton>
        </Grid>
      </Grid>
      <ChunkedCarousel
        items={items}
        rtl
        setting={{
          fullHeightHover: true,
          autoPlay: false,
          indicators: false,
          navButtonsAlwaysInvisible: true,
          animation: 'slide',
        }}
        index={index}
      />
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            component={Link}
            to="/projects">
            مشاهده همه
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BestProjects;
