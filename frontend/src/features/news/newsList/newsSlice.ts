import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from '../../../App/api';
import { State } from './types/state';

export const loadAsyncNews = createAsyncThunk('news', async () => api.loadNews()
.then((data) => data));

const initialState: State = {
    news: [],
};

const newsSlice = createSlice({
name: 'news',
initialState,
reducers: {},
extraReducers: (builder) =>
    builder
    .addCase(loadAsyncNews.fulfilled, (state, action) => {
        state.news = action.payload;
    }).addCase(loadAsyncNews.rejected, (state, action) => {
        console.log('Все плохо');
      }),

});

export default newsSlice.reducer;
