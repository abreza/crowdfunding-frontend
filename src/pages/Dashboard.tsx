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
import { FC, useState } from 'react';
import Panel from 'templates/Panel';

type DashboardProps = {};

const tabs = [
  {
    label: 'پروفایل',
  },
  {
    label: 'تنظیمات ایمیل',
  },
  {
    label: 'تغییر گذرواژه',
  },
];

const Dashboard: FC<DashboardProps> = () => {
  const [activeTab, setActiveTab] = useState(0);

  // const CurrentComponent = tabs[activeTab].component;
  const image = '';

  return (
    <Panel>
      <Grid container sx={{ py: 2 }}>
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
        <Grid item xs={12} sm={8}></Grid>
      </Grid>
    </Panel>
  );
};

export default Dashboard;
