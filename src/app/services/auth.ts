import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'app/services/baseQuery';
import {
  LoginRequest,
  SignUpRequest,
  UserResponse,
  UserRo,
  VerifyTokenRequest,
} from 'types/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    verifyToken: builder.mutation<void, VerifyTokenRequest>({
      query: (tokenDto) => ({
        url: 'auth/verifyToken/',
        method: 'POST',
        body: tokenDto,
      }),
    }),
    login: builder.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/',
        method: 'POST',
        body: credentials,
      }),
    }),
    signUp: builder.mutation<UserResponse, SignUpRequest>({
      query: (userData) => ({
        url: 'auth/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    getProfile: builder.query<UserRo, void>({
      query: () => 'users/profile/',
    }),
    uploadAvatar: builder.mutation<{ path: string }, FormData>({
      query: (formData) => ({
        url: 'media/avatar',
        method: 'POST',
        body: formData,
      }),
    }),
    setProfile: builder.mutation<void, UserRo>({
      query: (user) => ({
        url: 'users/profile/',
        method: 'POST',
        body: user,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useVerifyTokenMutation,
  useUploadAvatarMutation,
  useGetProfileQuery,
  useSetProfileMutation,
} = authApi;
