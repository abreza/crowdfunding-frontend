import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { UserRo } from 'types/auth';
import type { RootState } from 'app/store';

type AuthState = {
  user: UserRo | null;
  token: string | null;
};

const initialState: AuthState = { user: null, token: null };

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (
      state,
      {
        payload: { user, token },
      }: PayloadAction<{ user: UserRo; token: string }>
    ) => {
      state.user = user;
      state.token = token;
    },
    logout: () => initialState,
  },
});

export const { setCredentials, logout } = slice.actions;

export default slice.reducer;

export const selectCurrentUser = (state: RootState) => state.auth.user;
