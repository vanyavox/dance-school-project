import Tournament from './Toornament';
import TourList from './tourList';

export interface State {
    tournaments: Tournament[],
    error: string;
    tourlists: TourList[]
}
