import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'app/services/baseQuery';
import jMoment from 'jalali-moment';
import { ProjectDto, ProjectRo, TimelineDto } from 'types/project';

export const projectApi = createApi({
  reducerPath: 'projectApi',
  baseQuery,
  tagTypes: ['Project'],
  endpoints: (builder) => ({
    deleteProject: builder.mutation<void, string>({
      query: (id) => ({
        url: 'project/' + id,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, id) => [{ type: 'Project', id }],
    }),
    getMyProjects: builder.query<{ projects: ProjectRo[] }, null>({
      query: () => 'project/myProjects',
      keepUnusedDataFor: 180,
      providesTags: (result) =>
        result
          ? [
              ...result.projects.map(({ id }) => ({
                type: 'Project' as const,
                id,
              })),
              { type: 'Project', id: 'LIST' },
            ]
          : [{ type: 'Project', id: 'LIST' }],
    }),
    getAllProjects: builder.query<{ projects: ProjectRo[] }, null>({
      query: () => 'project/all',
      providesTags: (result) =>
        result
          ? [
              ...result.projects.map(({ id }) => ({
                type: 'Project' as const,
                id,
              })),
              { type: 'Project', id: 'LIST' },
            ]
          : [{ type: 'Project', id: 'LIST' }],
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

export const {
  useCreateProjectMutation,
  useDeleteProjectMutation,
  useGetMyProjectsQuery,
  useGetAllProjectsQuery,
} = projectApi;
