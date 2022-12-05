import Lesson from './types/Lesson';

export const loadLesson = async (): Promise<{ lessons: Lesson[], message: string, error: string }> => {
    const res = await fetch('http://localhost:4000/api/lessons');
    return res.json();
  };

  export const updateLessons = async (lesson:Lesson): Promise<void> => {
    await fetch(`http://localhost:4000/api/lessons/${lesson.id}`, {
      method: 'PUT',
      body: JSON.stringify(lesson),
      headers: { 'Content-type': 'application/json' },
    });
  };
