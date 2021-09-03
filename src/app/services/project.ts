import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'app/services/baseQuery';
import jMoment from 'jalali-moment';
import { ProjectDto, TimelinetDto } from 'types/project';

export const api = createApi({
  baseQuery,
  endpoints: (builder) => ({
    getProjects: builder.mutation<void, ProjectDto>({
      query: (name) => (name ? `project/${name}` : 'project/'),
    }),
    createProject: builder.mutation<void, ProjectDto>({
      query: (project) => {
        const body = {
          ...project,
          timelines: project.timelines.map((item: TimelinetDto) => ({
            name: item.name,
            date: jMoment(
              // @ts-ignore
              `${item.date.year}-${item.date.month}-${item.date.day}`,
              'jYYYY-jM-jD'
            ).toISOString(),
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

export const { useCreateProjectMutation, useGetProjectsMutation } = api;
