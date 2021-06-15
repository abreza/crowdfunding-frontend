import { Typography, Box } from '@material-ui/core';
import { FC } from 'react';

type ProjectHeadProps = {
  name: string;
  subtitle: string;
};

const ProjectHead: FC<ProjectHeadProps> = ({ name, subtitle }) => {
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
