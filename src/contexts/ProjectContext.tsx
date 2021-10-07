import { Context, createContext } from 'react';
import { ProjectRo } from 'src/app/services/api.generated';

export const initProjectContext: Partial<ProjectRo> = {};

export const ProjectContext: Context<Partial<ProjectRo>> =
  createContext(initProjectContext);
