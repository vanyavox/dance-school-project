import React from 'react';
import { Teacher } from '../../TeacherList/types/state';
import style from './TeacherCard.module.css';

function TeacherCard({ teacher }: { teacher: Teacher }): JSX.Element {
  return (
    <div className={style.teacher__card}>
      <div><b>Имя:</b> {teacher.name}</div>
      <div><b>Фамилия:</b> {teacher.surname}</div>
      <img src={teacher.photo} alt={teacher.name} />
      <div><b>Направление:</b> {teacher.direction}</div>
      <div><b>Стаж:</b> {teacher.experience}</div>
      <div><b>Описание:</b> {teacher.description}</div>
      <button>Редактировать профиль</button>
      <button className={style.btn_teacher_delete}>Удалить профиль</button>
    </div>
  );
}

export default TeacherCard;
