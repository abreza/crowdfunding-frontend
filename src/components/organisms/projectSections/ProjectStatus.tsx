import {
  Typography,
  Grid,
  Paper,
  Button,
  IconButton,
  LinearProgress,
  Skeleton,
} from '@mui/material';
import {
  EvStation as EvStationIcon,
  AccessTime as AccessTimeIcon,
  Link as LinkIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  Email as EmailIcon,
  Telegram as TelegramIcon,
} from '@mui/icons-material';
import { ProjectContext } from 'src/contexts/ProjectContext';
import { FC, useContext } from 'react';
import { Box } from '@mui/system';

type ProjectStatusProps = {};

const ProjectStatus: FC<ProjectStatusProps> = () => {
  const { budgets } = useContext(ProjectContext);

  const totalBudget = budgets?.reduce(
    (partial_sum, budget) => partial_sum + budget.value,
    0
  );

  return (
    <Paper sx={{ height: totalBudget ? 'unset' : 230 }}>
      {totalBudget ? (
        <Box sx={{ p: 2 }}>
          <Typography variant="h3">۲۳ میلیون تومان</Typography>
          <Typography variant="h5" color="textSecondary">
            {`از ${totalBudget} تومان تامین شده است.`}
          </Typography>
          <LinearProgress
            sx={{ my: 2 }}
            variant="determinate"
            value={50}
            color="secondary"
          />
          <Grid container alignItems="center" direction="row" spacing={2}>
            <Grid item>
              <EvStationIcon />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">۶ سرمایه‌گذار</Typography>
            </Grid>
          </Grid>
          <Grid container alignItems="center" direction="row" spacing={2}>
            <Grid item>
              <AccessTimeIcon />
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" gutterBottom>
                ۲۰ روز تا پایان سرمایه‌گذاری
              </Typography>
            </Grid>
          </Grid>
          <Button fullWidth variant="contained" color="primary" sx={{ my: 2 }}>
            سرمایه‌گذاری
          </Button>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            direction="row">
            <Grid item>
              <IconButton size="large">
                <LinkIcon sx={{ transform: 'scaleX(1)' }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton size="large">
                <FacebookIcon sx={{ transform: 'scaleX(1)' }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton size="large">
                <TwitterIcon sx={{ transform: 'scaleX(1)' }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton size="large">
                <EmailIcon sx={{ transform: 'scaleX(1)' }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton size="large">
                <TelegramIcon sx={{ transform: 'scaleX(1)' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Box>
      ) : (
        <Skeleton sx={{ height: '100%', transform: 'unset' }} />
      )}
    </Paper>
  );
};

export default ProjectStatus;
