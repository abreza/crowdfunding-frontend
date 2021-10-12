import { api as generatedApi } from './api.generated';

export const api = generatedApi
  .injectEndpoints({
    endpoints: (build) => ({}),
  })
  .enhanceEndpoints({
    addTagTypes: ['Project'],
    endpoints: {
      projectControllerDelete: {
        invalidatesTags: (result, error, { projectId }) => [
          { type: 'Project', id: projectId },
        ],
      },
      projectControllerUpdate: {
        invalidatesTags: (result, error, { projectId }) => [
          { type: 'Project', id: projectId },
        ],
      },
      projectControllerFindMyProjects: {
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
      },
      projectControllerFindForAdmin: {
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
      },
    },
  });

export const {
  useProjectControllerDeleteMutation,
  useProjectControllerFindMyProjectsQuery,
  useProjectControllerFindForAdminQuery,
} = api;
