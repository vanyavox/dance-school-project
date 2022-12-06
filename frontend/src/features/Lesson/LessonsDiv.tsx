import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Lesson from './types/Lesson';
import style from './lessoncss.module.css';

interface LessonPropsm {
    lesson: Lesson;
    handleAdd: (oneNews: Lesson) => void
    handleUpdate: (oneNews: Lesson) => void
    teachId: number
  }

function LessonsDiv({ lesson, handleAdd, handleUpdate, teachId }: LessonPropsm):JSX.Element {
  // useform
  const { register, handleSubmit } = useForm<Lesson>();
const [admin, setAdmin] = useState('admin'); // измени на другое что бы посмотреть за юзера
  function onSubmit(data: Lesson): void {
    const value: Lesson = {
      id: lesson.id,
      monday: data.monday,
      tuesday: data.tuesday,
      wednesday: data.wednesday,
      thursday: data.thursday,
      friday: data.friday,
      saturday: data.saturday,
      sunday: data.sunday,
      lesson_type: data.lesson_type,
      teacher_id: teachId,
    };
    handleUpdate(value);
  }
  return (
    <div key={lesson.id} className={style.table__week}>

                {admin === 'admin' ? (
                <div>
                    <div>
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                        <input defaultValue={lesson.monday} {...register('monday')} />
                        <input defaultValue={lesson.tuesday} {...register('tuesday')} />
                        <input defaultValue={lesson.wednesday} {...register('wednesday')} />
                        <input defaultValue={lesson.thursday} {...register('thursday')} />
                        <input defaultValue={lesson.friday} {...register('friday')} />
                        <input defaultValue={lesson.saturday} {...register('saturday')} />
                        <input defaultValue={lesson.sunday} {...register('sunday')} />
                        <button type="submit">Обновить</button>
                        </form>
                    </div>
                    </div>
                </div>
                ) : (
                    <>
                        <p className={style.table__td}>{lesson.monday}</p>
                        <p className={style.table__td}>{lesson.tuesday}</p>
                        <p className={style.table__td}>{lesson.wednesday}</p>
                        <p className={style.table__td}>{lesson.thursday}</p>
                        <p className={style.table__td}>{lesson.friday}</p>
                        <p className={style.table__td}>{lesson.saturday}</p>
                        <p className={style.table__td}>{lesson.sunday}</p>
                    </>
                )}
    </div>
  );
}

export default LessonsDiv;
