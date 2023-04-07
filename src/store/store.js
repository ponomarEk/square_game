import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { $api } from './api/api';
import { reducer as gameReducer } from './game/gameSlice';

const reducers = combineReducers({
  [$api.reducerPath]: $api.reducer,
  gameConfig: gameReducer,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat($api.middleware),
});
