import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import axios from 'configs/axios/axiosConfig';
import { loginUrl, updateProfileUrl } from 'constants/urls';
import { translator } from 'utils/translatorUtils';
import {
  loginActionType,
  updateProfileActionType,
  userType,
} from 'types/userTypes';

type stateType = {
  token: string;
  user: userType;
};

const localStorageAmount: stateType = JSON.parse(
  localStorage.getItem('account') as string
);

const initialState: stateType = localStorageAmount
  ? {
      user: {
        username: localStorageAmount.user.username,
        firstName: localStorageAmount.user.firstName,
        lastName: localStorageAmount.user.lastName,
        nationalId: localStorageAmount.user.nationalId,
        id: localStorageAmount.user.id,
      },
      token: localStorageAmount.token,
    }
  : {
      user: {
        username: '',
        firstName: '',
        lastName: '',
        nationalId: '',
        id: '',
      },
      token: '',
    };

export const loginAction = createAsyncThunk(
  'users/login',
  async ({ username, password, rememberMe }: loginActionType) =>
    await axios
      .post(loginUrl, {
        username,
        password,
      })
      .then(
        ({ status, data }: { status: number; data: stateType }) =>
          (status === 200 || status === 201) && { ...data, ...{ rememberMe } }
      )
);
export const updateProfileAction = createAsyncThunk(
  'users/updateProfile',
  async (
    { username, firstName, lastName, nationalId }: updateProfileActionType,
    thunkAPI
  ) =>
    await axios
      .post(updateProfileUrl, {
        username,
        firstName,
        lastName,
        nationalId,
      })
      .then(({ status }) => {
        if (status === 200 || status === 201) {
          const {
            account: { token },
          }: any = thunkAPI.getState();
          return {
            user: {
              username,
              firstName,
              lastName,
              nationalId,
            },
            token,
          };
        }
      })
);

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    logout: () => {
      localStorage.clear();
      localStorage.setItem('language', 'fa');
      toast.success(translator('youAreSuccessfullyLoggedOut'));
      return {
        user: {
          username: '',
          firstName: '',
          lastName: '',
          nationalId: '',
          id: '',
        },
        token: '',
      };
    },
  },
  extraReducers: {
    [loginAction.fulfilled.toString()]: (
      _,
      {
        payload,
      }: PayloadAction<{
        user: stateType['user'];
        token: stateType['token'];
        rememberMe?: boolean;
      }>
    ) => {
      const newAccountObj = { ...payload };
      delete newAccountObj.rememberMe;
      if (payload.rememberMe) {
        localStorage.setItem('account', JSON.stringify(newAccountObj));
      }
      toast.success(translator('welcome'));
      return newAccountObj;
    },
    [updateProfileAction.fulfilled.toString()]: (
      state: stateType,
      { payload }: PayloadAction<stateType>
    ) => {
      localStorage.setItem('account', JSON.stringify(payload));
      toast.success(translator('profileUpdatedSuccessfully'));
      return payload;
    },
  },
});

export const { logout: logoutAction } = accountSlice.actions;

export const { reducer: accountReducer } = accountSlice;
