import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncTeachers } from './teacherSlice';
import style from './TeacherList.module.css';
import Teacher from '../TeacherItem/Teacher';

function TeacherList(): JSX.Element {
  const { teachers } = useSelector((state: RootState) => state.teachers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addAsyncTeachers());
  }, [dispatch]);

  return (
    <>
      <div className={style.teacher__links}>Школа Танцев/Преподаватели</div>
      <div className={style.content__body}>
        {teachers.map((teacher) => (
          <Teacher key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </>
  );
}

export default TeacherList;
