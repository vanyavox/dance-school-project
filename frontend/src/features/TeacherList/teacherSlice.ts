import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { State } from './types/state';

const initialState: State = {
  teachers: [],
};

export const addAsyncTeachers = createAsyncThunk('users/addAsyncTeachers', () => fetch('http://localhost:4000/api/teachers')
  .then((result) => result.json())
  .then((data) => data));

const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
    addTeacher: (state, action) => {
      state.teachers.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addAsyncTeachers.fulfilled, (state, action) => {
      state.teachers = [...state.teachers, ...action.payload];
    });
  },
});

export default teacherSlice.reducer;
export const { addTeacher } = teacherSlice.actions;
