import {
  Paper,
  Box,
  Container,
  makeStyles,
  createStyles,
  Button,
  Theme,
  Tabs,
  Tab,
  Grid,
} from '@material-ui/core';
import {
  Assignment as AssignmentIcon,
  AccountBalanceWallet as AccountBalanceWalletIcon,
  DeviceHub as DeviceHubIcon,
  Timeline as TimelineIcon,
  Group as GroupIcon,
  ViewCarousel as ViewCarouselIcon,
} from '@material-ui/icons';
import BasicDetails from 'components/molecules/createProjectPages/BasicDetails';
import Budget from 'components/molecules/createProjectPages/Budget';
import Gallery from 'components/molecules/createProjectPages/Gallery';
import Research from 'components/molecules/createProjectPages/Research';
import Team from 'components/molecules/createProjectPages/Team';
import { FC, useEffect, useState } from 'react';
import Panel from 'templates/Panel';
import Timeline from 'components/molecules/createProjectPages/Timeline';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      'body[dir=rtl] & .MuiSvgIcon-root': { transform: 'scaleX(1)' },
    },
    nextButton: {
      marginRight: theme.spacing(9),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  })
);

type CreateProjectProps = {};

const TabsData = [
  {
    icon: <AssignmentIcon />,
    label: 'اطلاعات پایه',
    component: BasicDetails,
  },
  {
    icon: <AccountBalanceWalletIcon />,
    label: 'اهداف مالی',
    component: Budget,
  },
  {
    icon: <DeviceHubIcon />,
    label: 'پژوهش',
    component: Research,
  },
  {
    icon: <TimelineIcon />,
    label: 'زمان‌بندی',
    component: Timeline,
  },
  {
    icon: <GroupIcon />,
    label: 'تیم',
    component: Team,
  },
  {
    icon: <ViewCarouselIcon />,
    label: 'گالری',
    component: Gallery,
  },
];

const CreateProject: FC<CreateProjectProps> = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const TabPageComponent = TabsData[activeStep].component;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [activeStep]);

  return (
    <Panel>
      <Box py={2}>
        <Container maxWidth="md">
          <Paper>
            <div className={classes.root}>
              <Tabs
                value={activeStep}
                indicatorColor="secondary"
                textColor="secondary"
                onChange={(e, value) => setActiveStep(value)}
                variant="scrollable"
                scrollButtons="auto">
                {TabsData.map((tab) => (
                  <Tab key={tab.label} icon={tab.icon} label={tab.label} />
                ))}
              </Tabs>
            </div>
            <Box p={2}>
              <TabPageComponent />
              <Box pt={2}>
                <Grid container justifyContent="space-between" direction="row">
                  <Grid item>
                    {activeStep !== 0 && (
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={() => setActiveStep(activeStep - 1)}
                        className={classes.nextButton}>
                        قبلی
                      </Button>
                    )}
                  </Grid>
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => setActiveStep(activeStep + 1)}
                      className={classes.nextButton}>
                      {activeStep === TabsData.length - 1
                        ? 'ثبت نهایی'
                        : 'ثبت و ادامه'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Paper>
        </Container>
      </Box>
    </Panel>
  );
};

export default CreateProject;
