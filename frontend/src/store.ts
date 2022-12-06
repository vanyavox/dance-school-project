import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import newsSlice from './features/News/newsList/newsSlice';
import userSlice from './features/Registration/userSlice';
import teacherSlice from './features/TeacherList/teacherSlice';

const store = configureStore({
  reducer: {
    teachers: teacherSlice,
    news: newsSlice,
    user: userSlice,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
