import { Grid } from '@material-ui/core';
import { FC } from 'react';
import Carousel from 'react-material-ui-carousel';
import ProjectCard from '../projectCard/ProjectCard';

const ChunkedCarousel: FC<{
  items: any[];
  rtl: boolean;
  index: number;
  setting: any;
}> = ({ items, rtl = false, index = 0, setting }) => {
  const chunk = 3;
  const tempItems = [];

  for (let i = 0; i < items.length; i += chunk) {
    tempItems.push(items.slice(i, i + chunk));
  }

  const chunkedItems = rtl ? tempItems.reverse() : tempItems;
  const len = chunkedItems.length;
  const realIndex = (((rtl ? -index - 1 : index) % len) + len) % len;

  const itemSize = Math.floor(12 / chunk) as any;

  return (
    <Carousel {...setting} index={realIndex}>
      {chunkedItems.map((cis: any[], i) => (
        <Grid
          container
          key={i}
          direction="row"
          justify="space-around"
          spacing={3}
          style={{ padding: '10px 0' }}>
          {cis.map((item, j) => (
            <Grid item key={j} xs={itemSize}>
              <ProjectCard item={item} />
            </Grid>
          ))}
        </Grid>
      ))}
    </Carousel>
  );
};

export default ChunkedCarousel;
