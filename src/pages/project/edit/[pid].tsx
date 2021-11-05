import axios from 'axios';
import { FC } from 'react';
import { ProjectRo } from 'src/app/services/api.generated';
import { baseUrl } from 'src/config';
import { emptyProject } from 'src/constants/initData';
import CreateProject from '../new';

const EditProject: FC<{ project?: ProjectRo }> = ({
  project = emptyProject,
}) => {
  return <CreateProject initProject={project} />;
};

export async function getServerSideProps() {
  let projects: ProjectRo[] = [];
  try {
    const res = await axios.get<{ projects: ProjectRo[] }>(
      baseUrl + 'project/'
    );
    projects = res.data.projects;
  } catch (err) {
    // console.log(err);
  }

  const paths = projects.map((project: ProjectRo) => ({
    params: { pid: project.id },
  }));

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({
  params: { pid },
}: {
  params: { pid: string };
}) {
  try {
    const res = await axios(baseUrl + 'project/' + pid);
    const project = res.data;
    return {
      props: { project },
      revalidate: 30,
    };
  } catch (err) {
    // console.log(err);
  }
  return {
    props: {},
    revalidate: 30,
  };
}
export default EditProject;
