/* eslint-disable no-param-reassign */
import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../app/store';
import { User } from '../../type/User';

export interface UserState {
  value: User | null;
}

const initialState: UserState = {
  value: null,
};

const currentUserSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload; 
    },
    resetCurrentUser: (state) => {
      state.value = null;
    },
  },
});

export const { resetCurrentUser, setCurrentUser } = currentUserSlice.actions;
export const selectCurrentUser = (state: RootState) => state.currentUser.value;

export default currentUserSlice.reducer;