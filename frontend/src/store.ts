import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import newsSlice from './features/News/newsList/newsSlice';
import teacherSlice from './features/TeacherList/teacherSlice';
import trialFormSlice from './features/TrialForm/trialFormSlice';

const store = configureStore({
  reducer: {
    teachers: teacherSlice,
    news: newsSlice,
    requests: trialFormSlice
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
