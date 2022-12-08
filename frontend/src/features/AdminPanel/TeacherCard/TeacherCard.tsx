import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Teacher } from '../../TeacherList/types/state';
import { useAppDispatch } from '../../../store';
import { deleteAsyncTeachers, changeAsyncTeacher } from '../../TeacherList/teacherSlice';
import style from './TeacherCard.module.css';

function TeacherCard({ teacher }: { teacher: Teacher }): JSX.Element {
  const [edit, setEdit] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const handleAdd = (changedTeacher: Teacher): void => {
    dispatch(changeAsyncTeacher(changedTeacher));
  };

  const toggleModal = (): void => setEdit(!edit);

  const { register, handleSubmit } = useForm<Teacher>();

  const onSubmit = (data: Teacher): void => {
    handleAdd(data);
    toggleModal();
  };

  return (
    <div className={style.teacher__card}>
      <div><b>Имя:</b> {teacher.name}</div>
      <div><b>Фамилия:</b> {teacher.surname}</div>
      <img src={teacher.photo} alt={teacher.name} />
      <div><b>Направление:</b> {teacher.direction}</div>
      <div><b>Стаж:</b> {teacher.experience}</div>
      <div><b>Описание:</b> {teacher.description}</div>
      <button
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
            <h3>Редактирование</h3>
            <input className={style.hiddenform} {...register('idd')} name="idd" type="number" value={teacher.id} style={{visibility: 'hidden'}}/>
            <label htmlFor="name">Имя</label>
            <br />
            <input defaultValue={teacher.name} {...register('name')} name="name" type="text" placeholder="Имя" />
            <br />
            <label htmlFor="surname">Фамилия</label>
            <br />
            <input defaultValue={teacher.surname} {...register('surname')} type="text" name="surname" placeholder="Фамилия" />
            <br />
            <label htmlFor="direction">Направление</label>
            <br />
            <select defaultValue={teacher.direction} {...register('direction')} name="direction">
              <option value="Латина">Латина</option>
              <option value="Стандарт">Стандарт</option>
              <option value="Двоеборье">Двоеборье</option>
            </select>
            <br />
            <label htmlFor="experience">Опыт работы</label>
            <br />
            <input defaultValue={teacher.experience} {...register('experience')} name="experience" type="text" placeholder="Опыт работы" />
            <br />
            <label htmlFor="time">Описание</label>
            <br />
            <textarea defaultValue={teacher.description} rows={10} {...register('description')} className={style.teacher_area} name="description" placeholder="Описание" />
            <br />
            <label htmlFor="time">Фото</label>
            <br />
            <input defaultValue={teacher.photo} {...register('photo')} name="photo" type="text" placeholder="Фото" />
            <br />
            <button className={style.teacher_edit_save} type="submit">Сохранить изменения</button>
          </div>
        </form>
      )}
    </div>
  );
}

export default TeacherCard;
