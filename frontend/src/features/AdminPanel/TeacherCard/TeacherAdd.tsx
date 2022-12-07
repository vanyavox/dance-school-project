import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../store';
import { addAsyncTeachers } from '../../TeacherList/teacherSlice';
import { NewTeacher } from '../../TeacherList/types/state';
import style from './TeacherAdd.module.css';

function TeacherAdd(): JSX.Element {
  const { register, handleSubmit } = useForm<NewTeacher>();
  const dispatch = useAppDispatch();

  const onSubmit = (data: NewTeacher): void => {
    handleAdd(data);
  };
  const handleAdd = (newTeach: NewTeacher): void => {
    dispatch(addAsyncTeachers(newTeach));
  };
  return (
    <div className={style.teacher_add}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Имя</label>
          <input {...register('name')} name="name" type="text" placeholder="Ваше имя" />
          <label htmlFor="surname">Фамилия</label>
          <input {...register('surname')} type="text" name="surname" placeholder="Фамилия" />
          <label htmlFor="direction">Направление</label>
          <select {...register('direction')} name="direction">
            <option value="Латина">Латина</option>
            <option value="Стандарт">Стандарт</option>
            <option value="Двоеборье">Двоеборье</option>
          </select>
          <label htmlFor="experience">Опыт работы</label>
          <input {...register('experience')} name="experience" type="text" placeholder="Опыт работы" />
          <label htmlFor="time">Описание</label>
          <textarea rows={10} {...register('description')} className={style.teacher_area} name="description" placeholder="Описание" />
          <label htmlFor="time">Фото</label>
          <input {...register('photo')} name="photo" type="text" placeholder="Фото" />
          <button type="submit">Добавить</button>
        </div>
      </form>
    </div>
  );
}

export default TeacherAdd;
