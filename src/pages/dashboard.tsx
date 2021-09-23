import {
  Paper,
  Container,
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
import MyProjects from 'components/organisms/dashboardTabs/myProjects';
import { FC, useState } from 'react';
import Panel from 'templates/Panel';

type DashboardProps = {};

const tabs: { label: string; component: FC<any> }[] = [
  {
    label: 'پروژه‌های من',
    component: MyProjects,
  },
  {
    label: 'تنظیمات ایمیل',
    component: () => <></>,
  },
  {
    label: 'تغییر گذرواژه',
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
          <Card sx={{ maxWidth: 345 }}>
            {image && (
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={image}
              />
            )}

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                مرتضی ابوالقاسمی
              </Typography>
              <Typography variant="body2" color="text.secondary">
                علاقه‌مند به تحقیقات علمی و پژوهشی
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">مطالعه بیشتر</Button>
              <Button size="small">ویرایش</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Tabs
            value={activeTab}
            indicatorColor="primary"
            textColor="primary"
            onChange={(event, value) => setActiveTab(value)}
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
