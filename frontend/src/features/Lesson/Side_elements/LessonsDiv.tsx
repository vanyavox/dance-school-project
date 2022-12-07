import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Lesson from '../types/Lesson';

import style from '../lessoncss.module.css';
import { RootState } from '../../../store';

interface LessonPropsm {
  lesson: Lesson;
  handleAdd: (oneNews: Lesson) => void
  handleUpdate: (oneNews: Lesson) => void
  teachId: number
}

function LessonsDiv({ lesson, handleAdd, handleUpdate, teachId }: LessonPropsm): JSX.Element {
  // useform
  const { register, handleSubmit } = useForm<Lesson>();
  const [admin, setAdmin] = useState('admi'); // измени на другое что бы посмотреть за юзера
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
  const { role } = useSelector((state: RootState) => state.user);
  const [value, setValue] = useState('Обновить');

  return (
    <div key={lesson.id} className={style.table__week}>

      {role === 'admin' ? (
        <div>
          <div>
            <div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                  <div className={style.table__day}>
                    <p className={style.table__label}>Понедельник</p>
                    <input className={style.table__input} defaultValue={lesson.monday} {...register('monday')} />
                  </div>
                  <div className={style.table__day}>
                    <p className={style.table__label}>Вторник</p>
                    <input className={style.table__input} defaultValue={lesson.tuesday} {...register('tuesday')} />
                  </div>
                  <div className={style.table__day}>
                    <p className={style.table__label}>Среда</p>
                    <input className={style.table__input} defaultValue={lesson.wednesday} {...register('wednesday')} />
                  </div>
                  <div className={style.table__day}>
                    <p className={style.table__label}>Четверг</p>
                    <input className={style.table__input} defaultValue={lesson.thursday} {...register('thursday')} />
                  </div>
                  <div className={style.table__day}>
                    <p className={style.table__label}>Пятница</p>
                    <input className={style.table__input} defaultValue={lesson.friday} {...register('friday')} />
                  </div>
                  <div className={style.table__day}>
                    <p className={style.table__label}>Суббота</p>
                    <input className={style.table__input} defaultValue={lesson.saturday} {...register('saturday')} />
                  </div>
                  <div className={style.table__day}>
                    <p className={style.table__label}>Воскресенье</p>
                    <input className={style.table__input} defaultValue={lesson.sunday} {...register('sunday')} />
                  </div>
                </div>
                <button className={style.btn__trial} type="submit" onClick={() => setValue('Обновлено')}>{value}</button>
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
