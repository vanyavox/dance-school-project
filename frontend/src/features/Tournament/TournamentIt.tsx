import React from 'react';
import Tournament from './types/Toornament';

function TournamentIt({ tournament }: { tournament: Tournament }): JSX.Element {
  return (
    <div>
      <p>{tournament.tour_name}</p>
      <p>{tournament.place}</p>
      <p>{tournament.date}</p>
      <p>{tournament.points}</p>
    </div>
  );
}

export default TournamentIt;
