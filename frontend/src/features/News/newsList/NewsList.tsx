import React, { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Modal, Box } from '@mui/material';
import { RootState, useAppDispatch } from '../../../store';
import NewsItem from '../newsItem/NewsItem';
import { deleteNews, loadAsyncNews, updateNews, addNews } from './newsSlice';
import style from './NewsLists.module.css';
import News from './types/News';

function NewsList(): JSX.Element {
  const { news } = useSelector((state: RootState) => state.news);
  const { authChecked, role } = useSelector((state: RootState) => state.user);
  const dispatch = useAppDispatch();

  // delete news item
  const handleRemove = (newsToDelete: News): void => {
    dispatch(deleteNews(newsToDelete.id));
  };
  // update news item
  const handleUpdate = (newsToUpdate: News): void => {
    dispatch(updateNews(newsToUpdate));
  };
  // add news item
  const handleAdd = (newsToAdd: News): void => {
    dispatch(addNews(newsToAdd));
  };
  // modal dialog
  const [active, setActive] = useState(false);
  const handleOpen = (): void => setActive(!active);
  const handleClose = (): void => setActive(!active);

  const { register, handleSubmit } = useForm<News>();

  function onSubmit(data: News): void {
    handleAdd(data);
    handleClose();
  }

  return (
    <div className={style.news_list}>
      {role === 'admin' &&
      (<button type="button" onClick={handleOpen} className={style.news_button}>Добавить  Новость / Анонс</button>)}

      

      {active && (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
          <div className={active ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation()}>
            <div className={style.modal_form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('title')} placeholder="Название" />
                <br />
                <textarea rows={10} {...register('description')} placeholder="Описание" />
                <br />
                <input {...register('image')} placeholder="Ссылка на картинку" />
                <br />
                <input {...register('news_type')} placeholder="Тип события: Новость/ Анонс Турнира" />
                <br />
                <button className={style.button_add} type="submit">Добавить</button>
              </form>
            </div>
          </div>
        </div>
      )}
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
