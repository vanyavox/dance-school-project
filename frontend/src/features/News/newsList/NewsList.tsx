import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Modal, Box } from '@mui/material';
import { RootState, useAppDispatch } from '../../../store';
import NewsItem from '../newsItem/NewsItem';
import { deleteNews, loadAsyncNews, updateNews, addNews } from './newsSlice';
import style from './NewsLists.module.css';
import News from './types/News';

function NewsList():JSX.Element {
  const { news } = useSelector((state:RootState) => state.news);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadAsyncNews());
  }, []);
// delete news item
  const handleRemove = (newsToDelete: News): void => {
    dispatch(deleteNews(newsToDelete.id));
  };
  console.log(news);
// update news item
  const handleUpdate = (newsToUpdate: News): void => {
    dispatch(updateNews(newsToUpdate));
  };
// add news item
  const handleAdd = (newsToAdd: News): void => {
    dispatch(addNews(newsToAdd));
  };
// modal dialog
  const [open, setOpen] = React.useState(false);
  const handleOpen = ():void => setOpen(true);
  const handleClose = ():void => setOpen(false);

  const { register, handleSubmit } = useForm<News>();

  function onSubmit(data:News):void {
      handleAdd(data);
      handleClose();
  }

  return (
    <div className="news_list">
      <button type="button" onClick={handleOpen}>Добавить </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register('title')} />
              <input {...register('description')} />
              <input {...register('image')} />
              <input {...register('news_type')} />
              <input type="submit" />
            </form>
          </Box>
        </Modal>
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
