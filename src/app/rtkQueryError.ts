import { toast } from 'react-toastify';
import {
  MiddlewareAPI,
  isRejectedWithValue,
  Middleware,
} from '@reduxjs/toolkit';

export const rtkQueryErrorHandler: Middleware =
  (api: MiddlewareAPI) => (next) => (action) => {
    if (isRejectedWithValue(action)) {
      alert('We got a rejected action!');
      toast.warn({ title: 'Async error!', message: action.error.data.message });
    }

    return next(action);
  };
