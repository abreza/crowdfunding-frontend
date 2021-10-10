import { Circle as CircleIcon } from '@mui/icons-material';
import { Grid, IconButton } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/system';
import { Children, FC, useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const MuiCarousel: FC = ({ children }) => {
  const steps = Children.toArray(children);
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = steps.length;

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ position: 'relative' }}>
      <AutoPlaySwipeableViews
        interval={6000}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {steps.map((step, index: number) => (
          <div key={index} dir={theme.direction}>
            {Math.abs(activeStep - index) <= 2 ? step : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Grid
        sx={{ position: 'absolute', bottom: 10 }}
        container
        spacing={0.5}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        {[...Array(maxSteps)].map((e, i) => (
          <Grid item key={i}>
            <IconButton size="small" onClick={() => setActiveStep(i)}>
              <CircleIcon
                color={i === activeStep ? 'primary' : 'disabled'}
                fontSize="small"
              />
            </IconButton>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MuiCarousel;
