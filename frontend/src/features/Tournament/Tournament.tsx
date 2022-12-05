import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../../store';
import { addAsyncTournament } from './tournamentsSlice';
import { NewTournament } from './types/stateTournaments';

function Tournament():JSX.Element {
  // const addNewTournament = (event: React.FormEvent): void => {
  //   event.preventDefault();
  //   const target = event.target as typeof event.target & {
  //     name: { value: string };
  //     place: { value: string };
  //     date: { value:string }
  //   };
  //   const name = target.name.value;
  //   const place = target.place.value;
  //   const date = target.date.value;
  //   console.log(name, place, date);
  // };
  const dispatch = useAppDispatch();
  const handleAdd = (ggg: NewTournament): void => {
    dispatch(addAsyncTournament(ggg));
  };
  const { register, handleSubmit } = useForm<NewTournament>();

  const onSubmit = (data: NewTournament): void => {
    handleAdd(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
      <p>Название турнира</p>
      <input {...register('tour_name')} type="text" required autoComplete="off" name="tour_name" placeholder="Введите название турнира" />
      <p>Место проведения</p>
      <input {...register('place')} type="text" required autoComplete="off" name="place" placeholder="Место турнира" />
     <p>Дата проведения</p>
     <input {...register('date')} type="date" name="date" placeholder="Введите дату" />
     <button type="submit">Добавить соревнование</button>
      </form>
    </div>
  );
}

export default Tournament;
