import { createSlice, AnyAction } from '@reduxjs/toolkit';
import type { UserRo } from 'types/auth';
import { authApi } from 'app/services/auth';

type AuthState = {
  user?: UserRo;
  token?: string;
};

const initialState: AuthState = {};

const isAuthenticated = (action: AnyAction) => {
  return (
    authApi.endpoints.login.matchFulfilled(action) ||
    authApi.endpoints.signUp.matchFulfilled(action)
  );
};

const isProfileEdit = (action: AnyAction) => {
  return (
    authApi.endpoints.setProfile.matchFulfilled(action) ||
    authApi.endpoints.setMailSettings.matchFulfilled(action)
  );
};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addMatcher(isAuthenticated, (state, { payload }) => {
      state.token = payload.token;
      state.user = payload.user;
    });
    builder.addMatcher(
      authApi.endpoints.uploadAvatar.matchFulfilled,
      (state, { payload }) => {
        state.user = {
          ...state.user,
          avatarAddress: payload.path,
        } as UserRo;
      }
    );
    builder.addMatcher(
      authApi.endpoints.getProfile.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
    builder.addMatcher(isProfileEdit, (state, { meta }) => {
      state.user = {
        ...state.user,
        ...meta?.arg?.originalArgs,
      };
    });
  },
});

export const { logout } = slice.actions;

export default slice.reducer;
