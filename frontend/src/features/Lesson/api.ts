import Lesson from './types/Lesson';

export const loadLesson = async (): Promise<Lesson[]> => {
    const res = await fetch('http://localhost:4000/api/lessons');
    return res.json();
  };

export const updateLessons = async (lessons:Lesson): Promise<void> => {
  await fetch(`http://localhost:4000/api/lessons/${lessons.id}`, {
    method: 'PUT',
    body: JSON.stringify(lessons),
    headers: { 'Content-type': 'application/json' },
  });
};
export const addLessons = async (lessons:Lesson): Promise<Lesson> => {
  const res = await fetch('http://localhost:4000/api/news', {
    method: 'Post',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(lessons)
  });
  return res.json();
};
