import {
  Typography,
  Grid,
  Tabs,
  Tab,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
} from '@mui/material';
import { ProfileAvatar } from 'components/molecules/profileAvatar/ProfileAvatar';
import MyProjects from 'components/organisms/dashboardTabs/myProjects';
import Link from 'next/link';
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
  const image = '';

  return (
    <Panel>
      <Grid container sx={{ p: 2 }} justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card sx={{ maxWidth: 345, mx: 'auto' }}>
            {image && <CardMedia component="img" height="140" image={image} />}

            <CardContent>
              <Grid
                container
                spacing={2}
                direction="row"
                alignItems="center"
                justifyContent="center">
                <Grid item xs={12} sm={4}>
                  <Grid container alignItems="center" justifyContent="center">
                    <ProfileAvatar editable={false} />
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={12}
                  sm={8}
                  container
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  spacing={1}>
                  <Grid item>
                    <Typography variant="h5" component="div">
                      مرتضی ابوالقاسمی
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography variant="body2" color="text.secondary">
                      دانشجوی دانشگاه صنعتی شریف
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                    علاقه‌مند به تحقیقات علمی و پژوهشی
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
            <CardActions>
              <Button size="small">مطالعه بیشتر</Button>
              <Link href="/account">
                <Button size="small">ویرایش</Button>
              </Link>
            </CardActions>
          </Card>
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
