import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncTeachers } from '../TeacherList/teacherSlice';
import style from './TeacherProfile.module.css';

function TeacherProfile(): JSX.Element {
  const { teachers } = useSelector((state: RootState) => state.teachers);
  const { id } = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addAsyncTeachers());
  }, [dispatch]);
  const currentTeacher = teachers.filter((teacher) => teacher.id === Number(id));
  const teacher = currentTeacher[0];

  return (
    <>
      <div className={style.teacher__links}>Школа Танцев/Преподаватели/{teacher.name}</div>
      <div className={style.teacher__info}>
        <div className={style.profile__left}>
          <img src={teacher.photo} alt="teacher" />
        </div>
        <div className={style.profile__right}>
          <div className={style.profile__name}>{teacher.name} {teacher.surname}</div>
          <div>Направление: {teacher.direction}</div>
          <div>Опыт работы: {teacher.experience}</div>
          <div>{teacher.description}</div>
          <button type="button">Записаться</button>
        </div>
      </div>
    </>
  );
}

export default TeacherProfile;
