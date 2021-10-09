import { Grid, GridSize } from '@mui/material';
import UseWindowDimensions from 'src/components/hoc/UseWindowSize';
import { FC, useEffect, useState } from 'react';
import ProjectCard from 'src/components/molecules/projectCard/ProjectCard';
import SwipeableViews from 'react-swipeable-views';
import { Box } from '@mui/system';
import { ProjectRo } from 'src/app/services/api.generated';

const ChunkedCarousel: FC<{
  items: ProjectRo[];
  rtl: boolean;
  index: number;
}> = ({ items, rtl = false, index = 0 }) => {
  const windowDimensions = UseWindowDimensions(600);

  const [chunk, setChunk] = useState(3);

  useEffect(() => {
    setChunk(
      windowDimensions.width < 600
        ? 1
        : windowDimensions.width < 960
        ? 2
        : windowDimensions.width < 1280
        ? 3
        : 4
    );
  }, [windowDimensions]);
  const tempItems = [];

  for (let i = 0; i < items.length; i += chunk) {
    tempItems.push(items.slice(i, i + chunk));
  }

  const chunkedItems = rtl ? tempItems.reverse() : tempItems;
  const len = chunkedItems.length;
  const realIndex = (((rtl ? -index - 1 : index) % len) + len) % len;

  const itemSize = Math.floor(12 / chunk) as GridSize;

  return (
    <SwipeableViews index={realIndex} enableMouseEvents>
      {chunkedItems.map((cis, i) => (
        <Box key={i} dir="rtl" sx={{ overflow: 'hidden' }}>
          <Grid
            container
            direction="row"
            justifyContent="space-around"
            alignItems="center"
            spacing={3}
            sx={{ p: 2 }}
          >
            {cis.map((item, j) => (
              <Grid item key={j} xs={chunk !== 1 && itemSize}>
                <ProjectCard item={item} />
              </Grid>
            ))}
          </Grid>
        </Box>
      ))}
    </SwipeableViews>
  );
};

export default ChunkedCarousel;
