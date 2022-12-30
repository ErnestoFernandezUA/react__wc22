/* eslint-disable no-param-reassign */
import {
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { getMatches } from '../../api/matches';
import { useAppSelector } from '../../app/hooks';
// eslint-disable-next-line import/no-cycle
import { RootState } from '../../app/store';
import { preparingDateAndTime } from '../../data/preparigDataTime';

import { Match, MatchFromServer } from '../../type/Match';
import { Users } from '../../type/User';
import { selectUsers } from '../users/usersSlice';

// const fs = require('fs-extra');

export interface MatchesState {
  value: Match[];
  status: 'idle' | 'loading' | 'failed';
  error: string | null;
}

const initialState: MatchesState = {
  value: [],
  status: 'idle',
  error: null,
};

export const getAllMatchesAsync = createAsyncThunk(
  'matches/fetchMatches',
  async () => {
    const response: MatchFromServer[] = await getMatches();

    return response;
  },
);

const matchesSlice = createSlice({
  name: 'matches',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<Users>) => {
      if (state.value.length > 0) {
        state.value.forEach(match => {
          match.users = action.payload;
        });
      };
    },

    resetMatches: (state) => {
      state.value = initialState.value;
      state.status = initialState.status;
      state.error = initialState.error;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllMatchesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllMatchesAsync.fulfilled, (state, action) => {
        state.status = 'idle';

        // preparing data matches from server
           
        const preparingData = action.payload.map((matchFromServer: MatchFromServer): Match => {
          return {
            id: matchFromServer.id,
            isCompleted: matchFromServer.status === 'completed' ? true : false,
            date: preparingDateAndTime(matchFromServer.datetime).date,
            time: preparingDateAndTime(matchFromServer.datetime).time,
            home_team_country: matchFromServer.home_team_country,
            away_team_country: matchFromServer.away_team_country,
            home_team: { ...matchFromServer.home_team },
            away_team: { ...matchFromServer.away_team },

            //this property should linked to another part of state
            // users: useAppSelector(selectUsers),
            users: {},
          };
        });

        state.value = preparingData;
      })
      .addCase(getAllMatchesAsync.rejected, (state) => {
        state.status = 'failed';
      })
  },
});

export const { resetMatches, setUsers } = matchesSlice.actions;
export const selectMatches = (state: RootState) => state.matches.value;
export const selectMatchesStatus = (state: RootState) => state.matches.status;

export default matchesSlice.reducer;