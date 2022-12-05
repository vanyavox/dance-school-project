import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import EditIcon from '@mui/icons-material/Edit';
import { useForm } from 'react-hook-form';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncTeachers } from '../TeacherList/teacherSlice';
import { loadLessons, updateLessons } from './lessonSlice';
import Lesson from './types/Lesson';
import style from './lessoncss.module.css';

function LessonForm():JSX.Element {
  const { lessons } = useSelector((state:RootState) => state.lessons);
  const { teachers } = useSelector((state:RootState) => state.teachers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(loadLessons());
    dispatch(addAsyncTeachers());
  }, []);

  const handleUpdate = (newsToUpdate: Lesson): void => {
    dispatch(updateLessons(newsToUpdate));
  };

  const { register, handleSubmit } = useForm<Lesson>();

  function onSubmit(data:Lesson):void {
      handleUpdate(data);
    }

  return (
<div className={style.form__div}>
  <div className={style.table__main}>
    <div className={style.table__line}>
        <p className={style.table__teachers}>Преподаватели</p>
        <div className={style.table__header}>
            <p className={style.table__td}>пн</p>
            <p className={style.table__td}>вт</p>
            <p className={style.table__td}>ср</p>
            <p className={style.table__td}>чт</p>
            <p className={style.table__td}>пт</p>
            <p className={style.table__td}>сб</p>
            <p className={style.table__td}>вс</p>
        </div>
    </div>
    {teachers.map((teacher) => (
    <div key={teacher.id} className={style.table__line}>
        <div className={style.table__teachers}>
            <img src={teacher.photo} alt="teacher_photo" className={style.table__img} />
            <p>{teacher.name} {teacher.surname}, стаж: {teacher.experience} лет</p>
            <button type="submit">Редактировать расписание</button>
        </div>
    {
        lessons.map((lesson) => teacher.id === lesson.teacher_id && (
         <div key={lesson.id} className={style.table__week}>
            <p className={style.table__td}>{lesson.monday}</p>
            <p className={style.table__td}>{lesson.tuesday}</p>
            <p className={style.table__td}>{lesson.wednesday}</p>
            <p className={style.table__td}>{lesson.thursday}</p>
            <p className={style.table__td}>{lesson.friday}</p>
            <p className={style.table__td}>{lesson.saturday}</p>
            <p className={style.table__td}>{lesson.sunday}</p>
         </div>
        ))
    }
    </div>
    ))}
  </div>
</div>
  );
}
export default LessonForm;
