import { createSlice, AnyAction } from '@reduxjs/toolkit';
import { LoginRo } from '../services/api.generated';
import { api } from '../services/api';

const initialState: LoginRo = <LoginRo>{};

const isAuthenticated = (action: AnyAction) => {
  return (
    api.endpoints.authControllerLogin.matchFulfilled(action) ||
    api.endpoints.authControllerSignup.matchFulfilled(action)
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
      api.endpoints.mediaControllerUploadAvatar.matchFulfilled,
      (state, { payload }) => {
        state.user = {
          ...state.user,
          avatarAddress: payload.path,
        };
      }
    );
    builder.addMatcher(
      api.endpoints.usersControllerUserProfile.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
      }
    );
    builder.addMatcher(
      api.endpoints.usersControllerUpdateUserProfile.matchFulfilled,
      (state, { meta }) => {
        state.user = {
          ...state.user,
          ...meta?.arg?.originalArgs?.userUpdateDto,
        };
      }
    );
  },
});

export const { logout } = slice.actions;

export default slice.reducer;
