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
import Timeline from 'components/molecules/createProjectPages/Timeline';
import { FC, useState } from 'react';
import Panel from 'templates/Panel';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      '& MuiSvgIcon': {
        root: {
          'body[dir=rtl] &': {
            transform: 'scaleX(1)',
          },
        },
      },
    },
    button: {
      marginRight: theme.spacing(1),
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

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

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
                  <Tab icon={tab.icon} label={tab.label} />
                ))}
              </Tabs>
              <Box p={2}>
                <TabPageComponent />
                <Box pt={2}>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}>
                    {activeStep === TabsData.length - 1
                      ? 'ثبت نهایی'
                      : 'ثبت و ادامه'}
                  </Button>
                </Box>
              </Box>
            </div>
          </Paper>
        </Container>
      </Box>
    </Panel>
  );
};

export default CreateProject;
