import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { State } from './types/state';
import * as api from './api';
import Tournament, { TournamentId } from './types/Toornament';
import TourList from './types/tourList';

const initialState: State = {
    tournaments: [],
    error: '',
    tourlists: []
};

export const loadToutnament = createAsyncThunk('toutnament', async () => api.loadTournament()
.then((data) => data.reverse()));

export const addToutnament = createAsyncThunk('toutnament/addToutnament', async (toutnament:Tournament) => {
    const toutnamentNew = await api.addTournament(toutnament);
     return toutnamentNew;
    }
);
export const addTourList = createAsyncThunk('toutnament/addTourList', async (tourList: TourList) => {
    const toutnamentNew = await api.addTourlist(tourList);
     return toutnamentNew;
    }
);
export const deleteToutnament = createAsyncThunk('toutnament/deleteToutnament', async (id:TournamentId) => {
    await api.deleteTournament(id);
    return id;
});

export const updateToutnament = createAsyncThunk('toutnament/uptateToutnament', async (toutnament:Tournament) => {
    await api.updateTournament(toutnament);
    return toutnament;
});

const newsSlice = createSlice({
name: 'news',
initialState,
reducers: {},
extraReducers: (builder) =>
    builder
    .addCase(loadToutnament.fulfilled, (state, action) => {
        state.tournaments = action.payload;
    })
    .addCase(loadToutnament.rejected, (state, action) => {
        state.error = 'data not received';
    })
    .addCase(addToutnament.fulfilled, (state, action) => {
        state.tournaments.unshift(action.payload);
    })
    .addCase(addTourList.fulfilled, (state, action) => {
        state.tourlists.unshift(action.payload);
    })
    .addCase(deleteToutnament.fulfilled, (state, action) => {
        state.tournaments = state.tournaments.filter(
            (tournament) => tournament.id !== action.payload);
    })
    .addCase(updateToutnament.fulfilled, (state, action) => {
        const oldEvent = state.tournaments.find(
            (x) => x.id === action.payload.id
          );
        Object.assign(oldEvent!, action.payload);
    })
});

export default newsSlice.reducer;
