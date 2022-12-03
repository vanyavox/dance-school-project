import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../../store';
import NewsItem from '../newsItem/NewsItem';
import { deleteNews, loadAsyncNews, updateNews } from './newsSlice';
import './NewsList.css';
import News from './types/News';

function NewsList():JSX.Element {
  const { news } = useSelector((state:RootState) => state.news);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadAsyncNews());
  }, []);
  const handleRemove = (newsToDelete: News): void => {
    dispatch(deleteNews(newsToDelete.id));
  };
  const handleUpdate = (newsToUpdate: News): void => {
    dispatch(updateNews(newsToUpdate));
  };

  return (
    <div className="news_list">
     <ul>
      {news.map((oneNews) => (
        <NewsItem
          key={oneNews.id}
          oneNews={oneNews}
          handleRemove={handleRemove}
          handleUpdate={handleUpdate}
        />
        ))}
     </ul>
    </div>
  );
}

export default NewsList;
