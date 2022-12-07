import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { NewTeacher, State, Teacher } from './types/state';

const initialState: State = {
  teachers: [],
};

export const initAsyncTeachers = createAsyncThunk('teachers/initAsyncTeachers', () => fetch('http://localhost:4000/api/teachers')
  .then((result) => result.json())
  .then((data) => data));

export const deleteAsyncTeachers = createAsyncThunk('teachers/deleteAsyncTeachers', (id: number) => fetch(`http://localhost:4000/api/teachers/${id}`, {
  method: 'Delete',
})
  .then((result) => result.json())
  .then((data) => data));

export const addAsyncTeachers = createAsyncThunk('teachers/addAsyncTeachers', (teacher: NewTeacher) => fetch('http://localhost:4000/api/teachers/', {
  method: 'Post',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify(teacher)
})
  .then((result) => result.json())
  .then((data) => data));

const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(initAsyncTeachers.fulfilled, (state, action) => {
      state.teachers = action.payload;
    });
    builder.addCase(deleteAsyncTeachers.fulfilled, (state, action) => {
      state.teachers = state.teachers.filter((teacher) => teacher.id !== Number(action.payload));
    });
    builder.addCase(addAsyncTeachers.fulfilled, (state, action) => {
      state.teachers.push(action.payload.newT);
    });
  },
});

export default teacherSlice.reducer;
// export const { addTeacher } = teacherSlice.actions;
