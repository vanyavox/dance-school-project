import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import * as api from '../api';
import News, { NewsId } from './types/News';
import { State } from './types/state';

const initialState: State = {
    news: [],
};

export const loadAsyncNews = createAsyncThunk('news', async () => api.loadNews()
.then((data) => data.reverse()));

export const addNews = createAsyncThunk('news/addNews', async (news:News) => {
    const newNews = await api.addNews(news);
     return newNews;
    }
);
export const deleteNews = createAsyncThunk('news/deleteNews', async (id:NewsId) => {
    await api.deleteNews(id);
    return id;
});

export const updateNews = createAsyncThunk('news/uptateNews', async (news:News) => {
    await api.updateNews(news);
    return news;
});

const newsSlice = createSlice({
name: 'news',
initialState,
reducers: {},
extraReducers: (builder) =>
    builder
    .addCase(loadAsyncNews.fulfilled, (state, action) => {
        state.news = action.payload;
    })
    .addCase(addNews.fulfilled, (state, action) => {
        state.news.unshift(action.payload);
    })
    .addCase(deleteNews.fulfilled, (state, action) => {
        state.news = state.news.filter((oneNews) => oneNews.id !== action.payload);
    })
    .addCase(updateNews.fulfilled, (state, action) => {
        const oldEvent = state.news.find(
            (x) => x.id === action.payload.id
          );
        Object.assign(oldEvent!, action.payload);
    })
});

export default newsSlice.reducer;
