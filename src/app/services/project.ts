import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'app/services/baseQuery';
import jMoment from 'jalali-moment';
import { ProjectDto, ProjectRo, TimelineDto } from 'types/project';

export const projectApi = createApi({
  baseQuery,
  endpoints: (builder) => ({
    getProjects: builder.mutation<ProjectRo[], string | undefined>({
      query: (name) => (name ? `project/${name}` : 'project/'),
    }),
    createProject: builder.mutation<ProjectRo, ProjectDto>({
      query: (project) => {
        const body = {
          ...project,
          timelines: project.timelines.map((item: TimelineDto) => ({
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

export const { useCreateProjectMutation, useGetProjectsMutation } = projectApi;
