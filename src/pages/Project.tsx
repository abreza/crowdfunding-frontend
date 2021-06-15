import { Container, makeStyles } from '@material-ui/core';
import { RootState } from 'configs/redux/store';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import Homepage from 'templates/Homepages';
import ProjectHead from 'components/organisms/projectSections/ProjectHead';
import ProjectStatus from 'components/organisms/projectSections/ProjectStatus';
import ProjectTabs from 'components/organisms/projectSections/projectTabs/ProjectTabs';

type ProjectProps = {
  match: any;
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3, 0),
  },
  image: {
    width: '100%',
  },
  galleryPaper: {
    overflow: 'hidden',
  },
}));

const Project: FC<ProjectProps> = ({ match }) => {
  const classes = useStyles();
  const projectId = match?.params?.id;

  const project: {
    id: string;
    name: string;
    subtitle: string;
    gallery: any[];
  } = useSelector((state: RootState) =>
    state.projects.projects.find((project) => +project.id === +projectId)
  ) as any;

  return (
    <Homepage>
      <div className={classes.root}>
        <Container maxWidth="md">
          <ProjectHead name={project.name} subtitle={project.subtitle} />
          <ProjectStatus project={project} />
          <ProjectTabs project={project} />
        </Container>
      </div>
    </Homepage>
  );
};

export default Project;
