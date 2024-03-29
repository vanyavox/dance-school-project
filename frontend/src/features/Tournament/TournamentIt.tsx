import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { Modal, Box } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Toornament from './types/Toornament';
import style from './tournamentcss.module.css';
import { RootState, useAppDispatch } from '../../store';
import { addTourList, deleteToutnament, updateToutnament } from './tournamentSlice';
import TourList from './types/tourList';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
  props,
  ref,
) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

function TournamentIt({ tournament }: { tournament: Toornament }): JSX.Element {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [editing, setEditing] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { role, authChecked, name, id, surname } = useSelector((state: RootState) => state.user);
  const { register, handleSubmit } = useForm<Toornament>();

  const [activeAdmin, setActiveAdmin] = useState(false);
  const handleOpenAdmin = (): void => {
    setActiveAdmin(!activeAdmin);
    setEditing(true);
  };

  const [activeUser, setActiveUser] = useState(false);
  const handleOpenUser = (): void => setActiveUser(!activeUser);

  const handleUpdate = (tournamentUpdate: Toornament): void => {
    dispatch(updateToutnament(tournamentUpdate));
    setOpenModal(true);
  };
  const handleAddTour = (tourAdd: TourList): void => {
    dispatch(addTourList(tourAdd));
    setSuccess(true);
  };

  const handleCloseModal = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenModal(false);
  };

  const handleCloseSuccessModal = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setSuccess(false);
  };

  const handleCloseEditModal = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setEditing(false);
  };

  function onSubmitAdmin(data: Toornament): void {
    const value: Toornament = {
      id: tournament.id,
      date: data.date,
      tour_name: data.tour_name,
      place: data.place,
      points: data.points,
    };
    handleUpdate(value);
    handleOpenAdmin();
  }
  function onSubmitUser(): void {
    const value: TourList = {
      student_id: Number(id),
      tournament_id: tournament.id,
    };
    handleClose();
    handleAddTour(value);
    hanleAcept();
  }
  // modal
  const stylemodal = {
    position: 'absolute' as 'absolute',
    top: '40%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    height: 250,
    bgcolor: '#884a76df',
    padding: 'px',
    p: 4,
  };
  const [open, setOpen] = useState<boolean>(false);
  const [acept, setAcept] = useState<boolean>(false);
  const handleOpen = (): void => setOpen(true);
  const handleClose = (): void => setOpen(false);
  const hanleAcept = (): void => setAcept(true);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"

      >
        <Box sx={stylemodal}>
          <form className={style.modal__content} onSubmit={handleSubmit(onSubmitUser)}>
            <h3>Подтвердите запись</h3>
            <p className={style.tournament__p__modal}>Название турнира: {tournament.tour_name}</p>
            <p className={style.tournament__p__modal}>Ваше ФИО: {name} {surname}</p>
            <button className={style.tournament__button__modal} type="submit">Подтвердить</button>
          </form>
        </Box>
      </Modal>
      <Snackbar open={success} autoHideDuration={5000} onClose={handleCloseSuccessModal}>
        <Alert onClose={handleCloseModal} severity="success" sx={{ width: '100%' }}>
          Запись прошла успешно
        </Alert>
      </Snackbar>
      <div className={style.tournament__line}>
        {!activeAdmin && (
          <>
            <p className={style.tournament__p}>{tournament.date}</p>
            <p className={style.tournament__p}>{tournament.tour_name}</p>
            <p className={style.tournament__p}>{tournament.place}</p>
            <p className={style.tournament__p}> {tournament.points}</p>
          </>
        )}
        {authChecked === true && role === 'student' && (
          <button type="button" className={!acept ? style.tournament__button : style.tournament__button_h} onClick={handleOpen}>Записаться на турнир</button>
        )}
        {role === 'admin' && authChecked === true && activeAdmin === false && (
          <>
            <button type="button" className={style.tournament__button} onClick={handleOpenAdmin}>Редактировать</button>

            <Snackbar open={editing} autoHideDuration={5000} onClose={handleCloseEditModal}>
              <Alert onClose={handleCloseEditModal} severity="success" sx={{ width: '100%' }}>
                Запись успешно отредактирована
              </Alert>
            </Snackbar>

            <button type="button" className={style.tournament__button} onClick={() => dispatch(deleteToutnament(tournament.id))}>Удалить</button>
          </>
        )}
        {activeAdmin && (
          <form onSubmit={handleSubmit(onSubmitAdmin)}>
            <label className={style.tournament__label}>Дата</label>
            <input type="date" {...register('date')} defaultValue={tournament.date} className={style.tournament__input} required />
            <label className={style.tournament__label}>Соревнование</label>
            <input {...register('tour_name')} defaultValue={tournament.tour_name} className={style.tournament__input} type="text" required />
            <label className={style.tournament__label}>Место проведения</label>
            <input {...register('place')} defaultValue={tournament.place} className={style.tournament__input} type="text" required />
            <label className={style.tournament__label}>Очки</label>
            <input {...register('points')} defaultValue={tournament.points} minLength={1} maxLength={3} className={style.tournament__input} type="text" required />
            <button type="submit" className={style.tournament__button}>Сохранить</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default TournamentIt;
