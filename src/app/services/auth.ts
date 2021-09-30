import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from 'app/services/baseQuery';
import {
  LoginDto,
  SignUpDto,
  AuthRo,
  Account,
  TokenDto,
  MailSettingsDto,
  ProfileDto,
  ChangePasswordDto,
  UsernameDto,
} from 'types/auth';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery,
  endpoints: (builder) => ({
    verifyToken: builder.mutation<void, TokenDto>({
      query: (tokenDto) => ({
        url: 'auth/verifyToken/',
        method: 'POST',
        body: tokenDto,
      }),
    }),
    login: builder.mutation<AuthRo, LoginDto>({
      query: (credentials) => ({
        url: 'auth/',
        method: 'POST',
        body: credentials,
      }),
    }),
    signUp: builder.mutation<AuthRo, SignUpDto>({
      query: (userData) => ({
        url: 'auth/signup',
        method: 'POST',
        body: userData,
      }),
    }),
    getAccount: builder.query<Account, void>({
      query: () => 'users/profile/',
    }),
    uploadAvatar: builder.mutation<{ path: string }, FormData>({
      query: (formData) => ({
        url: 'media/avatar',
        method: 'POST',
        body: formData,
      }),
    }),
    setProfile: builder.mutation<void, ProfileDto>({
      query: (user) => ({
        url: 'users/profile/',
        method: 'POST',
        body: user,
      }),
    }),
    setMailSettings: builder.mutation<void, MailSettingsDto>({
      query: (user) => ({
        url: 'users/profile/',
        method: 'POST',
        body: user,
      }),
    }),
    changePassword: builder.mutation<void, ChangePasswordDto>({
      query: ({ newPassword }) => ({
        url: 'users/changePassword/',
        method: 'POST',
        body: { password: newPassword }, // TODO: fix schema in back
      }),
    }),
    forgotPassword: builder.mutation<void, UsernameDto>({
      query: (usernameDto) => ({
        url: 'users/forgotPassword/',
        method: 'POST',
        body: usernameDto,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignUpMutation,
  useVerifyTokenMutation,
  useUploadAvatarMutation,
  useGetAccountQuery,
  useSetProfileMutation,
  useSetMailSettingsMutation,
  useChangePasswordMutation,
  useForgotPasswordMutation,
} = authApi;
