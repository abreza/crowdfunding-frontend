import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { RootState } from 'app/store';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'http://crowdfunding.mamalan.ir/api/v1/',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
