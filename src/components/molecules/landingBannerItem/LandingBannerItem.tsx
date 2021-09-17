import { Box, Button, Theme, Typography } from '@mui/material';
import { FC } from 'react';
import Link from 'next/link';
import { ProjectRo } from 'types/project';

const LandingBannerItem: FC<{ item: ProjectRo }> = ({ item }) => {
  return (
    <Box sx={{ height: { sm: 486, xs: 300 }, position: 'relative' }}>
      <Box
        sx={{
          background: `url("${item.imageUrls?.[0]}") 50% center / cover no-repeat`,
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
            backgroundImage:
              'linear-gradient(rgba(80,80,80,.6),rgba(80,80,80,.6))',
            content: '""',
          },
        }}></Box>
      <Box
        sx={{
          p: 1,
          pl: 3,
          position: 'absolute',
          top: { sm: '40%', xs: '30%' },
          left: { sm: '10%', xs: '5%' },
          width: { sm: '40%', xs: '90%' },
          height: '30%',
          color: 'white',
        }}>
        <Typography variant="h2">{item.subject}</Typography>
        <Typography
          variant="body1"
          sx={{
            display: '-webkit-box',
            maxWidth: '100%',
            WebkitLineClamp: '4' as any,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            mb: 3,
          }}>
          {item.summary}
        </Typography>
        <Link href={`/project/${item.id}`} passHref>
          <Button variant="outlined" color="inherit">
            مشاهده
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default LandingBannerItem;
