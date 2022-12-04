import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { NewRequest, State } from './types/state';

const initialState: State = {
  requests: [],
};

export const initAsyncRequest = createAsyncThunk('requests/initAsyncRequest', () => fetch('http://localhost:4000/api/requests')
  .then((result) => result.json())
  .then((data) => data));

export const addAsyncRequest = createAsyncThunk('requests/addAsyncRequest', (request: NewRequest) => fetch('http://localhost:4000/api/requests', {
  method: 'Post',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify(request)
})
  .then((result) => result.json())
  .then((data) => data));

const trialFormSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    addRequest: (state, action) => {
      state.requests.push(action.payload);
    },
    initRequest: (state, action) => {
      state.requests = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(initAsyncRequest.fulfilled, (state, action) => {
        state.requests = action.payload;
      })
      .addCase(addAsyncRequest.fulfilled, (state, action) => {
        state.requests.push(action.payload);
      });
  },
});

export const { addRequest, initRequest } = trialFormSlice.actions;
export default trialFormSlice.reducer;
