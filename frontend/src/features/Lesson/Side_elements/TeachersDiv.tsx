import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Box, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { time } from 'console';
import LessonsDiv from './LessonsDiv';
import { addLessons, loadLessons, updateLessons } from '../lessonSlice';
import style from '../lessoncss.module.css';
import Lesson from '../types/Lesson';
import { Teacher } from '../../TeacherList/types/state';
import { RootState, useAppDispatch } from '../../../store';
import { addAsyncRequest } from '../../TrialForm/trialFormSlice';
import { NewRequest } from '../../TrialForm/types/state';

function TeachersDiv({ teacher }: { teacher: Teacher }):JSX.Element {
  const { lessons } = useSelector((state:RootState) => state.lessons);
  const dispatch = useAppDispatch();
  const { name, id, phone } = useSelector((state: RootState) => state.user);
  const { register, handleSubmit } = useForm<NewRequest>();

  const handleUpdate = (newsToUpdate: Lesson): void => {
      dispatch(updateLessons(newsToUpdate));
    };
    const handleAdd = (lessonToAdd: Lesson): void => {
      dispatch(addLessons(lessonToAdd));
    };
    const handleAddReqest = (reqestToAdd: NewRequest): void => {
      dispatch(addAsyncRequest(reqestToAdd));
    };

    function onSubmitReqest(data: NewRequest): void {
      const value: NewRequest = {
        id: 1,
        student_id: Number(id),
        name: data.name,
        // date: new Date().toString().slice(4, 15),
        date: data.date,
        time: data.time,
        lesson_type: teacher.direction,
        phone: data.phone,
        status: 'Обрабатывается',
      };
      handleClose();
      handleAddReqest(value);
    }

    const stylemodal = {
      position: 'absolute' as 'absolute',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 500,
      height: 300,
      bgcolor: '#884a7655',
      padding: 'px',
      p: 4,
    };
    const [open, setOpen] = React.useState(false);
    const handleOpen = ():void => setOpen(true);
    const handleClose = ():void => setOpen(false);
  return (
    <div key={teacher.id} className={style.table__line}>
          <div className={style.table__teachers}>
              <img src={teacher.photo} alt="teacher_photo" className={style.table__img} />
              <div className={style.about__teacher}>
              <p className={style.teacher__p}>{teacher.name} {teacher.surname} </p>
              <p className={style.teacher__p}>Cтаж: {teacher.experience}</p>
              <p className={style.teacher__p}> Направление: {teacher.direction}</p>
              </div>
              <button type="button" className={style.btn__trial} onClick={() => handleOpen()}>Записаться</button>
              <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
              >
                <Box sx={stylemodal}>
                <form className={style.modal__content} onSubmit={handleSubmit(onSubmitReqest)}>
                  <h3>Подтвердите запись</h3>
                  <input className={style.table__input} {...register('name')} defaultValue={name} />
                  <input className={style.table__input} {...register('phone')} defaultValue={phone} type="tel" />
                  <input className={style.table__input_d} {...register('date')} type="date" />
                  <select className={style.table__input} {...register('time')}>
                  {
                    lessons.map((lesson) => teacher.id === lesson.teacher_id &&
                   (
                    <>
                      <option>{lesson.monday} </option>
                      <option>{lesson.tuesday} </option>
                      <option>{lesson.wednesday} </option>
                      <option>{lesson.thursday} </option>
                      <option>{lesson.friday} </option>
                      <option>{lesson.saturday} </option>
                      <option>{lesson.sunday} </option>
                    </>
                  )
                  )
}
                  </select>

                  <button className={style.btn__trial} type="submit">Подтвердить</button>
                </form>
                </Box>
              </Modal>
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
