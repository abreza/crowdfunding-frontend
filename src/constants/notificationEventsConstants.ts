import { loginAction } from 'reduxSlices/accountSlice';

export const successEvent = [loginAction.fulfilled.toString()];
export const failureEvent = [loginAction.rejected.toString()];
