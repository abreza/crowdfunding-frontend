import { Grid, Paper, Tab, Tabs } from '@mui/material';
import { FC, useState } from 'react';
import Panel from 'templates/Panel';

type AdminProps = {};

const tabs: { label: string; component: FC<any> }[] = [
  {
    label: 'پروژه‌ها',
    component: () => <></>,
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

const Admin: FC<AdminProps> = () => {
  const [activeTab, setActiveTab] = useState(0);

  const CurrentComponent = tabs[activeTab].component;

  return (
    <Panel onlyAdmin>
      <Grid container sx={{ p: 2 }} justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={3} md={2}>
          <Paper sx={{ mb: 2, overflow: 'hidden' }}>
            <Tabs
              value={activeTab}
              indicatorColor="primary"
              textColor="primary"
              onChange={(event, value) => setActiveTab(value)}
              centered
              orientation="vertical">
              {tabs.map((tab) => (
                <Tab
                  key={tab.label}
                  label={tab.label}
                  sx={{ maxWidth: 'unset' }}
                />
              ))}
            </Tabs>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={8}>
          <CurrentComponent />
        </Grid>
      </Grid>
    </Panel>
  );
};

export default Admin;
