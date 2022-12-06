import News, { NewsId } from './newsList/types/News';

export const loadNews = async (): Promise<News[]> => {
  const res = await fetch('http://localhost:4000/api/news');
  return res.json();
};

export const addNews = async (news: News): Promise<News> => {
  const res = await fetch('http://localhost:4000/api/news', {
    method: 'Post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(news)
  });
  return res.json();
};
export const deleteNews = async (id: NewsId): Promise<void> => {
  await fetch(`http://localhost:4000/api/news/${id}`, {
    method: 'Delete'
  });
};
export const updateNews = async (news: News): Promise<void> => {
  await fetch(`http://localhost:4000/api/news/${news.id}`, {
    method: 'PUT',
    body: JSON.stringify(news),
    headers: { 'Content-type': 'application/json' },
  });
};
