import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { NewTeacher, State, Teacher, TeacherId } from './types/state';

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

export const changeAsyncTeacher = createAsyncThunk('teachers/changeAsyncTeacher', (teacher: Teacher) => fetch(`http://localhost:4000/api/teachers/teacher/${teacher.idd}`, {
  method: 'Put',
  body: JSON.stringify(teacher),
  headers: { 'Content-type': 'application/json' },
})
  .then((result) => result.json())
  .then((data) => data));

const teacherSlice = createSlice({
  name: 'teachers',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(initAsyncTeachers.fulfilled, (state, action) => {
        state.teachers = action.payload;
      })
      .addCase(deleteAsyncTeachers.fulfilled, (state, action) => {
        state.teachers = state.teachers.filter((teacher) => teacher.id !== Number(action.payload));
      })
      .addCase(addAsyncTeachers.fulfilled, (state, action) => {
        state.teachers.push(action.payload.newT);
      })
      .addCase(changeAsyncTeacher.fulfilled, (state, action) => {
        state.teachers = state.teachers.map((teacher) => {
          if (teacher.id === action.payload.id) {
            return action.payload;
          }
          return teacher;
        });
      });
  },
});

export default teacherSlice.reducer;
