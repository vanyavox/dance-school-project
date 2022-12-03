import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import NewsItem from '../newsItem/NewsItem';
import { loadAsyncNews } from './newsSlice';
import './NewsList.css';

function NewsList():JSX.Element {
  const { news } = useSelector((state:RootState) => state.news);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadAsyncNews());
  }, []);
  return (
    <div className="news_list">
     <ul>
      {news.map((oneNews) => (<NewsItem key={oneNews.id} oneNews={oneNews} />))}
     </ul>
    </div>
  );
}

export default NewsList;
