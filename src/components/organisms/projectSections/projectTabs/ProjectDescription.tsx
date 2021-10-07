import { Typography } from '@mui/material';
import { ProjectContext } from 'src/contexts/ProjectContext';
import { FC, useContext } from 'react';

type ProjectDescriptionProps = {
  description: string;
};

const ProjectDescription: FC<ProjectDescriptionProps> = () => {
  const { summary } = useContext(ProjectContext);

  return (
    <div>
      <Typography variant="body1">{summary}</Typography>
    </div>
  );
};

export default ProjectDescription;
