import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'app/services/baseQuery';
import { DayValue } from '@hassanmojab/react-modern-calendar-datepicker';
import jMoment from 'jalali-moment';

export enum ProjectCategory {
  COMPUTER = 'COMPUTER',
  PHYSICS = 'PHYSICS',
  CHEMISTRY = 'CHEMISTRY',
  MATHEMATICS = 'MATHEMATICS',
}

export interface BudgetItem {
  title: string;
  value: number;
}

export interface TechnicalDescription {
  title: string;
  value: string;
}

export interface TimelineItem {
  name: string;
  date: DayValue | string;
}

export interface CreateProjectRequest {
  subject: string;
  institution: string;
  category: ProjectCategory;
  summary: string;
  budgets: BudgetItem[];
  budgetReason: string;
  projectFirstIdea: string;
  projectMainIdea: string;
  projectGoal: string;
  technicalDescriptions: TechnicalDescription[];
  projectAdditionalInfo: string;
  timeDescription: string;
  timelines: TimelineItem[];
  imageUrls: string[];
  state: boolean;
}

export const api = createApi({
  baseQuery,
  endpoints: (builder) => ({
    upload: builder.mutation<void, CreateProjectRequest>({
      query: (body) => ({ url: 'project', method: 'POST', body }),
    }),
    createProject: builder.mutation<void, CreateProjectRequest>({
      query: (project) => {
        const body = {
          ...project,
          timelines: project.timelines.map((item: TimelineItem) => ({
            name: item.name,
            value: jMoment(
              // @ts-ignore
              `${item.date.year}-${item.date.month}-${item.date.day}`,
              'jYYYY-jM-jD'
            ),
          })),
        };
        return {
          url: 'project',
          method: 'POST',
          body,
        };
      },
    }),
  }),
});

export const { useCreateProjectMutation } = api;
