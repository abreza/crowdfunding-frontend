import { Context, createContext } from 'react';
import { CategoryEnum, ProjectRo, ProjectState } from 'types/project';

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
  state: ProjectState.START,
  owner: {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    avatarAddress: '',
    roles: [],
    description: '',
    headline: '',
    address: '',
    website: '',
    linkedinAddress: '',
    mailConfig: {
      profile: true,
      supportedProjects: true,
      createdProjects: true,
      crowdfundingUpdates: true,
      projectReviews: true,
      magazine: true,
    },
  },
};

export const ProjectContext: Context<ProjectRo> = createContext(init);
