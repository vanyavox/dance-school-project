import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { addAsyncRequest } from '../TrialForm/trialFormSlice';
import { NewRequest } from '../TrialForm/types/state';
import style from './AdminPanel.module.css';
import Request from './Request/RequestProcessing';
import Req from './Request/types/Request';

function AdminPanel(): JSX.Element {
  const dispatch = useAppDispatch();
  const [active, setActive] = useState<boolean>(false);
  const [unAutorized, setUnautorized] = useState<boolean>(true);
  const { requests } = useSelector((state: RootState) => state.requests);

  const handleAdd = (trialUser: NewRequest): void => {
    dispatch(addAsyncRequest(trialUser));
  };

  const toggleModal = (): void => setActive(!active);

  const { register, handleSubmit } = useForm<NewRequest>();

  const onSubmit = (data: NewRequest): void => {
    handleAdd(data);
  };

  return (
    <div className={style.main__block}>
      <button className={style.btn_add_new} type="button" onClick={toggleModal}>Добавить заявку</button>
      {active && (
        <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
          <div className={active ? 'modal_content active' : 'modal_content'} onClick={(e) => e.stopPropagation()}>
            <div className={style.modal_form}>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className={style.form__div}>
                  <label htmlFor="name">Ваше имя</label>
                  <br />
                  <input {...register('name')} name="name" type="text" placeholder="Имя" />
                  <br />
                  <label htmlFor="phone">Номер телефона</label>
                  <br />
                  <input {...register('phone')} type="tel" name="phone" list="tel-list" placeholder="+7 (XXX) XXX-XX-XX" pattern="\+7\s?[\(]{0,1}9[0-9]{2}[\)]{0,1}\s?\d{3}[-]{0,1}\d{2}[-]{0,1}\d{2}" />
                  <br />
                  <label htmlFor="lesson_type">Направление</label>
                  <br />
                  <select {...register('lesson_type')} name="lesson_type">
                    <option value="Латина">Латина</option>
                    <option value="Стандарт">Стандарт</option>
                    <option value="Двоеборье">Двоеборье</option>
                  </select>
                  <br />
                  <label htmlFor="date">Дата</label>
                  <br />
                  <input {...register('date')} name="date" type="date" placeholder="Ваше имя" />
                  <br />
                  <label htmlFor="time">Время</label>
                  <br />
                  <input {...register('time')} name="time" type="time" placeholder="Ваше имя" />
                  <br />
                  <button className={style.btn_add_new_save} type="submit">Сохранить</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      <div>
        <h3>
          Неавторизованные заявки
          <button
            onClick={() => setUnautorized(!unAutorized)}
            className={style.btn_unautorized}
          >
            Показать / Скрыть
          </button>
        </h3>
        {unAutorized && (
          <div className={style.requests}>
            <div className={style.requests_block}>
              <div className={style.request_head}>Необработанные заявки</div>
              {requests.length !== 0 ? (
                requests.map((req: Req) => req.status === 'Обрабатывается' && (
                  <Request
                    key={req.id}
                    req={req}
                  />
                ))
              )
                : (<div>Записей нет</div>)}
            </div>
            <div className={style.requests_block}>
              <div className={style.request_head}>Необработанные заявки</div>
              {requests.length !== 0 ? (
                requests.map((req: Req) => req.status === 'Обработана' && (
                  <Request
                    key={req.id}
                    req={req}
                  />
                ))
              )
                : (<div>Записей нет</div>)}
            </div>
          </div>
        )}
      </div>

    </div>

  );
}

export default AdminPanel;