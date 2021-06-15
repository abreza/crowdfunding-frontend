import { Paper, Box, Tabs, Tab } from '@material-ui/core';
import { FC, useState } from 'react';

type ProjectTabsProps = {
  project: any;
};

const ProjectTabs: FC<ProjectTabsProps> = ({ project }) => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <Box my={3}>
        <Paper>
          <Tabs
            value={tabIndex}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, value) => setTabIndex(value)}
            centered>
            <Tab label="توضیحات" />
            <Tab label="اطلاعات فنی" />
            <Tab label="هزینه‌ها" />
            <Tab label="سرمایه‌گذاری‌ها" />
            <Tab label="نظرات" />
          </Tabs>
        </Paper>
      </Box>
      <Paper></Paper>
    </>
  );
};

export default ProjectTabs;
