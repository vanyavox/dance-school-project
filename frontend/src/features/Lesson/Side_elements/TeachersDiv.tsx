import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import LessonsDiv from './LessonsDiv';
import { addLessons, loadLessons, updateLessons } from '../lessonSlice';
import style from '../lessoncss.module.css';
import Lesson from '../types/Lesson';
import { Teacher } from '../../TeacherList/types/state';
import { RootState, useAppDispatch } from '../../../store';

function TeachersDiv({ teacher }: { teacher: Teacher }):JSX.Element {
    const { lessons } = useSelector((state:RootState) => state.lessons);
    const dispatch = useAppDispatch();
    useEffect(() => {
        dispatch(loadLessons());
    }, []);
    const handleUpdate = (newsToUpdate: Lesson): void => {
        dispatch(updateLessons(newsToUpdate));
      };
      const handleAdd = (lessonToAdd: Lesson): void => {
        dispatch(addLessons(lessonToAdd));
      };

  return (
    <div key={teacher.id} className={style.table__line}>
          <div className={style.table__teachers}>
              <img src={teacher.photo} alt="teacher_photo" className={style.table__img} />
              <p>{teacher.name} {teacher.surname}, стаж: {teacher.experience} лет</p>
          </div>
      {
          lessons.map((lesson) => teacher.id === lesson.teacher_id && (
            <LessonsDiv
              key={lesson.id}
              lesson={lesson}
              handleUpdate={handleUpdate}
              handleAdd={handleAdd}
              teachId={teacher.id}
            />

          ))
      }
    </div>

  );
}

export default TeachersDiv;
