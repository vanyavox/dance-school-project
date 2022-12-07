import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RootState, useAppDispatch } from '../../store';
import Tournament from './TournamentIt';
import style from './tournamentcss.module.css';
import Toornament from './types/Toornament';
import { addToutnament } from './tournamentSlice';

function TournamentList(): JSX.Element {
  const { tournaments } = useSelector((state: RootState) => state.toutnament);
  const dispatch = useAppDispatch();
  const { role, authChecked } = useSelector((state: RootState) => state.user);
  const { register, handleSubmit } = useForm<Toornament>();

  const onSubmit = (data: Toornament): void => {
    dispatch(addToutnament(data));
    handleOpen();
  };
  const [active, setActive] = useState(false);
  const handleOpen = (): void => setActive(!active);

  return (
    <div className={style.toutnament__list}>
      <p className={style.tournament__head}>Турниры</p>
      <div>
        {role === 'admin' && authChecked === true && (
          <div>
            <button type="button" onClick={handleOpen}>Добавить соревнование</button>
            {active &&
             (

            <form onSubmit={handleSubmit(onSubmit)}>
            <p>Название турнира</p>
            <input {...register('tour_name')} type="text" required autoComplete="off" name="tour_name" placeholder="Введите название турнира" />
            <p>Место проведения</p>
            <input {...register('place')} type="text" required autoComplete="off" name="place" placeholder="Место турнира" />
            <p>Дата проведения</p>
            <input {...register('date')} type="date" name="date" placeholder="Введите дату" />
            <button type="submit">Сохранить</button>
            </form>
             )}
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
