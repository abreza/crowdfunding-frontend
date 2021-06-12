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
import { FC, useRef, useState } from 'react';

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
      name: '1',
      description:
        'کیفیتی فوق‌العاده و طراحی بسیار دقیق جزئیات! سرعت بالای این محصول امکان استفاده صنعتی از آن را فراهم کرده است.',
    },
    {
      image:
        'https://store.makerbot.com/media/catalog/product/cache/75b2125818f23adb3f72d90831c39808/r/e/replicator__1.png',
      name: '2',
      description:
        'کیفیتی فوق‌العاده و طراحی بسیار دقیق جزئیات! سرعت بالای این محصول امکان استفاده صنعتی از آن را فراهم کرده است.',
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
          <Button variant="contained" color="primary">
            مشاهده همه
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};

export default BestProjects;
