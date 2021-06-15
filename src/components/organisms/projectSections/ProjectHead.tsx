import { Typography, Box } from '@material-ui/core';
import { ProjectContext } from 'pages/Project';
import { FC, useContext } from 'react';

type ProjectHeadProps = {};

const ProjectHead: FC<ProjectHeadProps> = () => {
  const { name, subtitle } = useContext(ProjectContext) as any;

  return (
    <Box mb={4}>
      <Typography variant="h1" align="center" gutterBottom>
        {name}
      </Typography>
      <Typography variant="h5" align="center" gutterBottom>
        {subtitle}
      </Typography>
    </Box>
  );
};

export default ProjectHead;
