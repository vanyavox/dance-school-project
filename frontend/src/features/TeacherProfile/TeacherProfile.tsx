import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import userEvent from '@testing-library/user-event';
import { Phone } from '@mui/icons-material';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncTeachers } from '../TeacherList/teacherSlice';
import style from './TeacherProfile.module.css';
import { NewRequest } from './types/state';

function TeacherProfile(): JSX.Element {
  // const { user } = useSelector((state: RootState) => state.user);
  const [teacher, setTeacher] = useState({ name: '', photo: '', surname: '', direction: '', experience: '', description: '' });
  
  const { teachers } = useSelector((state: RootState) => state.teachers);
  const { name, phone } = useSelector((state: RootState) => state.user);
  const user = useSelector((state: RootState) => state.user);

  const { id } = useParams();
  const dispatch = useAppDispatch();

 useEffect(() => {
    fetch(`http://localhost:4000/api/teachers/${id}`).then((data) => data.json()).then((res) => setTeacher(res));
  }, []);

  // modal dialog
  const [active, setActive] = useState(false);
  const handleOpen = (): void => setActive(!active);
  const handleClose = (): void => setActive(!active);
  // const handleAdd = (trialUser: NewRequest): void => {
  //   dispatch(addAsyncRequest(trialUser));
  // };
  const { register, handleSubmit } = useForm<NewRequest>();

  const onSubmit = (data: NewRequest): void => {
    // handleAdd(data);
    handleClose();
  };

  const [modal, setModal] = useState(true);

  function toogle(): void {
    setModal((prev: boolean) => !prev);
  }

  return (
    modal ? (
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
            {user.authChecked && (<button type="button" onClick={toogle}>Записаться</button>)}
          </div>
        </div>
      </>
    ) : (
      <div className={style.modal__form}>

        <form onSubmit={handleSubmit(onSubmit)} className={style.modal_form}>
          <div className={style.form__div}>
            <label htmlFor="name">Ваше имя</label>
            <input {...register('name')} name="name" type="text" placeholder="Ваше имя" value="user" />
            <label htmlFor="phone">Телефон для связи</label>
            <input {...register('phone')} type="tel" name="phone" list="tel-list" placeholder="+7 (XXX) XXX-XX-XX" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" value={phone} />
            <label htmlFor="lesson_type">Направление</label>
            <select {...register('lesson_type')} name="lesson_type">
              <option value="Латина">Латина</option>
              <option value="Стандарт">Стандарт</option>
              <option value="Двоеборье">Двоеборье</option>
            </select>
            <label htmlFor="date">Выбрать дату</label>
            <input {...register('date')} name="date" type="date" placeholder="Ваше имя" />
            <label htmlFor="time">Выбрать время</label>
            <input {...register('time')} name="time" type="time" placeholder="Ваше имя" />
          </div>
          <button className={style.btn__reg} onClick={handleOpen} type="submit">Записаться</button>
          <br />
          <button className={style.btn__reg} onClick={toogle} type="submit">Назад</button>
        </form>

      </div>
    )
  );
}

export default TeacherProfile;
