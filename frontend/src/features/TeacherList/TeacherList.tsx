import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncTeachers, addTeacher } from './teacherSlice';
import style from './TeacherList.module.css';

function TeacherList(): JSX.Element {
  const { teachers } = useSelector((state: RootState) => state.teachers);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(addAsyncTeachers());
  }, []);

  console.log(teachers);

  return (
    <div className={style.content__body}>
      Teachers

    </div>
  );
}

export default TeacherList;
