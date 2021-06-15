import { Typography } from '@material-ui/core';
import { FC } from 'react';

type ProjectDescriptionProps = {
  description: string;
};

const ProjectDescription: FC<ProjectDescriptionProps> = ({ description }) => {
  return (
    <div>
      <Typography variant="body1">{description}</Typography>
    </div>
  );
};

export default ProjectDescription;
