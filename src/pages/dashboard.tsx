import { Grid, Tabs, Tab, Paper } from '@mui/material';
import MyPosts from 'components/organisms/dashboardTabs/myPosts';
import MyProjects from 'components/organisms/dashboardTabs/myProjects';
import MySupports from 'components/organisms/dashboardTabs/mySupports';
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
    component: MySupports,
  },
  {
    label: 'پست‌های بلاگ',
    component: MyPosts,
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
          <Paper sx={{ mb: 2, overflow: 'hidden' }}>
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
          </Paper>
          <CurrentComponent />
        </Grid>
      </Grid>
    </Panel>
  );
};

export default Dashboard;
