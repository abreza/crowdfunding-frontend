import { Grid } from "@material-ui/core";
import UseWindowDimensions from "components/hoc/UseWindowSize";
import { FC, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import ProjectCard from "components/molecules/projectCard/ProjectCard";

const ChunkedCarousel: FC<{
  items: any[];
  rtl: boolean;
  index: number;
  setting: any;
}> = ({ items, rtl = false, index = 0, setting }) => {
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

  const itemSize = Math.floor(12 / chunk) as any;

  return (
    <Carousel {...setting} index={realIndex}>
      {chunkedItems.map((cis: any[], i) => (
        <Grid
          container
          key={i}
          direction='row'
          justify='space-around'
          alignItems='center'
          spacing={3}
          style={{ padding: "10px 0" }}>
          {cis.map((item, j) => (
            <Grid item key={j} xs={chunk !== 1 && itemSize}>
              <ProjectCard item={item} />
            </Grid>
          ))}
        </Grid>
      ))}
    </Carousel>
  );
};

export default ChunkedCarousel;
