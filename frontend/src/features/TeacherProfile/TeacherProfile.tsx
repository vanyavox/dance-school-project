import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import style from './TeacherProfile.module.css';
import { NewRequest } from './types/state';
import { addAsyncRequest } from '../TrialForm/trialFormSlice';

function TeacherProfile(): JSX.Element {
  const dispatch = useAppDispatch();

  const [teacher, setTeacher] = useState({ name: '', photo: '', surname: '', direction: '', experience: '', description: '' });

  const { phone } = useSelector((state: RootState) => state.user);
  const user = useSelector((state: RootState) => state.user);

  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/api/teachers/${id}`).then((data) => data.json()).then((res) => setTeacher(res));
  }, []);

  const [active, setActive] = useState(false);
  const { register, handleSubmit } = useForm<NewRequest>();

  const navigate = useNavigate();

  const onSubmit = (trialUser: NewRequest): void => {
    dispatch(addAsyncRequest(trialUser));
    setActive(true);
    setTimeout(() => {
      navigate('/');
      setModal((prev: boolean) => !prev);
      setActive(false);
    }, 5000);
  };

  const [modal, setModal] = useState(true);

  function toogle(): void {
    setModal((prev: boolean) => !prev);
  }

  return (
    modal ? (
      <>
        <div className={style.teacher__links}>
          <a href="/">Школа Танцев</a>
        /
        <a href="/teachers">Преподаватели</a>/{teacher.name}
        </div>
        <div className={style.teacher__info}>
          <div className={style.profile__left}>
            <img src={teacher.photo} alt="teacher" />
          </div>
          <div className={style.profile__right}>
            <div className={style.profile__name}>{teacher.name} {teacher.surname}</div>
            <div className={style.profile__p}>Направление: {teacher.direction}</div>
            <div className={style.profile__p}>Опыт работы: {teacher.experience}</div>
            <div className={style.profile__p}>{teacher.description}</div>
            {user.authChecked && (<button type="button" onClick={toogle}>Записаться</button>)}
          </div>
        </div>
      </>
    ) : (
      <div className={style.modal__form}>

        <form onSubmit={handleSubmit(onSubmit)} className={style.modal_form}>
          <div className={style.form__div}>
            <label className={style.label__teach} htmlFor="name">Ваше имя</label>
            <input className={style.input__teach} {...register('name')} name="name" type="text" placeholder="Ваше имя" value={user.name} required />
            <label className={style.label__teach} htmlFor="phone">Телефон для связи</label>
            <input className={style.input__teach} {...register('phone')} required type="tel" name="phone" list="tel-list" placeholder="+7 (XXX) XXX-XX-XX" value={phone} />
            <label className={style.label__teach} htmlFor="lesson_type">Направление</label>
            <input className={style.input__teach} {...register('lesson_type')} name="lesson_type" value={teacher.direction} required />
            <label className={style.label__teach} htmlFor="date">Выбрать дату</label>
            <input className={style.input__teach} {...register('date')} name="date" type="date" required />
            <label className={style.label__teach} htmlFor="time">Выбрать время</label>
            <input className={style.input__teach} {...register('time')} name="time" type="time" required />
          </div>
          <button className={style.btn__reg} type="submit">Записаться</button>
          {active && <div className={style.label__teach}>Спасибо! Наш Специалист свяжется с Вами в ближайшее время</div>}
          <br />
          <button className={style.btn__reg} onClick={toogle} type="button">Назад</button>
        </form>

      </div>
    )
  );
}

export default TeacherProfile;
