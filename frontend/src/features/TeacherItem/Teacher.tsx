import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Teacher } from '../TeacherList/types/state';
import style from './Teacher.module.css';

function TeacherItem({ teacher }: { teacher: Teacher }): JSX.Element {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/teachers/${teacher.id}`)} className={style.teacher__card}>
      <div className={style.teacher__name}>{teacher.name} {teacher.surname}</div>
      <div className={style.teacher__direction}>{teacher.direction}</div>
      <div className={style.teacher__experience}>Опыт работы:{teacher.experience}</div>
      <img src={teacher.photo} alt={teacher.name} />
    </div>
  );
}

export default TeacherItem;
