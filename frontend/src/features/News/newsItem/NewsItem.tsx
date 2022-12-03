import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import News from '../newsList/types/News';
import './NewsItem.css';
import { Button, Modal, Box, Typography, TextField, Autocomplete } from '@mui/material';

interface NewsPropsm {
  oneNews: News;
  handleRemove: (oneNews: News)=> void
  handleUpdate: (oneNews: News)=> void
}

function NewsItem({ oneNews, handleRemove, handleUpdate }: NewsPropsm):JSX.Element {
  const [open, setOpen] = React.useState(false);
  const handleOpen = ():void => setOpen(true);
  const handleClose = ():void => setOpen(false);

  const { register, handleSubmit } = useForm<News>();
  // const onSubmit: SubmitHandler<News> = (data) => handleUpdate(data);
  function onSubmit(data:News):void {
    const value: News = {
      id: oneNews.id,
      title: data.title,
      image: data.image,
      description: data.description,
      news_type: data.news_type };
    handleUpdate(value);
  }

  const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
      <div id={String(oneNews.id)} className="news_item">
        <img src={oneNews.image} alt="News_image" className="news_image" />
        <h4>{oneNews.title}</h4>
        <h4>{oneNews.news_type}</h4>
        <p>{oneNews.description}</p>
        <button type="button" onClick={() => handleRemove(oneNews)}>Удалить </button>
        <button type="button" onClick={handleOpen}>Изменить </button>
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
      </div>
  );
}

export default NewsItem;
