import Tournament, { TournamentId } from './types/Toornament';

export const loadTournament = async (): Promise<Tournament[]> => {
    const res = await fetch('http://localhost:4000/api/tournament');
    return res.json();
  };

  export const addTournament = async (tournament: Tournament): Promise<Tournament> => {
    const res = await fetch('http://localhost:4000/api/tournament', {
      method: 'Post',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(tournament)
    });
    return res.json();
  };
  export const deleteTournament = async (id: TournamentId): Promise<void> => {
    await fetch(`http://localhost:4000/api/tournament/${id}`, {
      method: 'Delete'
    });
  };
  export const updateTournament = async (tournament: Tournament): Promise<void> => {
    await fetch(`http://localhost:4000/api/tournament/${tournament.id}`, {
      method: 'PUT',
      body: JSON.stringify(tournament),
      headers: { 'Content-type': 'application/json' },
    });
  };
