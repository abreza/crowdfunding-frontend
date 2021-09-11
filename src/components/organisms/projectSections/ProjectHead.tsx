import { Typography, Box } from '@material-ui/core';
import { ProjectContext } from 'context/ProjectContext';
import { FC, useContext } from 'react';

type ProjectHeadProps = {};

const ProjectHead: FC<ProjectHeadProps> = () => {
  const { subject, summary } = useContext(ProjectContext);

  return (
    <Box mb={4}>
      <Typography variant="h1" align="center" gutterBottom>
        {subject}
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        {summary}
      </Typography>
    </Box>
  );
};

export default ProjectHead;
