import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import matchesReducer from '../features/matches/matchesSlice';
// eslint-disable-next-line import/no-cycle
import currentUserReducer from '../features/currentUser/currentUserSlice';
// eslint-disable-next-line import/no-cycle
import usersReducer from '../features/users/usersSlice';

export const store = configureStore({
  reducer: {
    matches: matchesReducer,
    currentUser: currentUserReducer,
    users: usersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

/* eslint-disable @typescript-eslint/indent */
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
