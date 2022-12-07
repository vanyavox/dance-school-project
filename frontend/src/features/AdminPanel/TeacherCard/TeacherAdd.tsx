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
          <h3>Добавить преподавателя</h3>
          <label htmlFor="name">Имя</label>
          <br />
          <input {...register('name')} name="name" type="text" placeholder="Имя" />
          <br />
          <label htmlFor="surname">Фамилия</label>
          <br />
          <input {...register('surname')} type="text" name="surname" placeholder="Фамилия" />
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
          <input {...register('experience')} name="experience" type="text" placeholder="Опыт работы" />
          <br />
          <label htmlFor="time">Описание</label>
          <br />
          <textarea rows={10} {...register('description')} className={style.teacher_area} name="description" placeholder="Описание" />
          <br />
          <label htmlFor="time">Фото</label>
          <br />
          <input {...register('photo')} name="photo" type="text" placeholder="Фото" />
          <br />
          <button type="submit">Добавить</button>
        </div>
      </form>
    </div>
  );
}

export default TeacherAdd;
