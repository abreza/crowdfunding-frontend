import { FC } from 'react';
import { Slide, useScrollTrigger } from '@mui/material';

const HideOnScroll: FC<any> = ({ children, disable = false }) => {
  const trigger = useScrollTrigger({});
  if (disable) return <>{children}</>;

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
