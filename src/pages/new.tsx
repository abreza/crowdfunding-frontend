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
import { FC, useEffect, useLayoutEffect, useState } from 'react';
import Panel from 'templates/Panel';
import Timeline from 'components/molecules/createProjectPages/Timeline';
import { ProjectDto, CategoryEnum } from 'types/project';
import { useCreateProjectMutation } from 'app/services/project';

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
  // {
  //   icon: <GroupIcon />,
  //   label: 'تیم',
  //   component: Team,
  // },
  {
    icon: <ViewCarouselIcon />,
    label: 'گالری',
    component: Gallery,
  },
];

export type LoadedFile = {
  file: File;
  name: string;
  url: string | undefined;
};

const CreateProject: FC<CreateProjectProps> = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

  const [project, setProject] = useState<ProjectDto>({
    subject: '',
    institution: '',
    category: CategoryEnum.COMPUTER,
    summary: '',
    budgets: [{ title: '', value: 0 }],
    budgetReason: '',
    projectFirstIdea: '',
    projectMainIdea: '',
    projectGoal: '',
    technicalDescriptions: [],
    projectAdditionalInfo: '',
    timeDescription: '',
    timelines: [],
    imageUrls: [],
    state: false,
  });

  const [loadedFiles, setLoadedFiles] = useState<LoadedFile[]>([]);

  useEffect(() => {
    const imageUrls = loadedFiles
      .filter((f) => f.url)
      .map((f) => f.url) as string[];
    setProject({ ...project, imageUrls });
  }, [loadedFiles]);

  const [createProject, { isLoading }] = useCreateProjectMutation();

  const TabPageComponent = TabsData[activeStep].component;

  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    document.documentElement.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    document.getElementById('__next')?.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [activeStep]);

  const onClickNext = () => {
    if (activeStep < TabsData.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      createProject(project);
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: any } }
  ) => {
    setProject((p: ProjectDto) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  const props = TabsData[activeStep].label === 'گالری' && {
    loadedFiles,
    setLoadedFiles,
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
                  <Tab key={tab.label} icon={tab.icon} label={tab.label} />
                ))}
              </Tabs>
            </div>
            <Box p={2}>
              {/* @ts-ignore */}
              <TabPageComponent
                handleChange={handleChange}
                project={project}
                {...props}
              />
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
                      onClick={onClickNext}
                      className={classes.nextButton}
                      type={
                        activeStep === TabsData.length - 1 ? 'submit' : 'button'
                      }>
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
