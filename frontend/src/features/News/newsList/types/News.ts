export default interface News {
    id: number;
    title: string;
    description: string;
    image: string;
    news_type: string;
}
 export type NewsId = News['id'];
