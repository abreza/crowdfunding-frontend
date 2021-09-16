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

const isDevelopment = process.env.NODE_ENV === 'development';

const persistConfig = {
  key: 'root',
  storage,
};

const persistAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: combineReducers({
    auth: persistAuthReducer,
    projects: projectsReducer,
    local: translatorReducer,
  }),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(rtkQueryErrorHandler),
  devTools: isDevelopment,
});

// "ReturnType" set type based on returned value from function
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
