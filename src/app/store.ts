import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from '@reduxjs/toolkit';
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { translatorReducer } from 'app/slices/localSlice';
import { projectsReducer } from 'app/slices/projectsSlice';
import authReducer from 'app/slices/authSlice';
import { rtkQueryErrorHandler } from './rtkQueryError';
import { authApi } from './services/auth';
import { projectApi } from './services/project';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

const isDevelopment = process.env.NODE_ENV === 'development';

const persistConfig = {
  key: 'root',
  storage,
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: combineReducers({
    [authApi.reducerPath]: authApi.reducer,
    [projectApi.reducerPath]: projectApi.reducer,
    auth: persistAuthReducer,
    projects: projectsReducer,
    local: translatorReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
      .concat(authApi.middleware)
      .concat(projectApi.middleware)
      .concat(rtkQueryErrorHandler),
  devTools: isDevelopment,
});

setupListeners(store.dispatch);

// "ReturnType" set type based on returned value from function
export type AppDispatch = typeof store.dispatch;
export type RootStateType = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootStateType,
  unknown,
  Action<string>
>;
