import {
  MiddlewareAPI,
  isRejectedWithValue,
  Middleware,
} from '@reduxjs/toolkit';
import { logout } from './slices/authSlice';

export const rtkQueryErrorHandler: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      const { payload } = action;
      if (payload.status === 401) {
        next(logout());
      }
    }

    return next(action);
  };
