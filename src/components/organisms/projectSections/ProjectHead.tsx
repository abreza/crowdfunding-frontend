import { Grid, Paper, Skeleton, Typography } from '@mui/material';
import { ProjectContext } from 'src/contexts/ProjectContext';
import { FC, useContext } from 'react';
import { ProfileAvatar } from 'src/components/molecules/profileAvatar/ProfileAvatar';
import { baseUrl } from 'src/config';
import { Box } from '@mui/system';

const ProjectHead: FC = () => {
  const { subject, owner } = useContext(ProjectContext);

  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h1" align="left" gutterBottom>
        {subject ? subject : <Skeleton width="30%" />}
      </Typography>

      {owner && (
        <Paper sx={{ maxWidth: 360, p: 0.5 }}>
          <Grid
            container
            spacing={0.5}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={3}>
              <Grid container alignItems="center" justifyContent="center">
                <ProfileAvatar
                  editable={false}
                  src={owner.avatarAddress && baseUrl + owner.avatarAddress}
                />
              </Grid>
            </Grid>
            <Grid
              item
              xs={9}
              container
              direction="column"
              justifyContent="center"
              spacing={0.5}
              wrap="nowrap"
            >
              <Grid item xs={12}>
                <Typography variant="h6" component="div">
                  {owner.firstName + ' ' + owner.lastName}
                </Typography>
              </Grid>
              <Grid item xs={12} zeroMinWidth>
                <Typography variant="body2" color="text.secondary" noWrap>
                  {owner.headline}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Box>
  );
};

export default ProjectHead;
