import React from 'react';
import { CardMedia, Card, CardContent, Typography, CardActions, Button } from '@mui/material';
import News from '../newsList/types/News';
import './NewsItem.css';

function NewsItem({ oneNews }: { oneNews:News }):JSX.Element {
  return (
      <div id={String(oneNews.id)} className="news_item">
        <img src={oneNews.image} alt="News_image" className="news_image" />
        <h4>{oneNews.title}</h4>
        <h4>{oneNews.news_type}</h4>
        <p>{oneNews.description}</p>
      </div>
  );
}

export default NewsItem;
