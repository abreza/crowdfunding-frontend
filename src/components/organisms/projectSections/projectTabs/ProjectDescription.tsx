import { Stack, Typography } from '@mui/material';
import { ProjectContext } from 'src/contexts/ProjectContext';
import { FC, useContext } from 'react';
import { ProjectTimeline } from '../ProjectTimeline';
import { Box } from '@mui/system';

type ProjectDescriptionProps = {
  description: string;
};

const ProjectDescription: FC<ProjectDescriptionProps> = () => {
  const { summary, projectFirstIdea, timeDescription } =
    useContext(ProjectContext);

  return (
    <Stack spacing={2}>
      <Box>
        <Typography variant="h3">خلاصه</Typography>
        <Typography variant="body1">{summary}</Typography>
      </Box>
      <Box>
        <Typography variant="h3">زمان‌بندی</Typography>
        {timeDescription && <Typography>{timeDescription}</Typography>}
        <ProjectTimeline />
      </Box>
      {projectFirstIdea && (
        <Box>
          <Typography variant="h3">ایده اولیه پروژه</Typography>
          <Typography>{projectFirstIdea}</Typography>
        </Box>
      )}
    </Stack>
  );
};

export default ProjectDescription;
