import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { RootState, useAppDispatch } from '../../store';
import Tournament from './TournamentIt';
import style from './tournamentcss.module.css';
import Toornament from './types/Toornament';
import { addToutnament } from './tournamentSlice';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((
  props,
  ref,
) => <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />);

function TournamentList(): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const { tournaments } = useSelector((state: RootState) => state.toutnament);
  const dispatch = useAppDispatch();
  const { role, authChecked } = useSelector((state: RootState) => state.user);
  const { register, handleSubmit } = useForm<Toornament>();

  const onSubmit = (data: Toornament): void => {
    dispatch(addToutnament(data));
    handleOpen();
    setOpen(true);
  };
  const [active, setActive] = useState(false);
  const handleOpen = (): void => setActive(!active);

  const handleCloseModal = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div className={style.toutnament__list}>
      <p className={style.tournament__head}>Турниры</p>
      <div>
        {role === 'admin' && authChecked === true && (
          <div>
            <button type="button" onClick={handleOpen} className={style.tournament__button}>Добавить соревнование</button>
            {active &&
              (

                <form onSubmit={handleSubmit(onSubmit)}>
                  <p className={style.tournament__p}>Название турнира</p>
                  <input {...register('tour_name')} type="text" className={style.tournament__input} minLength={3} placeholder="Введите название турнира" required />
                  <p className={style.tournament__p}>Место проведения</p>
                  <input {...register('place')} type="text" className={style.tournament__input} placeholder="Место / Организатор" required />
                  <p className={style.tournament__p}>Дата проведения</p>
                  <input {...register('date')} type="date" className={style.tournament__input} placeholder="Введите дату" required />
                  <p className={style.tournament__p}>Очки</p>
                  <input {...register('points')} className={style.tournament__input} minLength={2} maxLength={3} placeholder="Введите очки" required />
                  <button type="submit" className={style.tournament__button}>Сохранить</button>
                </form>
              )}
            <Snackbar open={open} autoHideDuration={5000} onClose={handleCloseModal}>
              <Alert onClose={handleCloseModal} severity="success" sx={{ width: '100%' }}>
                Турнир успешно добавлен!
              </Alert>
            </Snackbar>
          </div>
        )}
        <div className={style.tournament__line}>
          <p className={style.tournament__p}>Дата</p>
          <p className={style.tournament__p}>Соревнование</p>
          <p className={style.tournament__p}>Город, Организация</p>
          <p className={style.tournament__p}>Общие очки</p>
          {role === 'student' && (<p className={style.tournament__p}>Запись на турнир</p>)}
          {role === 'admin' && (<p className={style.tournament__p}>Редактировать</p>)}
          {role === 'admin' && (<p className={style.tournament__p}>Удалить</p>)}
        </div>
        {tournaments.map((tournament) => (
          <Tournament
            key={tournament.id}
            tournament={tournament}
          />
        ))}
      </div>
    </div>
  );
}

export default TournamentList;
