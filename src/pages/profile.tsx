import { Paper, Container, Typography, Grid, Tabs, Tab } from '@mui/material';
import { FC } from 'react';
import Panel from 'templates/Panel';

type ProfileProps = {};

const Profile: FC<ProfileProps> = () => {
  return (
    <Panel>
      <Container maxWidth="md" sx={{ py: 2 }}>
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={12} sm={3}>
            <Paper>
              <Tabs orientation="vertical" variant="scrollable" value={0}>
                <Tab
                  label="پروفایل"
                  sx={{
                    maxWidth: '100%',
                    '&:.Mui-selected': {
                      color: '#1890ff',
                    },
                  }}
                />
                <Tab
                  label="تنظیمات ایمیل"
                  sx={{
                    maxWidth: '100%',
                    '&:.Mui-selected': {
                      color: '#1890ff',
                    },
                  }}
                />
                <Tab
                  label="تغییر گذرواژه"
                  sx={{
                    maxWidth: '100%',
                    '&:.Mui-selected': {
                      color: '#1890ff',
                    },
                  }}
                />
              </Tabs>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={9}>
            <Paper>
              <Typography variant="h2" align="center">
                پروفایل
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Panel>
  );
};

export default Profile;
