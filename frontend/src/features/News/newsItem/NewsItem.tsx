import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import News from '../newsList/types/News';
import style from './NewsItems.module.css';

interface NewsPropsm {
  oneNews: News;
  handleRemove: (oneNews: News) => void
  handleUpdate: (oneNews: News) => void
}

function NewsItem({ oneNews, handleRemove, handleUpdate }: NewsPropsm): JSX.Element {
  // modal dialog
  const [active, setActive] = useState(false);
  const handleOpen = (): void => setActive(!active);
  const handleClose = (): void => setActive(false);
  // useform
  const { register, handleSubmit } = useForm<News>();

  function onSubmit(data: News): void {
    const value: News = {
      id: oneNews.id,
      title: data.title,
      image: data.image,
      description: data.description,
      news_type: data.news_type
    };
    handleUpdate(value);
    handleClose();
  }

  return (
    <div id={String(oneNews.id)} className={style.news_item}>
      <h4>{oneNews.news_type} {oneNews.title}</h4>
      <img src={oneNews.image} alt="News_image" className="news_image" />
      <p>{oneNews.description}</p>
      <button className={style.btn_delete} type="button" onClick={() => handleRemove(oneNews)}>Удалить</button>
      <button className={style.btn_edit} type="button" onClick={handleOpen}>Редактировать</button>

      {active && (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
          <div className={active ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation()}>
            <div className={style.modal_form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={oneNews.title} {...register('title')} />
                <br />
                <textarea rows={10} defaultValue={oneNews.description} {...register('description')} />
                <br />
                <input defaultValue={oneNews.image} {...register('image')} />
                <br />
                <input defaultValue={oneNews.news_type} {...register('news_type')} />
                <br />
                <button type="submit">Обновить</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default NewsItem;
