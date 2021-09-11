import { Typography } from '@material-ui/core';
import { ProjectContext } from 'context/ProjectContext';
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
