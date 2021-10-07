import { Context, createContext } from 'react';
import { ProjectRo } from 'src/app/services/api.generated';

export const initProjectContext: ProjectRo = {
  id: '',
  subject: '',
  institution: '',
  category: 'COMPUTER',
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
  state: 'START',
  owner: {
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    avatarAddress: '',
    roleNames: [],
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
    blog: '',
  },
  rewards: [],
  reviews: [],
};

export const ProjectContext: Context<ProjectRo> =
  createContext(initProjectContext);
