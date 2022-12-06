import React from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import Tournament from './TournamentIt';

function TournamentList(): JSX.Element {
  const { tournaments } = useSelector((state: RootState) => state.toutnament);
  console.log(tournaments);
  
  return (
    <div>Tournament
      <div>
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
