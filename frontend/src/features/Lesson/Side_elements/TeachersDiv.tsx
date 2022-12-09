import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Modal, Box } from '@mui/material';
import { useForm } from 'react-hook-form';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import LessonsDiv from './LessonsDiv';
import { addLessons, updateLessons } from '../lessonSlice';
import style from '../lessoncss.module.css';
import Lesson from '../types/Lesson';
import { Teacher } from '../../TeacherList/types/state';
import { RootState, useAppDispatch } from '../../../store';
import { addAsyncRequest } from '../../TrialForm/trialFormSlice';
import { NewRequest } from '../../TrialForm/types/state';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
  props,
  ref,
) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

function TeachersDiv({ teacher }: { teacher: Teacher }): JSX.Element {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { lessons } = useSelector((state: RootState) => state.lessons);
  const dispatch = useAppDispatch();
  const { name, id, phone, authChecked, role, surname } = useSelector((state: RootState) => state.user);
  const { register, handleSubmit } = useForm<NewRequest>();

  const handleUpdate = (newsToUpdate: Lesson): void => {
    dispatch(updateLessons(newsToUpdate));
  };
  const handleAdd = (lessonToAdd: Lesson): void => {
    dispatch(addLessons(lessonToAdd));
  };
  const handleAddReqest = (reqestToAdd: NewRequest): void => {
    dispatch(addAsyncRequest(reqestToAdd));
    setOpenModal(true);
  };

  const handleCloseModal = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenModal(false);
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
    bgcolor: '#884a76df',
    padding: 'px',
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  const fio = `${name} ${surname}`;
  return (
    <div key={teacher.id} className={style.table__line}>
      <Snackbar open={openModal} autoHideDuration={5000} onClose={handleCloseModal}>
        <Alert onClose={handleCloseModal} severity="success" sx={{ width: '100%' }}>
          Заявка успешно добавлена!
        </Alert>
      </Snackbar>
      <div className={style.table__teachers}>
        <img src={teacher.photo} alt="teacher_photo" className={style.table__img} />
        <div className={style.about__teacher}>
          <p className={style.teacher__p}>{teacher.name} {teacher.surname} </p>
          <p className={style.teacher__p}>Cтаж: {teacher.experience}</p>
          <p className={style.teacher__p}> Направление: {teacher.direction}</p>
        </div>
        {authChecked && role === 'student' && (<button type="button" className={style.btn__trial} onClick={() => handleOpen()}>Записаться</button>)}

        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={stylemodal}>
            <form className={style.modal__content} onSubmit={handleSubmit(onSubmitReqest)}>
              <h3>Подтвердите запись</h3>
              <input className={style.table__input_mod} {...register('name')} value={fio} />
              <input className={style.table__input_mod} {...register('phone')} value={phone} type="tel" />
              <input className={style.table__input_d} {...register('date')} type="date" required />
              <select className={style.table__input_mod} {...register('time')} required>
                {
                  lessons.map((lesson) => teacher.id === lesson.teacher_id &&
                    (
                      <>
                        <option className={style.table__option_mod}>{lesson.monday} </option>
                        <option className={style.table__option_mod}>{lesson.tuesday} </option>
                        <option className={style.table__option_mod}>{lesson.wednesday} </option>
                        <option className={style.table__option_mod}>{lesson.thursday} </option>
                        <option className={style.table__option_mod}>{lesson.friday} </option>
                        <option className={style.table__option_mod}>{lesson.saturday} </option>
                        <option className={style.table__option_mod}>{lesson.sunday} </option>
                      </>
                    )
                  )
                }
              </select>

              <button className={style.btn__trial_mod} type="submit">Подтвердить</button>
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
