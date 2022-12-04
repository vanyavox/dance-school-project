import React from 'react';
import { useForm } from 'react-hook-form';
import style from './TrialForm.module.css';
import TrialFormUser from './types/TrialFormUser';

function TrialForm(): JSX.Element {
  const handleAdd = (trialUser: TrialFormUser): void => {
    console.log((trialUser));
  };
  const { register, handleSubmit } = useForm<TrialFormUser>();

  const onSubmit = (data: TrialFormUser): void => {
    handleAdd(data);
  };
  return (
    <div className={style.trial__form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.form__div}>
          <label htmlFor="name">Ваше имя</label>
          <input {...register('name')} name="name" type="text" placeholder="Ваше имя" />
          <label htmlFor="phone">Телефон для связи</label>
          <input {...register('phone')} type="tel" name="phone" list="tel-list" placeholder="+7 (XXX) XXX-XX-XX" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" />
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
        <button className={style.btn__reg} type="submit">Записаться</button>
      </form>

    </div>
  );
}

export default TrialForm;