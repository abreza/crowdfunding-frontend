import { createSlice, AnyAction } from '@reduxjs/toolkit';
import type { UserRo } from 'types/auth';
import type { RootState } from 'app/store';
import { authApi } from 'app/services/auth';

type AuthState = {
  user: UserRo | null;
  token: string | null;
};

const initialState: AuthState = { user: null, token: null };

const isAuthenticated = (action: AnyAction) => {
  return (
    authApi.endpoints.login.matchFulfilled(action) ||
    authApi.endpoints.signUp.matchFulfilled(action)
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
    builder.addMatcher(
      authApi.endpoints.setProfile.matchFulfilled,
      (state, { meta }) => {
        state.user = {
          ...state.user,
          ...meta?.arg?.originalArgs,
        };
      }
    );
  },
});

export const { logout } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
