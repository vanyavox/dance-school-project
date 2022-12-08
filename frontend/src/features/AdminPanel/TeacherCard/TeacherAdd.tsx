import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useAppDispatch } from '../../../store';
import { addAsyncTeachers } from '../../TeacherList/teacherSlice';
import { NewTeacher } from '../../TeacherList/types/state';
import style from './TeacherAdd.module.css';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
  props,
  ref,
) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

function TeacherAdd(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const { register, handleSubmit } = useForm<NewTeacher>();
  const dispatch = useAppDispatch();

  const onSubmit = (data: NewTeacher): void => {
    handleAdd(data);
  };
  const handleAdd = (newTeach: NewTeacher): void => {
    dispatch(addAsyncTeachers(newTeach));
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };
  return (
    <div className={style.teacher_add}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h3>Добавить преподавателя</h3>
          <label htmlFor="name">Имя</label>
          <br />
          <input {...register('name')} minLength={2} name="name" type="text" placeholder="Имя" required />
          <br />
          <label htmlFor="surname">Фамилия</label>
          <br />
          <input {...register('surname')} minLength={2} type="text" name="surname" placeholder="Фамилия" required />
          <br />
          <label htmlFor="direction">Направление</label>
          <br />
          <select {...register('direction')} name="direction">
            <option value="Латина">Латина</option>
            <option value="Стандарт">Стандарт</option>
            <option value="Двоеборье">Двоеборье</option>
          </select>
          <br />
          <label htmlFor="experience">Опыт работы</label>
          <br />
          <input {...register('experience')} name="experience" minLength={1} type="text" placeholder="Опыт работы" required />
          <br />
          <label htmlFor="time">Описание</label>
          <br />
          <textarea rows={10} {...register('description')} className={style.teacher_area} name="description" placeholder="Описание" required />
          <br />
          <label htmlFor="time">Фото</label>
          <br />
          <input {...register('photo')} name="photo" type="text" placeholder="Фото" required />
          <br />
          <button className={style.btn_add_new_save} type="submit">Добавить</button>
        </div>
        <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Преподаватель успешно добавлен!
          </Alert>
        </Snackbar>
      </form>
    </div>
  );
}

export default TeacherAdd;
