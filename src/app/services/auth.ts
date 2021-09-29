import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'app/services/baseQuery';
import { MailSettings } from 'components/organisms/accountTabs/MailSettings';
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
    setMailSettings: builder.mutation<void, MailSettings>({
      query: (user) => ({
        url: 'users/profile/',
        method: 'POST',
        body: user,
      }),
    }),
    changePassword: builder.mutation<
      void,
      { currentPassword: string; newPassword: string }
    >({
      query: (passwords) => ({
        url: 'users/changePassword/',
        method: 'POST',
        body: passwords,
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
  useSetMailSettingsMutation,
  useChangePasswordMutation,
} = authApi;
