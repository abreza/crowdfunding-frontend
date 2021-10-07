import { Typography } from '@mui/material';
import { ProjectContext } from 'src/contexts/ProjectContext';
import { FC, useContext } from 'react';

type ProjectHeadProps = {};

const ProjectHead: FC<ProjectHeadProps> = () => {
  const { subject, summary } = useContext(ProjectContext);

  return (
    <>
      <Typography variant="h1" align="center" gutterBottom>
        {subject}
      </Typography>
      <Typography variant="h5" align="center" gutterBottom sx={{ mb: 4 }}>
        {summary}
      </Typography>
    </>
  );
};

export default ProjectHead;
