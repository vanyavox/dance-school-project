import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import newsSlice from './news/newsList/newsSlice';

const store = configureStore({
    reducer: {
        news: newsSlice,
    }
});

export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
