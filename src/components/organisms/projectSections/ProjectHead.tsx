import { Skeleton, Typography } from '@mui/material';
import { ProjectContext } from 'src/contexts/ProjectContext';
import { FC, useContext } from 'react';

type ProjectHeadProps = {};

const ProjectHead: FC<ProjectHeadProps> = () => {
  const { subject, owner } = useContext(ProjectContext);

  return (
    <>
      <Typography variant="h1" align="left" gutterBottom>
        {subject ? subject : <Skeleton width="30%" />}
      </Typography>
      <Typography variant="h5" align="left" gutterBottom sx={{ mb: 4 }}>
        {owner ? (
          `توسط ${owner?.firstName} ${owner?.lastName}`
        ) : (
          <Skeleton width="40%" />
        )}
      </Typography>
    </>
  );
};

export default ProjectHead;
