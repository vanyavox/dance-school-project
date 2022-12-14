import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useAppDispatch } from '../../store';
import { addAsyncRequest } from './trialFormSlice';
import { NewRequest } from './types/state';
import style from './TrialForm.module.css';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
  props,
  ref,
) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

function TrialForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [open, setOpen] = useState(false);

  const handleAdd = (trialUser: NewRequest): void => {
    dispatch(addAsyncRequest(trialUser));
    setOpen(true);
  };

  const { register, handleSubmit } = useForm<NewRequest>();

  const onSubmit = (data: NewRequest): void => {
    handleAdd(data);
  };
  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div className={style.trial__form}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.form__div}>
          <h1 className={style.form_title}>Записаться на пробное занятие</h1>
          <input {...register('name')} minLength={2} maxLength={15} name="name" type="text" placeholder="Ваше имя" className={style.form_input} required />
          <input {...register('phone')} type="tel" name="phone" list="tel-list" placeholder="+7" defaultValue="+7" pattern="^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$" className={style.form_input} required />
          <select {...register('lesson_type')} name="lesson_type" className={style.select_box} required>
            <option className={style.select_box__option} value="Выберите направление:">Выберите направление:</option>
            <option className={style.select_box__option} value="Латина">Латина</option>
            <option className={style.select_box__option} value="Стандарт">Стандарт</option>
            <option className={style.select_box__option} value="Двоеборье">Двоеборье</option>
          </select>
          <input {...register('date')} name="date" type="date" minLength={2} placeholder="Дата" className={style.form_input} required />
          <input {...register('time')} name="time" type="time" placeholder="Время" className={style.form_input} required />
        </div>
        <button className={style.btn__reg} type="submit">Записаться</button>
      </form>
      <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          Спасибо за заявку! Перезвоним в ближайшее время
        </Alert>
      </Snackbar>
    </div>
  );
}

export default TrialForm;
