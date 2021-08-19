import { Typography } from '@material-ui/core';
import { ProjectContext } from 'contex/ProjectContext';
import { FC, useContext } from 'react';

type ProjectDescriptionProps = {
  description: string;
};

const ProjectDescription: FC<ProjectDescriptionProps> = () => {
  const { description } = useContext(ProjectContext) as any;

  return (
    <div>
      <Typography variant="body1">{description}</Typography>
    </div>
  );
};

export default ProjectDescription;
