import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import style from './AdminPanel.module.css';
import Request from './Request/RequestProcessing';
import { initAsyncRequest } from '../TrialForm/trialFormSlice';
import Req from './Request/types/Request';

function AdminPanel(): JSX.Element {
  const { requests } = useSelector((state: RootState) => state.requests);

  return (
    <div className={style.main__block}>
      <div>
        <h3>Неавторизованные заявки</h3>
        <div className={style.requests}>
          <div className={style.requests_block}>
            <div className={style.request_head}>Необработанные заявки</div>
            {requests.map((req: Req) => req.status === 'Обрабатывается' && (
              <Request
                key={req.id}
                req={req}
              />
            )
            )}
          </div>
          <div className={style.requests_block}>
            <div className={style.request_head}>Необработанные заявки</div>
            {requests.map((req: Req) => req.status === 'Обработана' && (
              <Request
                key={req.id}
                req={req}
              />
            )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
