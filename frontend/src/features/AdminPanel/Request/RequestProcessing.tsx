import React from 'react';
import { useAppDispatch } from '../../../store';
import { changeAsyncRequest, deleteAsyncRequest } from '../../TrialForm/trialFormSlice';
import style from './Request.module.css';
import Req from './types/Request';

interface ReqProp {
  req: Req;
}

function Request({ req }: ReqProp): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className={style.request_card}>
      <div className={style.request_body}><strong>Имя:</strong> {req.name}</div>
      <div><strong>Дата:</strong> {req.date}</div>
      <div><strong>Время:</strong> {req.time}</div>
      <div><strong>Направление:</strong> {req.lesson_type}</div>
      <div><strong>Номер телефона:</strong> {req.phone}</div>
      <div>
        <select defaultValue={req.status}>
          <option value="Обрабатывается">Обрабатывается</option>
          <option value="Обработана">Обработана</option>
        </select>
        <button type="button" onClick={() => dispatch(changeAsyncRequest(req))} className={style.btn_change}>Изменить статус</button>
        <button type="button" onClick={() => dispatch(deleteAsyncRequest(req.id))} className={style.btn_delete}>Удалить заявку</button>
      </div>
    </div>
  );
}

export default Request;
