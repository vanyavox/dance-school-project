import Tournament from './Toornament';

export interface State {
    tournaments: Tournament[],
    error: string;
}
