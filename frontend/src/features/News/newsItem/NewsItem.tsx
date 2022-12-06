import React from 'react';
import { useForm } from 'react-hook-form';
import { Modal, Box, TextField } from '@mui/material';
import News from '../newsList/types/News';
import style from './NewsItems.module.css';

interface NewsPropsm {
  oneNews: News;
  handleRemove: (oneNews: News)=> void
  handleUpdate: (oneNews: News)=> void
}

function NewsItem({ oneNews, handleRemove, handleUpdate }: NewsPropsm):JSX.Element {
// modal dialog
  const [open, setOpen] = React.useState(false);
  const handleOpen = ():void => setOpen(true);
  const handleClose = ():void => setOpen(false);
// useform
  const { register, handleSubmit } = useForm<News>();

  function onSubmit(data:News):void {
    const value: News = {
      id: oneNews.id,
      title: data.title,
      image: data.image,
      description: data.description,
      news_type: data.news_type };
    handleUpdate(value);
    handleClose();
  }

  return (
      <div id={String(oneNews.id)} className="news_item">
        <img src={oneNews.image} alt="News_image" className="news_image" />
        <h4>{oneNews.title}</h4>
        <h4>{oneNews.news_type}</h4>
        <p>{oneNews.description}</p>
        <button type="button" onClick={() => handleRemove(oneNews)}>Удалить</button>
        <button type="button" onClick={handleOpen}>Изменить</button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box className={style.modal__item}>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField
                      label="Название"
                      {...register('title')}
                    />
                    <input {...register('description')} />
                    <input {...register('image')} />
                    <input {...register('news_type')} />
                    <input type="submit" />
                  </form>
                </Box>
              </Modal>
      </div>
  );
}

export default NewsItem;
