import { Stack, Typography } from '@mui/material';
import { ProjectContext } from 'src/contexts/ProjectContext';
import { FC, useContext } from 'react';
import { ProjectTimeline } from '../ProjectTimeline';
import { Box } from '@mui/system';

type ProjectDescriptionProps = {
  description: string;
};

const ProjectDescription: FC<ProjectDescriptionProps> = () => {
  const { summary, projectFirstIdea } = useContext(ProjectContext);

  return (
    <Stack spacing={2}>
      <Typography variant="body1">{summary}</Typography>
      <ProjectTimeline />
      {projectFirstIdea && (
        <Box>
          <Typography variant="h2">ایده اولیه پروژه</Typography>
          <Typography>{projectFirstIdea}</Typography>
        </Box>
      )}
    </Stack>
  );
};

export default ProjectDescription;
