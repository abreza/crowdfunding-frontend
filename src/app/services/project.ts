import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'app/services/baseQuery';

export enum ProjectCategory {
  COMPUTER = 'COMPUTER',
  PHYSICS = 'PHYSICS',
  CHEMISTRY = 'CHEMISTRY',
  MATHEMATICS = 'MATHEMATICS',
}

export interface Budget {
  title: string;
  value: number;
}

export interface TechnicalDescription {
  title: string;
  value: string;
}

export interface Timeline {
  name: string;
  date: Date;
}

export interface CreateProjectRequest {
  subject: string;
  institution: string;
  category: ProjectCategory;
  summary: string;
  budgets: Budget[];
  budgetReason: string;
  projectFirstIdea: string;
  projectMainIdea: string;
  projectGoal: string;
  technicalDescriptions: TechnicalDescription[];
  projectAdditionalInfo: string;
  timeDescription: string;
  timelines: Timeline[];
  imageUrls: string[];
  state: boolean;
}

export const api = createApi({
  baseQuery,
  endpoints: (builder) => ({
    createProject: builder.mutation<void, CreateProjectRequest>({
      query: (project) => ({
        url: 'project',
        method: 'POST',
        body: project,
      }),
    }),
  }),
});

export const { useCreateProjectMutation } = api;
