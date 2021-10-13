import { Paper, Box, Container, Button, Tabs, Tab, Grid } from '@mui/material';
import {
  Assignment as AssignmentIcon,
  AccountBalanceWallet as AccountBalanceWalletIcon,
  DeviceHub as DeviceHubIcon,
  Timeline as TimelineIcon,
  ViewCarousel as ViewCarouselIcon,
} from '@mui/icons-material';
import BasicDetails from 'src/components/organisms/createProjectPages/BasicDetails';
import Budget from 'src/components/organisms/createProjectPages/Budget';
import Gallery from 'src/components/organisms/createProjectPages/Gallery';
import Research from 'src/components/organisms/createProjectPages/Research';
import { FC, useEffect, useLayoutEffect, useState } from 'react';
import Panel from 'src/templates/Panel';
import Timeline from 'src/components/organisms/createProjectPages/Timeline';
import LoadingButton from '@mui/lab/LoadingButton';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import {
  ProjectCreateDto,
  TimelineDto,
  useProjectControllerCreateMutation,
} from 'src/app/services/api.generated';
import jMoment from 'jalali-moment';
import { createProjectInit } from 'src/constants/initData';
import { ExtendedFile } from 'src/components/molecules/dropzone/MyDropzone';

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
    icon: <ViewCarouselIcon />,
    label: 'گالری',
    component: Gallery,
  },
];

const CreateProject: FC<{ initProject?: ProjectCreateDto }> = ({
  initProject = createProjectInit,
}) => {
  const { push } = useRouter();
  const [activeStep, setActiveStep] = useState(0);

  const [project, setProject] = useState<ProjectCreateDto>(initProject);

  const [files, setFiles] = useState<ExtendedFile[]>([]);
  const [needUpdateUrls, setNeedUpdateUrls] = useState(false);

  useEffect(() => {
    if (needUpdateUrls) {
      const imageUrls = files
        .filter((f) => f.url)
        .map((f) => f.url) as string[];
      setProject((prs) => ({ ...prs, imageUrls }));
    }
    setNeedUpdateUrls(false);
  }, [needUpdateUrls]);

  const addFile = (newFile: ExtendedFile) =>
    setFiles((fls) => [...fls, newFile]);

  const removeFile = (id: number) => {
    setFiles((fls) => fls.filter((file) => file.id !== id));
    setNeedUpdateUrls(true);
  };
  const setUrl = ({ id, url }: { id: number; url: string }) => {
    setFiles((fls) =>
      fls.map((file) => (file.id === id ? { ...file, url } : file))
    );
    setNeedUpdateUrls(true);
  };
  const setProgress = ({ id, progress }: { id: number; progress: number }) =>
    setFiles((fls) =>
      fls.map((file) => (file.id === id ? { ...file, progress } : file))
    );

  const [createProject, { isLoading }] = useProjectControllerCreateMutation();

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

  const onClickNext = async () => {
    if (activeStep < TabsData.length - 1) {
      setActiveStep(activeStep + 1);
    } else {
      try {
        const fixedTimelineProject = {
          ...project,
          timelines: project.timelines.map((item: TimelineDto) => ({
            name: item.name,
            date: jMoment(
              // @ts-ignore
              `${item.date.year}-${item.date.month}-${item.date.day}`,
              'jYYYY-jM-jD'
            ).toISOString(),
          })),
        };
        const res = await createProject({
          projectCreateDto: fixedTimelineProject,
        }).unwrap();
        toast.success('پروژه شما با موفقیت ثبت شد!');
        push('/project/' + res.id);
      } catch (err: any) {
        toast.error(err?.data?.message?.toString() || err?.error?.toString());
      }
    }
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | { target: { name: string; value: any } }
  ) => {
    setProject((p) => ({
      ...p,
      [e.target.name]: e.target.value,
    }));
  };

  const props =
    TabsData[activeStep].label === 'گالری'
      ? {
          files,
          addFile,
          setUrl,
          removeFile,
          setProgress,
        }
      : {};

  return (
    <Panel>
      <Container maxWidth="md" sx={{ py: 2 }}>
        <Paper>
          <Tabs
            value={activeStep}
            indicatorColor="secondary"
            textColor="secondary"
            onChange={(e, value) => setActiveStep(value)}
            variant="scrollable"
            allowScrollButtonsMobile
            scrollButtons="auto"
          >
            {TabsData.map((tab) => (
              <Tab key={tab.label} icon={tab.icon} label={tab.label} />
            ))}
          </Tabs>
          <Box sx={{ p: 2 }}>
            {/* @ts-ignore */}
            <TabPageComponent
              handleChange={handleChange}
              project={project}
              {...props}
            />
            <Grid
              container
              justifyContent="space-between"
              direction="row"
              sx={{ pt: 2 }}
            >
              <Grid item>
                {activeStep !== 0 && (
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => setActiveStep(activeStep - 1)}
                  >
                    قبلی
                  </Button>
                )}
              </Grid>
              <Grid item>
                <LoadingButton
                  variant="contained"
                  color="primary"
                  onClick={onClickNext}
                  loading={isLoading}
                  type={
                    activeStep === TabsData.length - 1 ? 'submit' : 'button'
                  }
                >
                  {activeStep === TabsData.length - 1
                    ? 'ثبت نهایی'
                    : 'ثبت و ادامه'}
                </LoadingButton>
              </Grid>
            </Grid>
          </Box>
        </Paper>
      </Container>
    </Panel>
  );
};

export default CreateProject;
