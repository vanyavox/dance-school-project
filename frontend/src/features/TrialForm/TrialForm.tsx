import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../store';
import { addAsyncRequest } from './trialFormSlice';
import { NewRequest } from './types/state';
import style from './TrialForm.module.css';

function TrialForm(): JSX.Element {
  const dispatch = useAppDispatch();

  const handleAdd = (trialUser: NewRequest): void => {
    dispatch(addAsyncRequest(trialUser));
  };

  const { register, handleSubmit } = useForm<NewRequest>();

  const onSubmit = (data: NewRequest): void => {
    handleAdd(data);
  };

  return (
    <div className={style.trial__form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.form__div}>
          <h1 className={style.form_title}>Форма для записи</h1>
          <input {...register('name')} name="name" type="text" placeholder="Ваше имя" className={style.form_input} />
          <input {...register('phone')} type="tel" name="phone" list="tel-list" placeholder="+7 (XXX) XXX-XX-XX" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" className={style.form_input} />
          <select {...register('lesson_type')} name="lesson_type" className={style.select_box}>
            <option className={style.select_box__option} value="Выберите направление:">Выберите направление:</option>
            <option className={style.select_box__option} value="Латина">Латина</option>
            <option className={style.select_box__option} value="Стандарт">Стандарт</option>
            <option className={style.select_box__option} value="Двоеборье">Двоеборье</option>
          </select>
          <input {...register('date')} name="date" type="date" placeholder="Ваше имя" className={style.form_input} />
          <input {...register('time')} name="time" type="time" placeholder="Ваше имя" className={style.form_input} />
        </div>
        <button className={style.btn__reg} type="submit">Записаться</button>
      </form>
    </div>
  );
}

export default TrialForm;
