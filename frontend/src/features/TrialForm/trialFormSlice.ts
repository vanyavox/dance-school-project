import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { NewRequest, State } from './types/state';

const initialState: State = {
  requests: [],
};

export const initAsyncRequest = createAsyncThunk('requests/initAsyncRequest', () => fetch('http://localhost:4000/api/requests/')
  .then((result) => result.json())
  .then((data) => data));

export const addAsyncRequest = createAsyncThunk('requests/addAsyncRequest', (request: NewRequest) => fetch('http://localhost:4000/api/requests', {
  method: 'Post',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify(request)
})
  .then((result) => result.json())
  .then((data) => data));

export const deleteAsyncRequest = createAsyncThunk('requests/deleteAsyncRequest', (id: number) => fetch(`http://localhost:4000/api/requests/${id}`, {
  method: 'Delete',
})
  .then((result) => result.json())
  .then((data) => data));

export const changeAsyncRequest = createAsyncThunk('requests/changeAsyncRequest', (request: NewRequest) => fetch(`http://localhost:4000/api/requests/change/${request.id}`, {
  method: 'Put',
  body: JSON.stringify(request),
  headers: { 'Content-type': 'application/json' },
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
      })
      .addCase(deleteAsyncRequest.fulfilled, (state, action) => {
        state.requests = state.requests.filter((req) => req.id !== Number(action.payload));
      })
      .addCase(changeAsyncRequest.fulfilled, (state, action) => {
        console.log(action.payload);
        console.log(state.requests);

        state.requests = state.requests.map((req) => {
          if (req.id === action.payload.id) {
            return {
              ...req,
              status: action.payload.status
            };
          }
          return req;
        });
      });
  },
});

export const { addRequest, initRequest } = trialFormSlice.actions;
export default trialFormSlice.reducer;
