import { createSlice, AnyAction } from '@reduxjs/toolkit';
import { api as generatedApi, LoginRo } from '../services/api.generated';

const initialState: LoginRo = <LoginRo>{};

const isAuthenticated = (action: AnyAction) => {
  return (
    generatedApi.endpoints.authControllerLogin.matchFulfilled(action) ||
    generatedApi.endpoints.authControllerSignup.matchFulfilled(action)
  );
};

const isProfileEdit = (action: AnyAction) => {
  return generatedApi.endpoints.usersControllerUserProfile.matchFulfilled(
    action
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
      generatedApi.endpoints.mediaControllerUploadAvatar.matchFulfilled,
      (state, { payload }) => {
        state.user = {
          ...state.user,
          avatarAddress: payload.path,
        };
      }
    );
    builder.addMatcher(
      generatedApi.endpoints.usersControllerUserProfile.matchFulfilled,
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
