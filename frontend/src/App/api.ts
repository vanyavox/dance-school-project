import News from '../features/news/newsList/types/News';

export const loadNews = async (): Promise<News[]> => {
    const res = await fetch('http://localhost:4000/api/news');

    return res.json();
  };

  export const addNews = async (): Promise<News> => {
    const res = await fetch('http://localhost:4000/api/news');
    console.log(res);

    return res.json();
  };
