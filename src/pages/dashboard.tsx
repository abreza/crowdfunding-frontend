import { Grid, Tabs, Tab, Paper } from '@mui/material';
import MyPosts from 'src/components/organisms/dashboardTabs/MyPosts';
import MyProjects from 'src/components/organisms/dashboardTabs/MyProjects';
import MySupports from 'src/components/organisms/dashboardTabs/MySupports';
import { UserCard } from 'src/components/organisms/userCard/UserCard';
import { FC, useState } from 'react';
import Panel from 'src/templates/Panel';

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

const Dashboard: FC = () => {
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
              centered
            >
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
