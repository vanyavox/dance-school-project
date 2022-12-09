import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Teacher } from '../../TeacherList/types/state';
import { useAppDispatch } from '../../../store';
import { deleteAsyncTeachers, changeAsyncTeacher } from '../../TeacherList/teacherSlice';
import style from './TeacherCard.module.css';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
  props,
  ref,
) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

function TeacherCard({ teacher }: { teacher: Teacher }): JSX.Element {
  const [edit, setEdit] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleAdd = (changedTeacher: Teacher): void => {
    dispatch(changeAsyncTeacher(changedTeacher));
  };

  const toggleModal = (): void => setEdit(!edit);

  const { register, handleSubmit } = useForm<Teacher>();

  const onSubmit = (data: Teacher): void => {
    handleAdd(data);
    toggleModal();
    setOpen(true);
  };

  const handleCloseModal = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={style.teacher__card}>
      <div className={style.profile__div}><b>Имя:</b> {teacher.name}</div>
      <div className={style.profile__div}><b>Фамилия:</b> {teacher.surname}</div>
      <img src={teacher.photo} alt={teacher.name} />
      <div className={style.profile__div}><b>Направление:</b> {teacher.direction}</div>
      <div className={style.profile__div}><b>Стаж:</b> {teacher.experience}</div>
      <div className={style.profile__div}><b>Описание:</b> {teacher.description}</div>
      <button
        className={style.teacher_edit_save}
        onClick={toggleModal}
      >Редактировать профиль
      </button>
      <button
        onClick={() => dispatch(deleteAsyncTeachers(teacher.id))}
        className={style.btn_teacher_delete}
      >
        Удалить профиль
      </button>
      {edit && (
        <form className={style.teacher_edit} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h3 className={style.h3__teach}>Редактирование</h3>
            <input className={style.hiddenform} {...register('idd')} name="idd" type="number" value={teacher.id} style={{ visibility: 'hidden' }} />
            <label htmlFor="name">Имя</label>
            <br />
            <input className={style.input__teach} defaultValue={teacher.name} {...register('name')} name="name" type="text" placeholder="Имя" />
            <br />
            <label htmlFor="surname">Фамилия</label>
            <br />
            <input className={style.input__teach} defaultValue={teacher.surname} {...register('surname')} type="text" name="surname" placeholder="Фамилия" />
            <br />
            <label htmlFor="direction">Направление</label>
            <br />
            <select className={style.input__teach} defaultValue={teacher.direction} {...register('direction')} name="direction">
              <option className={style.option__teach} value="Латина">Латина</option>
              <option className={style.option__teach} value="Стандарт">Стандарт</option>
              <option className={style.option__teach} value="Двоеборье">Двоеборье</option>
            </select>
            <br />
            <label htmlFor="experience">Опыт работы</label>
            <br />
            <input className={style.input__teach} defaultValue={teacher.experience} {...register('experience')} name="experience" type="text" placeholder="Опыт работы" />
            <br />
            <label htmlFor="time">Описание</label>
            <br />
            <textarea className={style.input__teach} defaultValue={teacher.description} rows={10} {...register('description')} name="description" placeholder="Описание" />
            <br />
            <label htmlFor="time">Фото</label>
            <br />
            <input className={style.input__teach} defaultValue={teacher.photo} {...register('photo')} name="photo" type="text" placeholder="Фото" />
            <br />
            <button className={style.teacher_edit_save} type="submit">Сохранить изменения</button>
          </div>
        </form>
      )}
      <Snackbar open={open} autoHideDuration={5000} onClose={handleCloseModal}>
        <Alert onClose={handleCloseModal} severity="success" sx={{ width: '100%' }}>
          Профиль учителя успешно обновлен
        </Alert>
      </Snackbar>
    </div>
  );
}

export default TeacherCard;
