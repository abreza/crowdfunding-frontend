import { Paper, Container, Typography, Grid, Tabs, Tab } from '@mui/material';
import { ChangePassword } from 'components/organisms/accountTabs/ChangePassword';
import { MailSettings } from 'components/organisms/accountTabs/MailSettings';
import { Profile } from 'components/organisms/accountTabs/Profile';
import { FC, useState } from 'react';
import Panel from 'templates/Panel';

type AccountProps = {};

const tabs = [
  {
    label: 'پروفایل',
    component: Profile,
  },
  {
    label: 'تنظیمات ایمیل',
    component: MailSettings,
  },
  {
    label: 'تغییر گذرواژه',
    component: ChangePassword,
  },
];

const Account: FC<AccountProps> = () => {
  const [activeTab, setActiveTab] = useState(0);

  const CurrentComponent = tabs[activeTab].component;

  return (
    <Panel>
      <Container maxWidth="md" sx={{ py: 2 }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={3}>
            <Paper sx={{ overflow: 'hidden' }}>
              <Tabs
                orientation="vertical"
                variant="scrollable"
                value={activeTab}>
                {tabs.map((tab, index) => (
                  <Tab
                    key={tab.label}
                    label={tab.label}
                    sx={{
                      maxWidth: '100%',
                      '&:.Mui-selected': {
                        color: '#1890ff',
                      },
                    }}
                    onClick={() => setActiveTab(index)}
                  />
                ))}
              </Tabs>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h2" align="center">
                {tabs[activeTab].label}
              </Typography>
              <CurrentComponent />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Panel>
  );
};

export default Account;
