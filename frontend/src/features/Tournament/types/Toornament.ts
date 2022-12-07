export default interface Tournament {
    id: number;
    date: string;
    tour_name: string;
    place: string;
    points:number;
}
 export type TournamentId = Tournament['id'];
