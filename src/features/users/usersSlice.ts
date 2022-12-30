/* eslint-disable no-param-reassign */
import {
  createSlice, PayloadAction,
} from '@reduxjs/toolkit';
import localUsersData from '../../app/local';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../app/store';
import { Users } from '../../type/User';

export interface UsersState {
  value: Users;
}

const initialState: UsersState = {
  value: localUsersData,
};

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    resetUser: (state, action: PayloadAction<{ nameUser: string} >) => {
      const result = { ...state.value };
      delete result[action.payload.nameUser];
      state.value = result;
    },
  },
});

export const { resetUser } = usersSlice.actions;
export const selectUsers = (state: RootState) => state.users.value;
// export const selectUserMatch = (name: string, matchId: number) => selectUsers[name][matchId];

export default usersSlice.reducer;