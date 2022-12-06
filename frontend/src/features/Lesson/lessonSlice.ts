import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import Lesson from './types/Lesson';
import { State } from './types/state';

const initialState: State = {
    lessons: [],
    message: '',
    error: undefined,
};

export const loadLessons = createAsyncThunk('lessons', async () => api.loadLesson()
.then((data) => data)
);
export const updateLessons = createAsyncThunk('lessons/uptateLessons', async (lesson:Lesson) => {
    await api.updateLessons(lesson);
    return lesson;
});
export const addLessons = createAsyncThunk('lessons/addLessons', async (lesson:Lesson) => {
    const newNews = await api.addLessons(lesson);
     return newNews;
    }
);

const lessonSlice = createSlice({
    name: 'lesson',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
    builder
    .addCase(loadLessons.fulfilled, (state, action) => {
        state.lessons = action.payload;
    })
    .addCase(loadLessons.rejected, (state, action) => {
        state.error = action.error.message;
    })
    .addCase(updateLessons.fulfilled, (state, action) => {
        const oldEvent = state.lessons.find(
            (x) => x.id === action.payload.id
          );
        Object.assign(oldEvent!, action.payload);
    })
    .addCase(addLessons.fulfilled, (state, action) => {
        state.lessons.push(action.payload);
    })
});

export default lessonSlice.reducer;
