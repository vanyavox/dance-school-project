import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Toornament from './types/Toornament';
import style from './tournamentcss.module.css';
import { RootState, useAppDispatch } from '../../store';
import { addTourList, deleteToutnament, updateToutnament } from './tournamentSlice';
import TourList from './types/tourList';

function TournamentIt({ tournament }: { tournament: Toornament }): JSX.Element {
  const dispatch = useAppDispatch();
  const { role, authChecked, name, id } = useSelector((state: RootState) => state.user);
  const { register, handleSubmit } = useForm<Toornament>();

  const [activeAdmin, setActiveAdmin] = useState(false);
  const handleOpenAdmin = (): void => setActiveAdmin(!activeAdmin);

  const [activeUser, setActiveUser] = useState(false);
  const handleOpenUser = (): void => setActiveUser(!activeUser);

  const handleUpdate = (tournamentUpdate: Toornament): void => {
    dispatch(updateToutnament(tournamentUpdate));
  };
  const handleAddTour = (tourAdd: TourList): void => {
    dispatch(addTourList(tourAdd));
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
    handleAddTour(value);
    handleOpenUser();
  }

  return (
    <>
    {activeUser && (

      <form className={style.modal__content} onSubmit={handleSubmit(onSubmitUser)}>
        <p>{tournament.tour_name}</p>
        <p>{name}</p>
        <button type="submit">Подтвердите запись</button>
      </form>
      )}
    <div className={style.tournament__line}>
      {!activeAdmin && (
        <>
        <p className={style.tournament__p}>{tournament.date}</p>
        <p className={style.tournament__p}>{tournament.tour_name}</p>
        <p className={style.tournament__p}>{tournament.place}</p>
        <p className={style.tournament__p}> {tournament.points}</p>
        </>
      )}
      { authChecked === true && role === 'student' && (
        <button type="button" className={style.tournament__button} onClick={handleOpenUser}>Записаться на турнир</button>
      )}
      {role === 'admin' && authChecked === true && activeAdmin === false && (
          <>
            <button type="button" className={style.tournament__button} onClick={handleOpenAdmin}>Редактировать</button>
            <button type="button" className={style.tournament__button} onClick={() => dispatch(deleteToutnament(tournament.id))}>Удалить</button>
          </>
        )}
        {activeAdmin && (
        <form onSubmit={handleSubmit(onSubmitAdmin)}>
            <label>Дата</label>
            <input type="date" {...register('date')} defaultValue={tournament.date} />
            <label>Соревнование</label>
            <input {...register('tour_name')} defaultValue={tournament.tour_name} />
            <label>Место проведения</label>
            <input {...register('place')} defaultValue={tournament.place} />
            <label>Очки</label>
            <input {...register('points')} defaultValue={tournament.points} />
            <button type="submit">Сохранить</button>
        </form>
)}
    </div>
    </>
  );
}

export default TournamentIt;
