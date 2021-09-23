import { Paper, Box, Tabs, Tab } from '@mui/material';
import { FC, useState } from 'react';
import ProjectBudget from './ProjectBudget';
import ProjectDescription from './ProjectDescription';
import ProjectFounds from './ProjectFounds';
import ProjectReviews from './ProjectReviews';
import ProjectTechnical from './ProjectTechnical';

type ProjectTabsProps = {};

const tabs: { label: string; component: FC<any> }[] = [
  {
    label: 'توضیحات',
    component: ProjectDescription,
  },
  {
    label: 'اطلاعات فنی',
    component: ProjectTechnical,
  },
  {
    label: 'بودجه',
    component: ProjectBudget,
  },
  {
    label: 'سرمایه‌گذاری',
    component: ProjectFounds,
  },
  {
    label: 'نظرات',
    component: ProjectReviews,
  },
];

const ProjectTabs: FC<ProjectTabsProps> = () => {
  const [activeTav, setActiveTav] = useState(0);

  const TabComponent = tabs[activeTav].component;

  return (
    <>
      <Paper sx={{ my: 3 }}>
        <Tabs
          value={activeTav}
          indicatorColor="primary"
          textColor="primary"
          onChange={(event, value) => setActiveTav(value)}
          scrollButtons="auto"
          centered>
          {tabs.map((tab) => (
            <Tab key={tab.label} label={tab.label} />
          ))}
        </Tabs>
      </Paper>
      <Paper>
        <Box sx={{ p: 2 }}>
          <TabComponent />
        </Box>
      </Paper>
    </>
  );
};

export default ProjectTabs;
