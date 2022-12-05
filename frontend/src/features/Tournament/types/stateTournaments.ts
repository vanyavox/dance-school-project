export interface NewTournament {
  id: number;
  tour_name:string;
  place:string;
  date:string
}

export interface State {
  allTournaments: NewTournament[]
}

export type TournamentId = NewTournament['id'];

export type Action =
  | { type: 'tournaments/initAsyncTournament'; payload: NewTournament[] }
  | { type: 'tournaments/addAsyncTournament', payload: NewTournament };
