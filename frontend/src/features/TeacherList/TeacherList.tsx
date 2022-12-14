import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import style from './TeacherList.module.css';
import Teacher from '../TeacherItem/Teacher';

function TeacherList(): JSX.Element {
  const { teachers } = useSelector((state: RootState) => state.teachers);

  return (
    <>
      <div className={style.teacher__links}>
        <a href="/">Школа Танцев</a>
        /Преподаватели
      </div>
      <h1>Преподаватели</h1>
      <div className={style.content__body}>
        {teachers.map((teacher) => (
          <Teacher key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </>
  );
}

export default TeacherList;
