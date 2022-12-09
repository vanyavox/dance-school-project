import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import lessonSlice from './features/Lesson/lessonSlice';
import newsSlice from './features/News/newsList/newsSlice';
import userSlice from './features/Registration/userSlice';
import teacherSlice from './features/TeacherList/teacherSlice';
import tournamentSlice from './features/Tournament/tournamentSlice';
import trialFormSlice from './features/TrialForm/trialFormSlice';

const store = configureStore({
  reducer: {
    teachers: teacherSlice,
    user: userSlice,
    news: newsSlice,
    requests: trialFormSlice,
    lessons: lessonSlice,
    toutnament: tournamentSlice,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
