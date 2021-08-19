import { Project } from 'pages/project/[pid]';
import { Context, createContext } from 'react';

const init: Project = {
  id: '',
  name: '',
  subtitle: '',
  gallery: [],
};

export const ProjectContext: Context<Project> = createContext(init);
