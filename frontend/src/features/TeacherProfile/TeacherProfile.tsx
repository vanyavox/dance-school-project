import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import style from './TeacherProfile.module.css';

function TeacherProfile(): JSX.Element {
  const [teacher, setTeacher] = useState({ name: '', photo: '', surname: '', direction: '', experience: '', description: '' });
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/api/teachers/${id}`).then((data) => data.json()).then((res) => setTeacher(res));
  }, []);

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
