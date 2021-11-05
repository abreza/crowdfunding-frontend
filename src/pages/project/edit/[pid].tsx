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

export async function getServerSideProps({
  params: { pid },
}: {
  params: { pid: string };
}) {
  try {
    const res = await axios(baseUrl + 'project/' + pid);
    const project = res.data;
    return {
      props: { project },
    };
  } catch (err) {
    // console.log(err);
  }
  return {
    props: {},
  };
}
export default EditProject;
