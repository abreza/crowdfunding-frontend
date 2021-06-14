import { Button, makeStyles, Theme, Typography } from '@material-ui/core';
import { FC } from 'react';
import { Link } from 'react-router-dom';

const useBannerItemStyles = makeStyles<Theme, any>((theme: Theme) => ({
  bannerItem: {
    height: 486,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      height: 300,
    },
  },
  bannerItemBackground: ({ img }) => ({
    background: `url("${img}") 50% center / cover no-repeat`,
    height: '100%',
    position: 'relative',
    top: 0,
    width: '100%',
    transition: 'opacity .2s ease-in-out',
    '&::before': {
      position: 'absolute',
      top: 0,
      width: '100%',
      height: '100%',
      backgroundImage: 'linear-gradient(rgba(0,0,0,.6),rgba(0,0,0,.6))',
      content: '""',
    },
  }),
  bannerItemContent: {
    padding: theme.spacing(1, 1, 1, 3),
    position: 'absolute',
    top: '40%',
    left: '10%',
    width: '40%',
    height: '30%',
    color: 'white',
    [theme.breakpoints.down('sm')]: {
      top: '30%',
      left: '5%',
      width: '90%',
    },
  },
  description: {
    display: '-webkit-box',
    maxWidth: '100%',
    WebkitLineClamp: '4' as any,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginBottom: theme.spacing(3),
  },
}));

const LandingBannerItem: FC<any> = ({ item }) => {
  const classes = useBannerItemStyles({ img: item.image });

  return (
    <div className={classes.bannerItem}>
      <div className={classes.bannerItemBackground}></div>
      <div className={classes.bannerItemContent}>
        <Typography variant="h2">{item.name}</Typography>
        <Typography variant="body1" className={classes.description}>
          {item.description}
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          component={Link}
          to={`/project/${item.id}`}>
          مشاهده
        </Button>
      </div>
    </div>
  );
};

export default LandingBannerItem;
