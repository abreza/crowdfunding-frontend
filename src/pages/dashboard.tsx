import { Grid, Tabs, Tab } from '@mui/material';
import MyProjects from 'components/organisms/dashboardTabs/myProjects';
import { UserCard } from 'components/organisms/userCard/UserCard';
import { FC, useState } from 'react';
import Panel from 'templates/Panel';

type DashboardProps = {};

const tabs: { label: string; component: FC<any> }[] = [
  {
    label: 'پروژه‌ها',
    component: MyProjects,
  },
  {
    label: 'حمایت‌ها',
    component: () => <></>,
  },
  {
    label: 'پست‌های بلاگ',
    component: () => <></>,
  },
];

const Dashboard: FC<DashboardProps> = () => {
  const [activeTab, setActiveTab] = useState(0);

  const CurrentComponent = tabs[activeTab].component;

  return (
    <Panel>
      <Grid container sx={{ p: 2 }} justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={4}>
          <UserCard />
        </Grid>
        <Grid item xs={12} sm={8}>
          <Tabs
            value={activeTab}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, value) => setActiveTab(value)}
            variant="scrollable"
            allowScrollButtonsMobile
            scrollButtons="auto"
            centered>
            {tabs.map((tab) => (
              <Tab key={tab.label} label={tab.label} />
            ))}
          </Tabs>
          <CurrentComponent />
        </Grid>
      </Grid>
    </Panel>
  );
};

export default Dashboard;
