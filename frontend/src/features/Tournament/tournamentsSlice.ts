/* eslint-disable import/prefer-default-export */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { NewTournament, State } from './types/stateTournaments';

const initialState: State = {
  allTournaments: []
};

export const initAsyncTournament = createAsyncThunk('tournaments/initAsyncTournaments', () => fetch('http://localhost:4000/api/tournaments')
  .then((result) => result.json())
  .then((data) => data));

  export const addAsyncTournament = createAsyncThunk('tournaments/addAsyncTournament', (request: NewTournament) => fetch('http://localhost:4000/api/tournaments', {
  method: 'Post',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify(request)
})
  .then((result) => result.json())
  .then((data) => data));

  const tournamentsSlice = createSlice({
    name: 'tournaments',
    initialState,
    reducers: {
      addTournament: (state, action) => {
        state.allTournaments.push(action.payload);
      },
      initTournament: (state, action) => {
        state.allTournaments = action.payload;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(initAsyncTournament.fulfilled, (state, action) => {
          state.allTournaments = action.payload;
        })
        .addCase(addAsyncTournament.fulfilled, (state, action) => {
          state.allTournaments.push(action.payload);
        });
    },
  });
  export const { addTournament, initTournament } = tournamentsSlice.actions;
  export default tournamentsSlice.reducer;
