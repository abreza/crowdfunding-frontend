import { Context, createContext } from 'react';
import { CategoryEnum, ProjectRo } from 'types/project';

const init: ProjectRo = {
  id: '',
  subject: '',
  institution: '',
  category: CategoryEnum.COMPUTER,
  summary: '',
  budgets: [],
  budgetReason: '',
  projectFirstIdea: '',
  projectMainIdea: '',
  projectGoal: '',
  technicalDescriptions: [],
  projectAdditionalInfo: '',
  timeDescription: '',
  timelines: [],
  imageUrls: [],
  state: false,
  owner: {
    email: '',
    firstName: '',
    lastName: '',
    roles: [],
  },
};

export const ProjectContext: Context<ProjectRo> = createContext(init);
