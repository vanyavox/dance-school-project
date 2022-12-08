import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';
import style from './TeacherList.module.css';
import Teacher from '../TeacherItem/Teacher';

function TeacherList(): JSX.Element {
  const { teachers } = useSelector((state: RootState) => state.teachers);
  const navigate = useNavigate();

  const rotateBack = (): void => {
    navigate(-1);
  };

  return (
    <>
      <div className={style.teacher__links}>Школа Танцев/Преподаватели</div>
      <div className={style.content__body}>
        {teachers.map((teacher) => (
          <Teacher key={teacher.id} teacher={teacher} />
        ))}
      </div>
      <button onClick={rotateBack}>Назад</button>
    </>
  );
}

export default TeacherList;
